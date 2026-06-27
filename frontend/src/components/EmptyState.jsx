import { motion } from "framer-motion";

function EmptyState() {

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 40
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      className="
      mt-16
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-12
      text-center
      shadow-2xl"

    >

      <div className="text-7xl">

        📄

      </div>

      <h2
        className="
        text-4xl
        font-bold
        mt-6"
      >

        Ready to Analyze

      </h2>

      <p
        className="
        text-gray-400
        mt-4
        max-w-2xl
        mx-auto
        leading-8"
      >

        Upload your Resume and Job Description to receive an AI-powered
        ATS score, recruiter verdict, skill gap analysis, job fit
        recommendations, interview probability, and a downloadable report.

      </p>

      <div
        className="
        grid
        md:grid-cols-4
        gap-6
        mt-10"
      >

        <div className="bg-blue-500/10 rounded-xl p-5">

          🎯

          <h3 className="mt-3 font-semibold">

            ATS Score

          </h3>

        </div>

        <div className="bg-green-500/10 rounded-xl p-5">

          📈

          <h3 className="mt-3 font-semibold">

            Skill Match

          </h3>

        </div>

        <div className="bg-purple-500/10 rounded-xl p-5">

          💼

          <h3 className="mt-3 font-semibold">

            Job Fit

          </h3>

        </div>

        <div className="bg-yellow-500/10 rounded-xl p-5">

          🤖

          <h3 className="mt-3 font-semibold">

            AI Suggestions

          </h3>

        </div>

      </div>

    </motion.div>

  );

}

export default EmptyState;