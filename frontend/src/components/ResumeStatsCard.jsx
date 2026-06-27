import { motion } from "framer-motion";

function ResumeStatsCard({ data }) {

  const resumeSkills =
    data?.resume_skill_count || 0;

  const jdSkills =
    data?.jd_skill_count || 0;

  const matchedSkills =
    data?.matched_count || 0;

  const missingSkills =
    data?.missing_count || 0;

  const score =
    data?.score || 0;

  const stats = [

    {
      title: "Resume Skills",
      value: resumeSkills,
      color: "text-blue-400"
    },

    {
      title: "JD Skills",
      value: jdSkills,
      color: "text-purple-400"
    },

    {
      title: "Matched",
      value: matchedSkills,
      color: "text-green-400"
    },

    {
      title: "Missing",
      value: missingSkills,
      color: "text-red-400"
    }

  ];

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
      hover:border-cyan-500/30
      transition-all
      duration-300"
    >

      <h2
        className="
        text-3xl
        font-bold
        mb-8"
      >
        Resume Statistics
      </h2>

      <div
        className="
        grid
        grid-cols-2
        gap-6"
      >

        {

          stats.map((item, index) => (

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
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-5
              text-center"
            >

              <h3
                className="
                text-gray-400
                text-sm"
              >
                {item.title}
              </h3>

              <div
                className={`
                text-4xl
                font-bold
                mt-3
                ${item.color}
                `}
              >
                {item.value}
              </div>

            </motion.div>

          ))

        }

      </div>

      <div
        className="
        mt-8
        bg-gradient-to-r
        from-blue-500/10
        via-purple-500/10
        to-pink-500/10
        border
        border-white/10
        rounded-2xl
        p-6
        text-center"
      >

        <p className="text-gray-400">
          Overall Match Percentage
        </p>

        <div
          className="
          text-6xl
          font-extrabold
          mt-3
          text-cyan-400"
        >
          {score}%
        </div>

      </div>

    </div>

  );

}

export default ResumeStatsCard;