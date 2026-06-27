import os


def create_report(
    candidate_name,
    score,
    matched_skills,
    missing_skills,
    recommendations,
):

    report = f"""
Candidate: {candidate_name}

Match Score: {score:.2f}%

Matched Skills:
{chr(10).join(sorted(matched_skills))}

Missing Skills:
{chr(10).join(sorted(missing_skills))}

Recommendations:
{chr(10).join(recommendations)}
"""

    filename = (
        candidate_name.replace(".docx", "")
        .replace(".pdf", "")
        + "_report.txt"
    )

    filepath = os.path.join(
        "outputs",
        "reports",
        filename
    )

    with open(
        filepath,
        "w",
        encoding="utf-8"
    ) as file:

        file.write(report)

    return filepath