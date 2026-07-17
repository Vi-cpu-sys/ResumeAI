import jsPDF from "jspdf";
import { motion } from "framer-motion";

function DownloadReport({ data }) {

  const generatePDF = () => {

    const doc = new jsPDF();

    const score = data?.score || 0;

    const status =
      data?.status || "N/A";

    const verdict =
      data?.verdict || "Needs Improvement";

    const ranking =
      data?.ranking || "Below Average";

    const interview =
      data?.interview_probability || 0;

    const ats =
      data?.ats_breakdown || {};

    const strengths =
      data?.strengths || [];

    const weaknesses =
      data?.weaknesses || [];

    const matched =
      data?.matched_skills || [];

    const missing =
      data?.missing_skills || [];

    const suggestions =
      data?.suggestions || [];

    // ===================================
    // HEADER
    // ===================================

    doc.setFillColor(30,41,59);

    doc.rect(
      0,
      0,
      210,
      35,
      "F"
    );

    doc.setTextColor(255,255,255);

    doc.setFontSize(24);

    doc.text(
      "ResumeAI",
      20,
      18
    );

    doc.setFontSize(11);

    doc.text(
      "Professional ATS Resume Analysis Report",
      20,
      27
    );

    doc.setTextColor(0,0,0);

    const today =
      new Date().toLocaleString();

    doc.setFontSize(10);

    doc.text(
      `Generated : ${today}`,
      20,
      45
    );

    // ===================================
    // ATS SUMMARY
    // ===================================

    doc.setFontSize(18);

    doc.text(
      "ATS Summary",
      20,
      60
    );

    doc.setFontSize(13);

    doc.text(
      `ATS Score : ${score}%`,
      25,
      72
    );

    doc.text(
      `Status : ${status}`,
      25,
      82
    );

    doc.text(
      `Recruiter Verdict : ${verdict}`,
      25,
      92
    );

    doc.text(
      `Candidate Ranking : ${ranking}`,
      25,
      102
    );

    doc.text(
      `Interview Probability : ${interview}%`,
      25,
      112
    );

    // ===================================
    // ATS BREAKDOWN
    // ===================================

    doc.setFontSize(18);

    doc.text(
      "ATS Breakdown",
      20,
      130
    );

    doc.setFontSize(12);

    doc.text(
      `Skills Match : ${ats.skills || 0}%`,
      25,
      142
    );

    doc.text(
      `Projects : ${ats.projects || 0}%`,
      25,
      152
    );

    doc.text(
      `Education : ${ats.education || 0}%`,
      25,
      162
    );

    doc.text(
      `Formatting : ${ats.formatting || 0}%`,
      25,
      172
    );

    let y = 188;

    // ===================================
    // MATCHED SKILLS
    // ===================================

    doc.setFontSize(18);

    doc.text(
      "Matched Skills",
      20,
      y
    );

    y += 10;

    doc.setFontSize(11);

    matched.forEach((skill) => {

      doc.text(
        `• ${skill}`,
        25,
        y
      );

      y += 7;

    });

    // ===================================
// MISSING SKILLS
// ===================================

y += 8;

doc.setFontSize(18);

doc.text(
  "Missing Skills",
  20,
  y
);

y += 10;

doc.setFontSize(11);

if (missing.length === 0) {

  doc.text(
    "No missing skills detected.",
    25,
    y
  );

  y += 8;

} else {

  missing.forEach((skill) => {

    doc.text(
      `• ${skill}`,
      25,
      y
    );

    y += 7;

  });

}

// ===================================
// PAGE BREAK
// ===================================

if (y > 250) {

  doc.addPage();

  y = 20;

}

// ===================================
// AI RECOMMENDATIONS
// ===================================

y += 10;

doc.setFontSize(18);

doc.text(
  "AI Recommendations",
  20,
  y
);

y += 10;

doc.setFontSize(11);

if (suggestions.length === 0) {

  doc.text(
    "Resume looks good. No major recommendations.",
    25,
    y
  );

  y += 8;

} else {

  suggestions.forEach((item) => {

    doc.text(
      `• ${item}`,
      25,
      y
    );

    y += 7;

  });

}

// ===================================
// PAGE BREAK
// ===================================

if (y > 250) {

  doc.addPage();

  y = 20;

}

// ===================================
// CANDIDATE STRENGTHS
// ===================================

y += 10;

doc.setFontSize(18);

doc.text(
  "Candidate Strengths",
  20,
  y
);

y += 10;

doc.setFontSize(11);

if (strengths.length === 0) {

  doc.text(
    "No strengths available.",
    25,
    y
  );

  y += 8;

} else {

  strengths.forEach((item) => {

    doc.text(
      `• ${item}`,
      25,
      y
    );

    y += 7;

  });

}

// ===================================
// PAGE BREAK
// ===================================

if (y > 250) {

  doc.addPage();

  y = 20;

}

// ===================================
// AREAS TO IMPROVE
// ===================================

y += 10;

doc.setFontSize(18);

doc.text(
  "Areas to Improve",
  20,
  y
);

y += 10;

doc.setFontSize(11);

if (weaknesses.length === 0) {

  doc.text(
    "No major weaknesses detected.",
    25,
    y
  );

  y += 8;

} else {

  weaknesses.forEach((item) => {

    doc.text(
      `• ${item}`,
      25,
      y
    );

    y += 7;

  });

}

// ===================================
// RECRUITER SUMMARY
// ===================================

if (y > 240) {

  doc.addPage();

  y = 20;

}

y += 10;

doc.setFontSize(18);

doc.text(
  "Recruiter Summary",
  20,
  y
);

y += 10;

doc.setFontSize(12);

let summary = "";

if (score >= 80) {

  summary =
    "Excellent resume with strong ATS compatibility. The candidate demonstrates a high alignment with the job description and is highly recommended for recruiter screening.";

}

else if (score >= 60) {

  summary =
    "Good resume with decent ATS compatibility. Improving a few missing skills and tailoring the resume can significantly increase interview chances.";

}

else if (score >= 40) {

  summary =
    "Average resume. Consider strengthening technical skills, projects, and resume keywords to improve ATS performance.";

}

else {

  summary =
    "The resume requires major improvements before applying. Focus on adding relevant technical skills, projects, certifications, and ATS-friendly keywords.";

}

const wrappedSummary = doc.splitTextToSize(
  summary,
  165
);

doc.text(
  wrappedSummary,
  25,
  y
);

y += wrappedSummary.length * 7 + 10;

// ===================================
// FOOTER
// ===================================

if (y > 260) {

  doc.addPage();

  y = 20;

}

doc.setDrawColor(180);

doc.line(
  20,
  y,
  190,
  y
);

y += 10;

doc.setFontSize(10);

doc.setTextColor(120);

doc.text(
  "Generated by ResumeAI • AI Powered ATS Resume Analyzer",
  20,
  y
);

y += 6;

doc.text(
  "This report is intended for educational and career guidance purposes only.",
  20,
  y
);

doc.save(
  "ResumeAI_Report.pdf"
);

};

return (

  <motion.div

    whileHover={{
      scale: 1.02
    }}

    className="
    bg-white/5
    backdrop-blur-xl
    border
    border-white/10
    rounded-3xl
    p-8
    shadow-2xl
    hover:border-green-500/30
    transition-all
    duration-300"

  >

    <h2

      className="
      text-3xl
      font-bold
      mb-6"

    >

      Report Center

    </h2>

    <div

      className="
      bg-green-500/10
      border
      border-green-500/20
      rounded-2xl
      p-5"

    >

      <h3

        className="
        text-xl
        font-semibold
        text-green-400"

      >

        Professional Resume Report

      </h3>

      <p

        className="
        text-gray-300
        mt-3"

      >

        Download a detailed AI-generated report containing ATS analysis, recruiter verdict, interview probability, skill matching, recommendations, and candidate insights.

      </p>

      <ul

        className="
        mt-4
        space-y-2
        text-gray-400"

      >

        <li>✅ ATS Score</li>
        <li>✅ ATS Breakdown</li>
        <li>✅ Recruiter Verdict</li>
        <li>✅ Candidate Ranking</li>
        <li>✅ Interview Probability</li>
        <li>✅ Matched Skills</li>
        <li>✅ Missing Skills</li>
        <li>✅ AI Recommendations</li>
        <li>✅ Candidate Strengths</li>
        <li>✅ Areas to Improve</li>

      </ul>

    </div>

    <motion.button

      whileTap={{
        scale: 0.95
      }}

      onClick={generatePDF}

      className="
      w-full
      mt-8
      py-4
      rounded-2xl
      bg-gradient-to-r
      from-green-500
      via-emerald-500
      to-teal-500
      hover:from-green-400
      hover:to-emerald-400
      text-xl
      font-bold
      shadow-xl
      transition-all"

    >

      📄 Download Professional PDF Report

    </motion.button>

    <div

      className="
      mt-6
      border-t
      border-white/10
      pt-4
      text-sm
      text-gray-400"

    >

      Generate a recruiter-ready AI resume analysis report for future reference and job applications.

    </div>

  </motion.div>

);

}

export default DownloadReport;