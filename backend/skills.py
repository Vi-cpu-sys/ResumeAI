import re

# =====================================================
# ResumeAI Skill Database
# =====================================================

SKILLS = {

    "Programming": [
        "python",
        "java",
        "c",
        "c++",
        "c#",
        "javascript",
        "typescript",
        "sql",
        "r",
        "go"
    ],

    "Web Development": [
        "html",
        "css",
        "bootstrap",
        "tailwind",
        "react",
        "next.js",
        "node.js",
        "express",
        "fastapi",
        "flask",
        "django"
    ],

    "Machine Learning": [
        "machine learning",
        "deep learning",
        "tensorflow",
        "keras",
        "pytorch",
        "scikit-learn",
        "opencv",
        "xgboost",
        "lightgbm",
        "catboost"
    ],

    "Data Science": [
        "numpy",
        "pandas",
        "matplotlib",
        "seaborn",
        "plotly",
        "power bi",
        "tableau",
        "excel"
    ],

    "Cloud & DevOps": [
        "docker",
        "kubernetes",
        "aws",
        "azure",
        "gcp",
        "github actions",
        "jenkins",
        "terraform"
    ],

    "Databases": [
        "mysql",
        "postgresql",
        "mongodb",
        "sqlite",
        "oracle",
        "firebase"
    ],

    "Tools": [
        "git",
        "github",
        "linux",
        "postman",
        "vscode",
        "jira"
    ]

}

# =====================================================
# Flatten Skills
# =====================================================

ALL_SKILLS = sorted(

    {

        skill.lower()

        for category in SKILLS.values()

        for skill in category

    }

)

# =====================================================
# Extract Skills
# =====================================================

def extract_skills(text):

    if not text:

        return []

    text = text.lower()

    found_skills = []

    for skill in ALL_SKILLS:

        pattern = r"\b" + re.escape(skill) + r"\b"

        if re.search(pattern, text):

            found_skills.append(skill)

    return sorted(list(set(found_skills)))

# =====================================================
# Compare Skills
# =====================================================

def compare_skills(

    resume_skills,

    jd_skills

):

    resume_set = set(resume_skills)

    jd_set = set(jd_skills)

    matched_skills = sorted(

        list(

            resume_set.intersection(jd_set)

        )

    )

    missing_skills = sorted(

        list(

            jd_set.difference(resume_set)

        )

    )

    return matched_skills, missing_skills

# =====================================================
# Skill Statistics
# =====================================================

def skill_statistics(

    resume_skills,

    jd_skills

):

    matched, missing = compare_skills(

        resume_skills,

        jd_skills

    )

    total = len(jd_skills)

    percentage = 0

    if total > 0:

        percentage = round(

            (len(matched) / total) * 100,

            2

        )

    return {

        "resume_skills": len(resume_skills),

        "job_skills": len(jd_skills),

        "matched": len(matched),

        "missing": len(missing),

        "match_percentage": percentage

    }