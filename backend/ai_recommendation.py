from dotenv import load_dotenv
from openai import OpenAI

from config import (
    OPENROUTER_API_KEY,
    OPENROUTER_BASE_URL,
    OPENROUTER_MODEL,
    TEMPERATURE,
    MAX_OUTPUT_TOKENS,
    MAX_INPUT_LENGTH
)

# =====================================================
# Load Environment Variables
# =====================================================

load_dotenv()

# =====================================================
# OpenRouter Client
# =====================================================

client = OpenAI(
    api_key=OPENROUTER_API_KEY,
    base_url=OPENROUTER_BASE_URL
)

# =====================================================
# AI Recommendation Engine
# =====================================================

def generate_ai_feedback(
    score,
    matched_skills,
    missing_skills,
    resume_text,
    jd_text
):

    prompt = f"""
You are an expert ATS Resume Reviewer and Senior Technical Recruiter.

Analyze the following resume against the given Job Description.

ATS Score:
{score}

Matched Skills:
{", ".join(matched_skills)}

Missing Skills:
{", ".join(missing_skills)}

Resume:

{resume_text[:MAX_INPUT_LENGTH]}

Job Description:

{jd_text[:MAX_INPUT_LENGTH]}

Generate a professional report with these sections:

1. Resume Summary

2. Key Strengths

3. Weaknesses

4. ATS Improvement Tips

5. Career Advice

6. Final Recommendation

Rules:

• Keep the report professional.

• Use bullet points.

• Mention missing technologies.

• Suggest practical improvements.

• Keep under 500 words.
"""

    try:

        response = client.chat.completions.create(

            model=OPENROUTER_MODEL,

            messages=[

                {
                    "role": "system",
                    "content": "You are an expert ATS Resume Analyzer."
                },

                {
                    "role": "user",
                    "content": prompt
                }

            ],

            temperature=TEMPERATURE,

            max_tokens=MAX_OUTPUT_TOKENS

        )

        ai_response = response.choices[0].message.content

        return {

            "success": True,

            "ai_recommendation": ai_response

        }

    except Exception as e:

        print("=" * 60)
        print("OpenRouter Error")
        print(e)
        print("=" * 60)

        return {

            "success": False,

            "ai_recommendation": f"""
Unable to generate AI recommendations.

Possible reasons:

• Invalid OpenRouter API Key

• Internet connection issue

• Selected model unavailable

• OpenRouter service temporarily busy

Error:

{str(e)}
"""

        }