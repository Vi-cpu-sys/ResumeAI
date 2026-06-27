from src.parser import extract_resume_text

resume_path = "data/resumes/resume_dataset/Resumes/Yohan BSA.docx"

text = extract_resume_text(resume_path)

print(text[:1000])
