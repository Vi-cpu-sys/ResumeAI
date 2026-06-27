import { motion } from "framer-motion";

function VerdictCard({ data }) {

  const score = data?.score || 0;

  const verdict =
    data?.verdict || "Needs Improvement";

  const ranking =
    data?.ranking || "Below Average";

  let color = "";
  let icon = "";

  if (verdict === "Highly Recommended") {

    color = "text-green-400";
    icon = "🟢";

  } else if (verdict === "Recommended") {

    color = "text-blue-400";
    icon = "🔵";

  } else if (verdict === "Average Candidate") {

    color = "text-yellow-400";
    icon = "🟡";

  } else {

    color = "text-red-400";
    icon = "🔴";

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
        Recruiter Verdict
      </h2>

      <div className="text-center">

        <motion.div

          initial={{
            scale: 0
          }}

          animate={{
            scale: 1
          }}

          transition={{
            duration: 0.5
          }}

          className="
          text-6xl
          mb-5"
        >
          {icon}
        </motion.div>

        <motion.h3

          initial={{
            opacity: 0,
            y: 20
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          className={`
          text-3xl
          font-bold
          ${color}
          `}
        >
          {verdict}
        </motion.h3>

        <p
          className="
          text-gray-400
          mt-4"
        >
          Candidate Ranking
        </p>

        <div
          className="
          text-5xl
          font-extrabold
          mt-3
          text-blue-400"
        >
          {ranking}
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

          <p className="text-gray-300">

            {

              verdict === "Highly Recommended"
                ? "Excellent alignment with job requirements. Strong chance of passing ATS and recruiter screening."

                : verdict === "Recommended"
                ? "Good match for the role. Adding a few missing skills can significantly improve the score."

                : verdict === "Average Candidate"
                ? "Moderate fit. Consider improving projects, technical skills, and resume keywords."

                : "Resume requires significant improvement to meet the job description requirements."

            }

          </p>

        </div>

        {/* Score Badge */}

        <div
          className="
          mt-6
          inline-block
          bg-green-500/10
          border
          border-green-500/20
          px-6
          py-2
          rounded-full"
        >
          ATS Score: <strong>{score}%</strong>
        </div>

      </div>

      {/* Footer */}

      <div
        className="
        mt-8
        border-t
        border-white/10
        pt-4
        text-sm
        text-gray-400"
      >
        Verdict generated using ATS score, skills match, and resume-job alignment analysis.
      </div>

    </div>

  );

}

export default VerdictCard;