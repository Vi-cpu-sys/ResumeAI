import { motion } from "framer-motion";

function ATSCard({ data }) {

  const ats = data?.ats_breakdown || {};

  const skillsScore = ats.skills || 0;
  const projectScore = ats.projects || 0;
  const educationScore = ats.education || 0;
  const formattingScore = ats.formatting || 0;

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
        mb-8"
      >
        ATS Breakdown
      </h2>

      {/* ATS Summary */}

      <div
        className="
        bg-blue-500/10
        border
        border-blue-500/20
        rounded-2xl
        p-4
        mb-8"
      >

        <p className="text-blue-300 font-medium">
          ATS Compatibility Score
        </p>

        <h3
          className="
          text-4xl
          font-bold
          mt-2"
        >
          {data?.score || 0}%
        </h3>

      </div>

      <div className="space-y-7">

        {/* Skills */}

        <div>

          <div className="flex justify-between mb-2">
            <span>Skills Match</span>
            <span>{skillsScore}%</span>
          </div>

          <div className="w-full bg-gray-700/50 rounded-full h-3">

            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${skillsScore}%`
              }}
              transition={{
                duration: 1
              }}
              className="
              bg-green-500
              h-3
              rounded-full"
            />

          </div>

        </div>

        {/* Projects */}

        <div>

          <div className="flex justify-between mb-2">
            <span>Projects</span>
            <span>{projectScore}%</span>
          </div>

          <div className="w-full bg-gray-700/50 rounded-full h-3">

            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${projectScore}%`
              }}
              transition={{
                duration: 1.2
              }}
              className="
              bg-blue-500
              h-3
              rounded-full"
            />

          </div>

        </div>

        {/* Education */}

        <div>

          <div className="flex justify-between mb-2">
            <span>Education</span>
            <span>{educationScore}%</span>
          </div>

          <div className="w-full bg-gray-700/50 rounded-full h-3">

            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${educationScore}%`
              }}
              transition={{
                duration: 1.4
              }}
              className="
              bg-purple-500
              h-3
              rounded-full"
            />

          </div>

        </div>

        {/* Formatting */}

        <div>

          <div className="flex justify-between mb-2">
            <span>Formatting</span>
            <span>{formattingScore}%</span>
          </div>

          <div className="w-full bg-gray-700/50 rounded-full h-3">

            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${formattingScore}%`
              }}
              transition={{
                duration: 1.6
              }}
              className="
              bg-yellow-500
              h-3
              rounded-full"
            />

          </div>

        </div>

      </div>

      {/* Footer */}

      <div
        className="
        mt-8
        text-sm
        text-gray-400
        border-t
        border-white/10
        pt-4"
      >
        Higher ATS scores improve the chances of your resume passing automated screening systems.
      </div>

    </div>

  );

}

export default ATSCard;