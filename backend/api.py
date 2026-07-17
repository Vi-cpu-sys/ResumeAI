from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

# ==========================================================
# Internal Modules
# ==========================================================

from parser import extract_text

from skills import (
    extract_skills,
    compare_skills
)

from recommendation import (
    generate_recommendation
)

# Backward compatibility with older name
generate_recommendations = generate_recommendation



from ai_recommendation import (
    generate_ai_feedback
)

from config import (
    APP_NAME,
    APP_VERSION
)

# ==========================================================
# FastAPI
# ==========================================================

app = FastAPI(

    title=APP_NAME,

    version=APP_VERSION

)

# ==========================================================
# CORS
# ==========================================================

app.add_middleware(

    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]

)

# ==========================================================
# Home Route
# ==========================================================

@app.get("/")

def home():

    return {

        "application": APP_NAME,

        "version": APP_VERSION,

        "status": "Running",

        "message": "ResumeAI Backend Started Successfully"

    }


# ==========================================================
# ATS Score
# ==========================================================

def calculate_ats_score(

    matched_skills,

    jd_skills

):

    if len(jd_skills) == 0:

        return 0

    score = int(

        (len(matched_skills) / len(jd_skills)) * 100

    )

    return min(score, 100)


# ==========================================================
# Verdict
# ==========================================================

def get_verdict(score):

    if score >= 85:

        return "Excellent Match"

    elif score >= 70:

        return "Good Match"

    elif score >= 50:

        return "Average Match"

    else:

        return "Needs Improvement"


# ==========================================================
# Candidate Level
# ==========================================================

def get_candidate_level(score):

    if score >= 85:

        return "Highly Recommended"

    elif score >= 70:

        return "Recommended"

    elif score >= 50:

        return "Moderately Suitable"

    else:

        return "Not Recommended"
        # ==========================================================
# Resume Analyzer API
# ==========================================================

@app.post("/analyze")

async def analyze_resume(

    resume: UploadFile = File(...),

    jd: UploadFile = File(...)

):

    try:

        # --------------------------------------------------
        # Read Uploaded Files
        # --------------------------------------------------

        resume_bytes = await resume.read()

        jd_bytes = await jd.read()

        # --------------------------------------------------
        # Extract Resume & JD Text
        # --------------------------------------------------

        resume_text = extract_text(

            resume.filename,

            resume_bytes

        )

        jd_text = extract_text(

            jd.filename,

            jd_bytes

        )

        # --------------------------------------------------
        # Extract Skills
        # --------------------------------------------------

        resume_skills = extract_skills(

            resume_text

        )

        jd_skills = extract_skills(

            jd_text

        )

        # --------------------------------------------------
        # Compare Skills
        # --------------------------------------------------

        matched_skills, missing_skills = compare_skills(

            resume_skills,

            jd_skills

        )

        # --------------------------------------------------
        # ATS Score
        # --------------------------------------------------

        ats_score = calculate_ats_score(

            matched_skills,

            jd_skills

        )

        # --------------------------------------------------
        # Verdict
        # --------------------------------------------------

        verdict = get_verdict(

            ats_score

        )

        # --------------------------------------------------
        # Candidate Level
        # --------------------------------------------------

        candidate_level = get_candidate_level(

            ats_score

        )

        # --------------------------------------------------
        # Rule-Based Recommendations
        # --------------------------------------------------

        recommendations = generate_recommendations(

            ats_score,

            matched_skills,

            missing_skills

        )

        # --------------------------------------------------
        # AI Recommendation (OpenRouter)
        # --------------------------------------------------

        ai_result = generate_ai_feedback(

            score=ats_score,

            matched_skills=matched_skills,

            missing_skills=missing_skills,

            resume_text=resume_text,

            jd_text=jd_text

        )
                # --------------------------------------------------
        # Candidate Insights
        # --------------------------------------------------

        candidate_insights = {

            "resume_skills": len(resume_skills),

            "job_skills": len(jd_skills),

            "matched_skills": len(matched_skills),

            "missing_skills": len(missing_skills),

            "match_percentage": ats_score

        }

        # --------------------------------------------------
        # Job Fit
        # --------------------------------------------------

        if ats_score >= 85:

            job_fit = "Excellent Fit"

        elif ats_score >= 70:

            job_fit = "Good Fit"

        elif ats_score >= 50:

            job_fit = "Average Fit"

        else:

            job_fit = "Low Fit"

        # --------------------------------------------------
        # Return Response
        # --------------------------------------------------

        return JSONResponse(

            content={

                "ats_score": ats_score,

                "verdict": verdict,

                "candidate_level": candidate_level,

                "job_fit": job_fit,

                "matched_skills": matched_skills,

                "missing_skills": missing_skills,

                "resume_skills": resume_skills,

                "jd_skills": jd_skills,

                "recommendations": recommendations,

                "candidate_insights": candidate_insights,

                "ai_recommendation": ai_result.get(

                    "ai_recommendation",

                    "No AI recommendation available."

                ),

                "ai_status": ai_result.get(

                    "success",

                    False

                )

            }

        )

    # ======================================================
    # Error Handling
    # ======================================================

    except Exception as e:

        return JSONResponse(

            status_code=500,

            content={

                "success": False,

                "error": str(e)

            }

        )