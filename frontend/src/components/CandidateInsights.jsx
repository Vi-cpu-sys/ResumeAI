import { motion } from "framer-motion";

function CandidateInsights({ data }) {

  const score = data?.score || 0;

  const matchedSkills =
    data?.matched_skills || [];

  const missingSkills =
    data?.missing_skills || [];

  const strengths = [];

  const weaknesses = [];

  // ==========================
  // Dynamic Strengths
  // ==========================

  if (score >= 80) {

    strengths.push(
      "Excellent ATS Compatibility"
    );

    strengths.push(
      "Strong Resume-Job Alignment"
    );

    strengths.push(
      "Highly Relevant Technical Skills"
    );

  }

  else if (score >= 60) {

    strengths.push(
      "Good Technical Skill Match"
    );

    strengths.push(
      "Competitive Resume Profile"
    );

  }

  else {

    strengths.push(
      "Basic Skill Alignment Detected"
    );

  }

  if (matchedSkills.length >= 5) {

    strengths.push(
      "Wide Skill Coverage"
    );

  }

  // ==========================
  // Dynamic Weaknesses
  // ==========================

  missingSkills
    .slice(0, 5)
    .forEach((skill) => {

      weaknesses.push(
        `Missing ${skill}`
      );

    });

  if (score < 70) {

    weaknesses.push(
      "Resume requires stronger keyword optimization"
    );

  }

  if (score < 50) {

    weaknesses.push(
      "Technical skill coverage should be improved"
    );

  }

  // ==========================
  // Interview Probability
  // ==========================

  const interviewChance = Math.min(
    95,
    Math.max(25, score)
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
      hover:scale-[1.01]
      transition-all
      duration-300"
    >

      <h2
        className="
        text-3xl
        font-bold
        mb-8"
      >
        Candidate Insights
      </h2>

      {/* Strengths */}

      <h3
        className="
        text-green-400
        text-xl
        font-semibold"
      >
        Strengths
      </h3>

      <div className="mt-4 space-y-3">

        {

          strengths.map((item, index) => (

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
              bg-green-500/10
              border
              border-green-500/20
              rounded-xl
              px-4
              py-3
              text-green-300"
            >
              ✅ {item}
            </motion.div>

          ))

        }

      </div>

      {/* Weaknesses */}

      <h3
        className="
        text-red-400
        text-xl
        font-semibold
        mt-8"
      >
        Areas to Improve
      </h3>

      <div className="mt-4 space-y-3">

        {

          weaknesses.length > 0 ? (

            weaknesses.map((item, index) => (

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
                bg-red-500/10
                border
                border-red-500/20
                rounded-xl
                px-4
                py-3
                text-red-300"
              >
                ⚠ {item}
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
              🎉 No major weaknesses detected
            </div>

          )

        }

      </div>

      {/* Interview Probability */}

      <div
        className="
        mt-10
        text-center
        bg-blue-500/10
        border
        border-blue-500/20
        rounded-2xl
        p-6"
      >

        <h3
          className="
          text-xl
          text-blue-400
          font-semibold"
        >
          Interview Probability
        </h3>

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
          font-extrabold
          mt-4
          text-blue-300"
        >
          {interviewChance}%
        </motion.div>

        <p
          className="
          text-gray-400
          mt-3"
        >
          Estimated likelihood of getting shortlisted based on ATS score, skill matching and recruiter relevance.
        </p>

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
        AI-generated insights based on ATS score, skill relevance, resume quality and job alignment.
      </div>

    </div>

  );

}

export default CandidateInsights;