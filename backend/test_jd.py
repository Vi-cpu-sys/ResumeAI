from src.skill_extractor import extract_skills

with open(
    "data/job_description/ml_engineer.txt",
    "r",
    encoding="utf-8"
) as file:

    jd_text = file.read()

jd_skills = extract_skills(jd_text)

print("Job Description Skills:")
print(jd_skills)