import streamlit as st

st.set_page_config(
    page_title="AI Resume Screening System",
    page_icon="📄",
    layout="wide"
)

st.title("🤖 AI Resume Screening System")

st.markdown("---")

st.header("Upload Job Description")

jd_file = st.file_uploader(
    "Upload Job Description (.txt)",
    type=["txt"]
)

st.header("Upload Resume")

resume_file = st.file_uploader(
    "Upload Resume (.pdf or .docx)",
    type=["pdf", "docx"]
)

if jd_file and resume_file:
    st.success("Files uploaded successfully!")