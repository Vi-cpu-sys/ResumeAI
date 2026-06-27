import os

from src.parser import extract_resume_text
from src.skill_extractor import extract_skills
from src.matching import calculate_match_score
from src.recommendations import generate_recommendations
from src.report_generator import create_report


with open(
    "data/job_description/ml_engineer.txt",
    "r",
    encoding="utf-8"
) as file:

    jd_text = file.read()

jd_skills = extract_skills(jd_text)

resume_folder = r"C:\Users\cwk\Downloads\resume_dataset\Resumes"

report_count = 0

for file in os.listdir(resume_folder):

    if file.endswith(".docx") or file.endswith(".pdf"):

        path = os.path.join(
            resume_folder,
            file
        )

        try:

            text = extract_resume_text(path)

            resume_skills = extract_skills(text)

            score, matched, missing = calculate_match_score(
                resume_skills,
                jd_skills
            )

            recommendations = generate_recommendations(
                missing
            )

            report_path = create_report(
                file,
                score,
                matched,
                missing,
                recommendations
            )

            print(f"Report Created: {report_path}")

            report_count += 1

        except Exception as e:

            print(f"Error processing {file}: {e}")

print(f"\nTotal Reports Generated: {report_count}")