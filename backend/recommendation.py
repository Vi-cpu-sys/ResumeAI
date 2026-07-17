# ==========================================================
# ResumeAI Recommendation Engine
# ==========================================================

def generate_recommendation(

    ats_score,

    matched_skills,

    missing_skills

):

    recommendation = []

    # ======================================================
    # ATS Score Recommendation
    # ======================================================

    if ats_score >= 85:

        recommendation.append(
            "Excellent ATS score! Your resume aligns well with the job description."
        )

    elif ats_score >= 70:

        recommendation.append(
            "Good ATS score. Improving a few missing skills can further strengthen your profile."
        )

    elif ats_score >= 50:

        recommendation.append(
            "Average ATS score. Consider improving your resume with more job-relevant skills."
        )

    else:

        recommendation.append(
            "Your ATS score is low. Update your resume to better match the job description."
        )

    # ======================================================
    # Missing Skills
    # ======================================================

    if missing_skills:

        recommendation.append(
            "Focus on learning the following missing skills:"
        )

        for skill in missing_skills:

            recommendation.append(
                f"• {skill}"
            )

    else:

        recommendation.append(
            "Great! No important skills are missing."
        )

    # ======================================================
    # Resume Suggestions
    # ======================================================

    recommendation.append(
        "Add measurable achievements to your projects and work experience."
    )

    recommendation.append(
        "Customize your resume for each job application."
    )

    recommendation.append(
        "Include relevant certifications if available."
    )

    recommendation.append(
        "Keep your resume concise, well-structured, and ATS-friendly."
    )

    # ======================================================
    # Strength Highlight
    # ======================================================

    if len(matched_skills) >= 10:

        recommendation.append(
            "You already possess many required technical skills. Highlight them clearly in your resume."
        )

    elif len(matched_skills) >= 5:

        recommendation.append(
            "You have a good foundation of required skills. Strengthen your profile by adding more relevant technologies."
        )

    else:

        recommendation.append(
            "Consider building projects using the required technologies to improve your profile."
        )

    return recommendation