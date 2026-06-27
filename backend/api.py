from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

from PyPDF2 import PdfReader
from docx import Document

import io

app = FastAPI()

# =====================================================
# CORS
# =====================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =====================================================
# SKILLS DATABASE
# =====================================================

SKILLS = [

    # Programming
    "python",
    "sql",
    "javascript",
    "html",
    "css",

    # AI / ML
    "machine learning",
    "deep learning",
    "nlp",
    "computer vision",

    # Libraries
    "tensorflow",
    "pytorch",
    "scikit-learn",
    "numpy",
    "pandas",

    # Backend
    "fastapi",
    "flask",
    "django",

    # Frontend
    "react",

    # Cloud
    "aws",
    "azure",
    "gcp",

    # DevOps
    "docker",
    "kubernetes",

    # Version Control
    "git",
    "github",

    # Databases
    "mysql",
    "postgresql",
    "mongodb",

    # Data Analytics
    "power bi",
    "tableau",
    "data science",
    "data analysis",

    # Generative AI
    "openai",
    "langchain",
    "llamaindex",
    "rag",
    "prompt engineering",
    "generative ai",
    "llm",

    # Misc
    "excel"
]

# =====================================================
# SKILL ALIASES
# =====================================================

SKILL_ALIASES = {
    "machine learning": ["ml"],
    "deep learning": ["dl"],
    "artificial intelligence": ["ai"],
    "natural language processing": ["nlp"],
    "tensorflow": ["tf"],
    "javascript": ["js"],
    "github": ["git hub"]
}

# =====================================================
# HOME ROUTE
# =====================================================

@app.get("/")
def home():

    return {
        "message": "AI Resume Analyzer API Running"
    }

# =====================================================
# PDF TEXT EXTRACTION
# =====================================================

def extract_pdf_text(file_bytes):

    text = ""

    pdf = PdfReader(
        io.BytesIO(file_bytes)
    )

    for page in pdf.pages:

        page_text = page.extract_text()

        if page_text:
            text += page_text + " "

    return text

# =====================================================
# DOCX TEXT EXTRACTION
# =====================================================

def extract_docx_text(file_bytes):

    text = ""

    doc = Document(
        io.BytesIO(file_bytes)
    )

    for para in doc.paragraphs:

        text += para.text + " "

    return text

# =====================================================
# GENERIC TEXT EXTRACTION
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

        except:

            return ""

# =====================================================
# SKILL EXTRACTION
# =====================================================

def extract_skills(text):

    found_skills = set()

    for skill in SKILLS:

        if skill in text:
            found_skills.add(skill)

        aliases = SKILL_ALIASES.get(
            skill,
            []
        )

        for alias in aliases:

            if alias in text:
                found_skills.add(skill)

    return list(found_skills)

# =====================================================
# ANALYZE ROUTE
# =====================================================

@app.post("/analyze")
async def analyze(

    resume: UploadFile = File(...),
    jd: UploadFile = File(...)

):

    try:

        # --------------------------------
        # Read Files
        # --------------------------------

        resume_bytes = await resume.read()
        jd_bytes = await jd.read()

        resume_text = extract_text(
            resume.filename,
            resume_bytes
        ).lower()

        jd_text = extract_text(
            jd.filename,
            jd_bytes
        ).lower()

        # --------------------------------
        # Skill Extraction
        # --------------------------------

        resume_skills = extract_skills(
            resume_text
        )

        jd_skills = extract_skills(
            jd_text
        )

        matched_skills = sorted(
            list(
                set(resume_skills)
                &
                set(jd_skills)
            )
        )

        missing_skills = sorted(
            list(
                set(jd_skills)
                -
                set(resume_skills)
            )
        )

        # --------------------------------
        # Score
        # --------------------------------

        if len(jd_skills) == 0:

            score = 0

        else:

            score = round(
                (
                    len(matched_skills)
                    /
                    len(jd_skills)
                ) * 100,
                2
            )

        # --------------------------------
        # Status
        # --------------------------------

        if score >= 75:

            status = "Strong Match"

        elif score >= 50:

            status = "Medium Match"

        else:

            status = "Weak Match"

        # --------------------------------
        # ATS Breakdown
        # --------------------------------

        project_score = min(
            100,
            50 + (len(matched_skills) * 5)
        )

        education_score = min(
            100,
            70 + (score * 0.2)
        )

        formatting_score = 95

        ats_breakdown = {
            "skills": round(score),
            "projects": round(project_score),
            "education": round(education_score),
            "formatting": formatting_score
        }

        # --------------------------------
        # Verdict + Ranking
        # --------------------------------

        if score >= 85:
            verdict = "Highly Recommended"
            ranking = "Top 5%"
        elif score >= 70:
            verdict = "Recommended"
            ranking = "Top 15%"
        elif score >= 50:
            verdict = "Consider for Interview"
            ranking = "Top 35%"
        else:
            verdict = "Needs Improvement"
            ranking = "Below Average"

        # --------------------------------
        # Interview Probability
        # --------------------------------

        interview_probability = min(
            95,
            max(
                15,
                round(score * 1.1)
            )
        )

        # --------------------------------
        # Strengths
        # --------------------------------

        strengths = []

        for skill in matched_skills[:5]:
            strengths.append(
                f"Strong knowledge of {skill}"
            )

        if score >= 70:
            strengths.append(
                "Strong ATS Alignment"
            )

        if len(matched_skills) >= 5:
            strengths.append(
                "Good Technical Skill Coverage"
            )

        # --------------------------------
        # Weaknesses
        # --------------------------------

        weaknesses = []

        for skill in missing_skills[:5]:
            weaknesses.append(
                f"Missing {skill}"
            )

        if score < 60:
            weaknesses.append(
                "Resume needs better job alignment"
            )

        # --------------------------------
        # Job Fit Scores
        # --------------------------------

        job_fit = {
            "AI Engineer":
                min(
                    100,
                    round(score + 8)
                ),
            "ML Engineer":
                min(
                    100,
                    round(score + 5)
                ),
            "Data Scientist":
                max(
                    0,
                    round(score)
                ),
            "Data Analyst":
                max(
                    0,
                    round(score - 10)
                )
        }
 
        # --------------------------------
        # Suggestions
        # --------------------------------

        suggestions = []

        for skill in missing_skills[:5]:
            suggestions.append(
                f"Learn {skill}"
            )

        if score < 60:
            suggestions.append(
                "Add more AI and Machine Learning projects"
            )
            suggestions.append(
                "Improve technical skill coverage"
            )

        if score < 75:
            suggestions.append(
                "Customize resume for the target job role"
            )

        if "github" not in resume_text:
            suggestions.append(
                "Add GitHub project links"
            )

        if "linkedin" not in resume_text:
            suggestions.append(
                "Add LinkedIn profile link"
            )

        if len(suggestions) == 0:
            suggestions.append(
                "Resume is highly optimized for this role"
            )


        # --------------------------------
        # Return Response
        # --------------------------------

        return {
            "score": score,
            "status": status,
            "matched_skills":
                matched_skills,

            "missing_skills":
                missing_skills,

            "suggestions":
                suggestions,

            "ats_breakdown":
                ats_breakdown,

            "verdict":
                verdict,

            "ranking":
                ranking,

            "interview_probability":
                interview_probability,

            "strengths":
                strengths,

            "weaknesses":
                weaknesses,

            "job_fit":
                job_fit,

            # ==========================
            # Resume Statistics
            # ==========================

            "resume_skill_count":
                len(resume_skills),

            "jd_skill_count":
                len(jd_skills),

            "matched_count":
                len(matched_skills),

            "missing_count":
                len(missing_skills)

        }

    except Exception as e:
        return {
            "error": str(e)
        }
