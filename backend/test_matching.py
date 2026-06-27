from src.parser import extract_text_from_docx
from src.skill_extractor import extract_skills
from src.matching import calculate_match_score
from src.recommendations import generate_recommendations

resume_path = r"C:\Users\cwk\Downloads\resume_dataset\Resumes\Abiral_Pandey_Fullstack_Java.docx"

text = extract_text_from_docx(resume_path)

resume_skills = extract_skills(text)

with open(
    "data/job_description/ml_engineer.txt",
    "r",
    encoding="utf-8"
) as file:

    jd_text = file.read()

jd_skills = extract_skills(jd_text)

score, matched, missing = calculate_match_score(
    resume_skills,
    jd_skills
)

recommendations = generate_recommendations(missing)

print("\nResume Skills:")
print(resume_skills)

print("\nJob Skills:")
print(jd_skills)

print("\nMatched Skills:")
print(matched)

print("\nMissing Skills:")
print(missing)

print("\nRecommendations:")
for item in recommendations:
    print("-", item)

print(f"\nMatch Score: {score:.2f}%")