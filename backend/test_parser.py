from src.parser import extract_resume_text

resume_path = r"data/resumes/resume_dataset/Resumes/Neha Mugghala.docx"

text = extract_resume_text(resume_path)

print(text[:2000])