# AI-Powered Resume Screening and Candidate Ranking System

## Overview

This project is an AI-powered Resume Screening System developed using Python. It automatically analyzes resumes, extracts skills, compares them with a job description, calculates match scores, identifies missing skills, and ranks candidates based on their suitability for a role.

## Features

* Resume Parsing from DOCX files
* Skill Extraction using NLP techniques
* Job Description Analysis
* Resume-to-Job Matching
* Skill Gap Analysis
* Candidate Ranking
* CSV Report Generation
* Data Visualization using Matplotlib

## Project Structure

```
FUTURE_ML_03/
│
├── data/
│   ├── resumes/
│   └── job_description/
│
├── src/
│   ├── parser.py
│   ├── skill_extractor.py
│   └── matching.py
│
├── outputs/
│   ├── ranking_results.csv
│   └── ranking_chart.png
│
├── test_parser.py
├── test_skill.py
├── test_jd.py
├── test_matching.py
├── test_ranking.py
│
├── requirements.txt
└── README.md
```

## Technologies Used

* Python
* Pandas
* NumPy
* Matplotlib
* Scikit-Learn
* Python-Docx

## Workflow

1. Read Resume
2. Extract Text
3. Identify Skills
4. Extract Job Description Skills
5. Compare Resume Skills with JD Skills
6. Calculate Match Score
7. Rank Candidates
8. Export Results
9. Generate Visualization

## Output

* Candidate Ranking Report
* Match Score Percentage
* Skill Gap Analysis
* Ranking CSV File
* Ranking Chart

## Future Enhancements

* PDF Resume Support
* Streamlit Web Application
* Semantic Matching using Sentence Transformers
* Automated Recruiter Dashboard

## Author

Vinutha Naik
Machine Learning Intern – Future Interns
