import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative">

      {/* Glow Effects */}

      <div
        className="
        absolute
        w-[600px]
        h-[600px]
        bg-blue-600
        rounded-full
        blur-[220px]
        opacity-20
        top-0
        left-0"
      />

      <div
        className="
        absolute
        w-[600px]
        h-[600px]
        bg-purple-600
        rounded-full
        blur-[220px]
        opacity-20
        bottom-0
        right-0"
      />

      {/* Navbar */}

      <nav
        className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-black/20
        backdrop-blur-xl
        border-b
        border-white/10
        px-10
        py-6"
      >

        <div className="flex justify-center items-center">

          <h1
            className="
            text-4xl
            font-extrabold
            bg-gradient-to-r
            from-blue-400
            to-purple-400
            bg-clip-text
            text-transparent"
          >
            ResumeAI
          </h1>

        </div>

      </nav>

      {/* Hero Section */}

      <section
        className="
        relative
        z-10
        flex
        flex-col
        justify-center
        items-center
        text-center
        min-h-screen
        px-6
        pt-40"
      >

        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          text-5xl
          md:text-7xl
          lg:text-8xl
          font-extrabold
          leading-tight
          bg-gradient-to-r
          from-blue-400
          via-purple-400
          to-pink-500
          bg-clip-text
          text-transparent"
        >
          Smart AI
          <br />
          Resume Analyzer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
          mt-8
          text-lg
          md:text-xl
          max-w-4xl
          text-gray-300"
        >
          Analyze resumes, calculate ATS scores,
          identify missing skills and generate
          AI-powered hiring recommendations instantly.
        </motion.p>

        {/* Single Button */}

        <button
          onClick={() => navigate("/dashboard")}
          className="
          mt-12
          px-10
          py-5
          rounded-2xl
          bg-gradient-to-r
          from-blue-600
          to-purple-600
          hover:scale-105
          transition-all
          duration-300
          text-xl
          font-semibold
          shadow-2xl"
        >
          Get Started →
        </button>

        {/* Stats */}

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-8
          mt-24"
        >

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-lg">
            <h2 className="text-5xl font-bold">50K+</h2>
            <p className="text-gray-400 mt-2">Resumes</p>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-lg">
            <h2 className="text-5xl font-bold">95%</h2>
            <p className="text-gray-400 mt-2">Accuracy</p>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-lg">
            <h2 className="text-5xl font-bold">AI</h2>
            <p className="text-gray-400 mt-2">Powered</p>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-lg">
            <h2 className="text-5xl font-bold">24/7</h2>
            <p className="text-gray-400 mt-2">Available</p>
          </div>

        </div>

      </section>

    </div>

  );

}

export default Home;