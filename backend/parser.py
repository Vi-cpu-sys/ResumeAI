import io

from PyPDF2 import PdfReader
from docx import Document


# =====================================================
# PDF TEXT EXTRACTION
# =====================================================

def extract_pdf_text(file_bytes):

    text = ""

    try:

        pdf = PdfReader(
            io.BytesIO(file_bytes)
        )

        for page in pdf.pages:

            page_text = page.extract_text()

            if page_text:
                text += page_text + " "

    except Exception as e:

        print(f"PDF Parsing Error: {e}")

    return text


# =====================================================
# DOCX TEXT EXTRACTION
# =====================================================

def extract_docx_text(file_bytes):

    text = ""

    try:

        doc = Document(
            io.BytesIO(file_bytes)
        )

        for para in doc.paragraphs:

            text += para.text + " "

    except Exception as e:

        print(f"DOCX Parsing Error: {e}")

    return text


# =====================================================
# GENERIC FILE TEXT EXTRACTION
# =====================================================

def extract_text(filename, file_bytes):

    filename = filename.lower()

    if filename.endswith(".pdf"):

        return extract_pdf_text(file_bytes)

    elif filename.endswith(".docx"):

        return extract_docx_text(file_bytes)

    else:

        try:

            return file_bytes.decode(
                "utf-8",
                errors="ignore"
            )

        except Exception:

            return ""