import { motion } from "framer-motion";

function RecommendationCard({ data }) {

  const missingSkills = data?.missing_skills || [];
  const score = data?.score || 0;

  const recommendations = [];

  missingSkills.slice(0, 5).forEach((skill) => {

    recommendations.push(
      `Add ${skill} to your resume if you have practical experience with it.`
    );

  });

  if (score < 70) {

    recommendations.push(
      "Include more relevant projects that directly align with the job description."
    );

    recommendations.push(
      "Use industry-specific keywords to improve ATS visibility."
    );

  }

  if (score < 50) {

    recommendations.push(
      "Strengthen technical skills and certifications related to this role."
    );

  }

  recommendations.push(
    "Add measurable achievements using numbers and impact metrics."
  );

  recommendations.push(
    "Ensure your GitHub and LinkedIn profiles are included and updated."
  );

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
        AI Recommendations
      </h2>

      <p
        className="
        text-gray-400
        mb-6"
      >
        Personalized suggestions generated from ATS score, missing skills and resume-job matching analysis.
      </p>

      <div className="space-y-4">

        {

          recommendations.map((item, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                x: -20
              }}

              animate={{
                opacity: 1,
                x: 0
              }}

              transition={{
                delay: index * 0.08
              }}

              whileHover={{
                scale: 1.02
              }}

              className="
              bg-gradient-to-r
              from-blue-500/10
              via-purple-500/10
              to-pink-500/10
              border
              border-white/10
              rounded-xl
              px-5
              py-4
              text-gray-200"
            >

              <span className="mr-2">
                💡
              </span>

              {item}

            </motion.div>

          ))

        }

      </div>

      {

        score >= 80 && (

          <motion.div

            initial={{
              opacity: 0
            }}

            animate={{
              opacity: 1
            }}

            className="
            mt-8
            bg-green-500/10
            border
            border-green-500/20
            rounded-2xl
            p-6
            text-center"
          >

            <h3
              className="
              text-2xl
              font-bold
              text-green-400"
            >
              🎉 Strong Resume Profile
            </h3>

            <p
              className="
              mt-3
              text-gray-300"
            >
              Your resume demonstrates strong alignment with the job description and is likely to perform well in ATS screening.
            </p>

          </motion.div>

        )

      }

      <div
        className="
        mt-8
        border-t
        border-white/10
        pt-4
        text-sm
        text-gray-400"
      >
        AI-generated recommendations designed to improve resume quality, ATS compatibility and recruiter appeal.
      </div>

    </div>

  );

}

export default RecommendationCard;