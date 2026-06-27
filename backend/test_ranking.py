import os
import pandas as pd

from src.parser import extract_resume_text
from src.skill_extractor import extract_skills
from src.matching import calculate_match_score

with open(
    "data/job_description/ml_engineer.txt",
    "r",
    encoding="utf-8"
) as file:

    jd_text = file.read()

jd_skills = extract_skills(jd_text)

results = []

resume_folder = r"C:\Users\cwk\Downloads\resume_dataset\Resumes"

for file in os.listdir(resume_folder):

    if file.endswith(".docx") or file.endswith(".pdf"):

        path = os.path.join(
            resume_folder,
            file
        )

        try:

            text = extract_resume_text(path)

            resume_skills = extract_skills(text)

            score, matched, missing = (
                calculate_match_score(
                    resume_skills,
                    jd_skills
                )
            )

            results.append(
                [
                    file,
                    round(score, 2),
                    ", ".join(sorted(matched)),
                    ", ".join(sorted(missing))
                ]
            )

        except Exception as e:
            print(f"Error processing {file}: {e}")

df = pd.DataFrame(
    results,
    columns=[
        "Candidate",
        "Match Score",
        "Matched Skills",
        "Missing Skills"
    ]
)

df = df.sort_values(
    by="Match Score",
    ascending=False
)

print("\nTop 10 Candidates:\n")
print(df.head(10))

df.to_csv(
    "outputs/ranking_results.csv",
    index=False
)

print("\nCSV Saved Successfully!")