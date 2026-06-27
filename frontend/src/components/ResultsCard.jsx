import { motion } from "framer-motion";

function ResultsCard({ data }) {

  const matchedSkills = data?.matched_skills || [];
  const missingSkills = data?.missing_skills || [];
  const suggestions = data?.suggestions || [];

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
        Analysis Results
      </h2>

      {/* Matched Skills */}

      <h3
        className="
        text-green-400
        text-xl
        font-semibold"
      >
        Matched Skills
      </h3>

      <div className="flex flex-wrap gap-3 mt-4">

        {

          matchedSkills.length > 0 ? (

            matchedSkills.map((skill, index) => (

              <motion.span

                key={index}

                initial={{
                  opacity: 0,
                  y: 10
                }}

                animate={{
                  opacity: 1,
                  y: 0
                }}

                transition={{
                  delay: index * 0.05
                }}

                className="
                bg-green-500/20
                border
                border-green-500/30
                text-green-300
                px-4
                py-2
                rounded-full
                text-sm
                font-medium"
              >
                {skill}
              </motion.span>

            ))

          ) : (

            <p className="text-gray-400">
              No matched skills detected.
            </p>

          )

        }

      </div>

      {/* Missing Skills */}

      <h3
        className="
        text-red-400
        text-xl
        font-semibold
        mt-8"
      >
        Missing Skills
      </h3>

      <div className="flex flex-wrap gap-3 mt-4">

        {

          missingSkills.length > 0 ? (

            missingSkills.map((skill, index) => (

              <motion.span

                key={index}

                initial={{
                  opacity: 0,
                  y: 10
                }}

                animate={{
                  opacity: 1,
                  y: 0
                }}

                transition={{
                  delay: index * 0.05
                }}

                className="
                bg-red-500/20
                border
                border-red-500/30
                text-red-300
                px-4
                py-2
                rounded-full
                text-sm
                font-medium"
              >
                {skill}
              </motion.span>

            ))

          ) : (

            <p className="text-gray-400">
              No missing skills detected.
            </p>

          )

        }

      </div>

      {/* Recommendations */}

      <h3
        className="
        text-yellow-400
        text-xl
        font-semibold
        mt-8"
      >
        Recommendations
      </h3>

      <div className="space-y-4 mt-4">

        {

          suggestions.length > 0 ? (

            suggestions.map((item, index) => (

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
                  delay: index * 0.1
                }}

                className="
                bg-yellow-500/10
                border
                border-yellow-500/20
                rounded-xl
                px-4
                py-3
                text-gray-200"
              >
                ✅ {item}
              </motion.div>

            ))

          ) : (

            <div
              className="
              bg-green-500/10
              border
              border-green-500/20
              rounded-xl
              px-4
              py-3
              text-green-300"
            >
              Great job! No additional recommendations found.
            </div>

          )

        }

      </div>

    </div>

  );

}

export default ResultsCard;