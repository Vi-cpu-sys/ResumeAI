import { motion } from "framer-motion";

function JobFitCard({ data }) {

  const score = data?.score || 0;

  const matchedSkills = data?.matched_skills || [];

  let fitLevel = "";
  let color = "";
  let jobs = [];

  // ==========================
  // Dynamic Job Suggestions
  // ==========================

  if (
    matchedSkills.includes("machine learning") ||
    matchedSkills.includes("deep learning") ||
    matchedSkills.includes("tensorflow") ||
    matchedSkills.includes("pytorch")
  ) {

    jobs.push(
      "Machine Learning Engineer",
      "AI Engineer",
      "Data Scientist"
    );

  }

  if (
    matchedSkills.includes("react") ||
    matchedSkills.includes("javascript") ||
    matchedSkills.includes("html") ||
    matchedSkills.includes("css")
  ) {

    jobs.push(
      "Frontend Developer",
      "React Developer",
      "UI Engineer"
    );

  }

  if (
    matchedSkills.includes("fastapi") ||
    matchedSkills.includes("django") ||
    matchedSkills.includes("flask")
  ) {

    jobs.push(
      "Backend Developer",
      "Python Developer",
      "API Developer"
    );

  }

  if (
    matchedSkills.includes("sql") ||
    matchedSkills.includes("mysql") ||
    matchedSkills.includes("postgresql")
  ) {

    jobs.push(
      "Database Developer",
      "Data Analyst"
    );

  }

  if (
    matchedSkills.includes("aws") ||
    matchedSkills.includes("azure") ||
    matchedSkills.includes("docker")
  ) {

    jobs.push(
      "Cloud Engineer",
      "DevOps Engineer"
    );

  }

  jobs = [...new Set(jobs)];

  if (jobs.length === 0) {

    jobs = [
      "Software Engineer",
      "Technology Associate"
    ];

  }

  // ==========================
  // Fit Level
  // ==========================

  if (score >= 80) {

    fitLevel = "Excellent Fit";
    color = "text-green-400";

  }

  else if (score >= 60) {

    fitLevel = "Good Fit";
    color = "text-blue-400";

  }

  else {

    fitLevel = "Needs Improvement";
    color = "text-red-400";

  }

  return (

    <div
      className="
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-8
      shadow-2xl
      hover:border-blue-500/30
      hover:scale-[1.02]
      transition-all
      duration-300"
    >

      <h2
        className="
        text-3xl
        font-bold
        mb-6"
      >
        Job Fit Analysis
      </h2>

      <div className="text-center">

        <h3
          className={`
          text-3xl
          font-bold
          ${color}
          `}
        >
          {fitLevel}
        </h3>

        <p
          className="
          text-gray-400
          mt-3"
        >
          Recommended Roles
        </p>

      </div>

      <div
        className="
        mt-8
        grid
        gap-4"
      >

        {

          jobs.map((job, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                y: 20
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                delay: index * 0.1
              }}

              className="
              rounded-xl
              p-4
              bg-gradient-to-r
              from-blue-500/20
              via-purple-500/20
              to-pink-500/20
              border
              border-white/10"
            >
              🚀 {job}
            </motion.div>

          ))

        }

      </div>

      <div
        className="
        mt-8
        bg-blue-500/10
        border
        border-blue-500/20
        rounded-2xl
        p-4"
      >

        <h4 className="font-semibold text-blue-300">
          Career Match Summary
        </h4>

        <p className="text-gray-300 mt-2">
          Based on your ATS score, matched skills,
          and technology stack, these are the roles
          that best align with your profile.
        </p>

      </div>

      <div
        className="
        mt-6
        border-t
        border-white/10
        pt-4
        text-sm
        text-gray-400"
      >
        AI-generated job recommendations based on resume skills, ATS score, and job-description matching.
      </div>

    </div>

  );

}

export default JobFitCard;