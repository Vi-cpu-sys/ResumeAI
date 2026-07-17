import os

from dotenv import load_dotenv

# =====================================================
# LOAD ENVIRONMENT VARIABLES
# =====================================================

load_dotenv()

# =====================================================
# API CONFIGURATION
# =====================================================

OPENROUTER_API_KEY = os.getenv(
    "OPENROUTER_API_KEY"
)

OPENROUTER_BASE_URL = (
    "https://openrouter.ai/api/v1"
)

OPENROUTER_MODEL = (
    "meta-llama/llama-3.3-70b-instruct"
)

# =====================================================
# APPLICATION SETTINGS
# =====================================================

APP_NAME = "ResumeAI"

APP_VERSION = "2.0.0"

MAX_INPUT_LENGTH = 4000

MAX_OUTPUT_TOKENS = 700

TEMPERATURE = 0.5

# =====================================================
# FUTURE DATABASE CONFIG
# =====================================================

MONGODB_URI = os.getenv(
    "MONGODB_URI",
    ""
)

DATABASE_NAME = "resumeai"

# =====================================================
# LOGGING
# =====================================================

LOG_LEVEL = "INFO"