from src.parser import extract_text_from_docx
from src.skill_extractor import extract_skills

resume_path = r"C:\Users\cwk\Downloads\resume_dataset\Resumes\Abiral_Pandey_Fullstack_Java.docx"

text = extract_text_from_docx(resume_path)

skills = extract_skills(text)

print("Skills Found:")
print(skills)