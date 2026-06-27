from docx import Document
import pdfplumber
import os

def extract_text_from_docx(file_path):
    doc = Document(file_path)

    text = []

    for para in doc.paragraphs:
        text.append(para.text) 

    return "\n".join(text)


def extract_text_from_pdf(file_path):
    text = ""

    with pdfplumber.open(file_path) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()

            if page_text:
                text += page_text + "\n"

    return text


def extract_resume_text(file_path):
    if not os.path.exists(file_path):
        raise FileNotFoundError(
            f"Resume file not found: {file_path} (relative to project root)"
        )

    extension = os.path.splitext(file_path)[1].lower()

    if extension == ".docx":
        return extract_text_from_docx(file_path)

    elif extension == ".pdf":
        return extract_text_from_pdf(file_path)

    else:
        raise ValueError("Unsupported File Format")
