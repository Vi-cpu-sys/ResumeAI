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
        min-h-screen
        px-6
        pt-40
        text-center"
      >

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
          mb-8
          px-5
          py-2
          rounded-full
          border
          border-blue-500/30
          bg-blue-500/10
          backdrop-blur-xl"
        >
          <span className="text-blue-300 font-medium">
            🚀 AI Powered ATS Resume Analyzer
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          text-6xl
          md:text-8xl
          font-black
          leading-tight"
        >

          <span className="text-white">
            Build a
          </span>

          <br />

          <span
            className="
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-500
            bg-clip-text
            text-transparent"
          >
            Job Winning
          </span>

          <br />

          <span className="text-white">
            Resume with AI
          </span>

        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="
          mt-10
          max-w-3xl
          text-gray-300
          text-lg
          md:text-xl
          leading-9"
        >
          Upload your resume and compare it with any Job Description.
          Get an ATS score, identify missing skills, receive AI-powered
          recommendations, and improve your chances of getting shortlisted —
          all in seconds.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="
          mt-14
          flex
          flex-col
          sm:flex-row
          gap-6"
        >

          <button
            onClick={() => navigate("/dashboard")}
            className="
            px-10
            py-5
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-purple-600
            text-lg
            font-bold
            hover:scale-105
            duration-300
            shadow-[0_0_40px_rgba(59,130,246,0.5)]"
          >
            🚀 Get Started
          </button>

          <button
            className="
            px-10
            py-5
            rounded-2xl
            border
            border-white/20
            bg-white/5
            backdrop-blur-xl
            text-lg
            hover:bg-white/10
            duration-300"
          >
            ▶ Watch Demo
          </button>

        </motion.div>

        {/* Dashboard Preview */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="
          mt-24
          w-full
          max-w-6xl"
        >

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            overflow-hidden
            shadow-2xl"
          >

            <div
              className="flex gap-2 px-6 py-4 border-b border-white/10"
            >

              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>

            </div>

            <div className="grid md:grid-cols-3 gap-6 p-8">

              <div className="bg-black/20 rounded-2xl p-6">

                <p className="text-gray-400 mb-3">
                  ATS Score
                </p>

                <h1 className="text-6xl font-black text-green-400">
                  92%
                </h1>

              </div>

              <div className="bg-black/20 rounded-2xl p-6">

                <p className="text-gray-400 mb-4">
                  Matched Skills
                </p>

                <div className="flex flex-wrap gap-2">

                  <span className="px-3 py-1 rounded-full bg-green-500/20">
                    Python
                  </span>

                  <span className="px-3 py-1 rounded-full bg-green-500/20">
                    FastAPI
                  </span>

                  <span className="px-3 py-1 rounded-full bg-green-500/20">
                    React
                  </span>

                  <span className="px-3 py-1 rounded-full bg-green-500/20">
                    Docker
                  </span>


                </div>

              </div>

              <div className="bg-black/20 rounded-2xl p-6">

                <p className="text-gray-400 mb-3">
                  AI Recommendation
                </p>

                <p className="text-gray-300 text-sm leading-7">

                  Excellent resume alignment with the job description.

                  Add Kubernetes and AWS certifications to further improve
                  your ATS score.

                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* Scroll */}

        <motion.div
          animate={{
            y: [0, 15, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 2
          }}
          className="mt-16"
        >

          <div
            className="
            w-8
            h-14
            rounded-full
            border
            border-white/20
            flex
            justify-center"
          >

            <div
              className="
              mt-2
              w-2
              h-2
              rounded-full
              bg-blue-400"
            ></div>

          </div>

        </motion.div>

      </section>

      {/* =======================================================
                HOW IT WORKS
======================================================= */}

      <section className="relative z-10 py-28 px-8">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <h2 className="text-center text-5xl font-bold">

            How ResumeAI

            <span className="text-purple-400">
              {" "}Works
            </span>

          </h2>

          <p className="text-center text-gray-400 mt-5 mb-20">

            Analyze your resume in four simple steps.

          </p>

          <div className="grid md:grid-cols-4 gap-10">

            {[
              {
                icon:"📄",
                title:"Upload Resume",
                desc:"Upload your PDF resume securely."
              },

              {
                icon:"📝",
                title:"Paste Job Description",
                desc:"Upload or simply paste any Job Description."
              },

              {
                icon:"🤖",
                title:"AI Analysis",
                desc:"Our AI compares your resume against the job requirements."
              },

              {
                icon:"📊",
                title:"Get Results",
                desc:"Receive ATS score, insights and AI recommendations."
              }

            ].map((step,index)=>(

              <motion.div

                key={index}

                whileHover={{
                  y:-12,
                  scale:1.04
                }}

                className="
                relative
                p-8
                rounded-3xl
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl"

              >

                <div className="text-6xl">

                  {step.icon}

                </div>

                <h3 className="text-2xl font-bold mt-6">

                  {step.title}

                </h3>

                <p className="text-gray-400 mt-5">

                  {step.desc}

                </p>

                <div
                  className="
                  absolute
                  -top-5
                  -right-5
                  w-12
                  h-12
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-500
                  flex
                  items-center
                  justify-center
                  font-bold"
                >

                  {index+1}

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </section>

      {/* =======================================================
              DASHBOARD PREVIEW
======================================================= */}

      <section className="relative z-10 py-28 px-8">

        <motion.div

          initial={{ opacity:0,y:70 }}

          whileInView={{ opacity:1,y:0 }}

          viewport={{ once:true }}

          transition={{ duration:.8 }}

        >

          <h2 className="text-center text-5xl font-bold mb-20">

            Powerful Dashboard

          </h2>

          <div
            className="
            max-w-7xl
            mx-auto
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-10"

          >

            <div className="grid lg:grid-cols-2 gap-10">

              {/* LEFT */}

              <div>

                <h3 className="text-3xl font-bold mb-8">

                  Resume Analysis

                </h3>

                <div className="space-y-6">

                  <div className="rounded-xl border border-dashed border-gray-500 p-6">

                    📄 Upload Resume

                  </div>

                  <div className="rounded-xl border border-dashed border-gray-500 p-6">

                    📂 Upload Job Description

                  </div>

                  <div className="text-center text-gray-500">

                    OR

                  </div>

                  <textarea

                    rows="8"

                    placeholder="Paste Job Description Here..."

                    className="
                    w-full
                    rounded-xl
                    bg-black/30
                    border
                    border-white/10
                    p-5
                    outline-none"

                  />

                  <button

                    className="
                    w-full
                    py-4
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-600
                    to-purple-600
                    font-bold
                    hover:scale-105
                    duration-300"

                  >

                    Analyze Resume 🚀

                  </button>

                </div>

              </div>

              {/* RIGHT */}

              <div className="space-y-6">

                <div className="bg-black/20 rounded-2xl p-6">

                  <h3 className="text-gray-400">

                    ATS Score

                  </h3>

                  <h1 className="text-7xl font-black text-green-400 mt-4">

                    92%

                  </h1>

                </div>

                <div className="bg-black/20 rounded-2xl p-6">

                  <h3 className="mb-4">

                    Matched Skills

                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {[
                      "Python",
                      "React",
                      "FastAPI",
                      "Docker",
                      "TensorFlow",
                      "SQL"
                    ].map(skill=>(

                      <span
                        key={skill}
                        className="
                        px-4
                        py-2
                        rounded-full
                        bg-green-500/20"
                      >

                        {skill}

                      </span>

                    ))}

                  </div>

                </div>

                <div className="bg-black/20 rounded-2xl p-6">

                  <h3 className="mb-4">

                    AI Recommendation

                  </h3>

                  <p className="text-gray-300 leading-8">

                    Excellent ATS score.

                    Improve your resume by adding Kubernetes,
                    AWS and quantifiable project achievements.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </section>

      {/* =======================================================
                    TRUSTED BY
======================================================= */}

      <section className="relative z-10 py-24 px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >

          <h2 className="text-center text-gray-400 tracking-[8px] uppercase text-sm">

            Trusted Technologies

          </h2>

          <div className="mt-12 flex flex-wrap justify-center gap-10">

            {[
              "OpenAI",
              "Llama",
              "FastAPI",
              "React",
              "Python",
              "Docker",
              "TensorFlow",
              "PyTorch"
            ].map((item) => (

              <div
                key={item}
                className="
                px-8
                py-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                hover:scale-110
                duration-300
                text-gray-300
                font-semibold"
              >
                {item}
              </div>

            ))}

          </div>

        </motion.div>

      </section>

      {/* =======================================================
                    FEATURES
======================================================= */}

      <section className="relative z-10 py-24 px-8">

        <motion.div

          initial={{ opacity: 0, y: 80 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: .8 }}

        >

          <h2
            className="
            text-5xl
            font-bold
            text-center
            mb-6"
          >

            Why Choose

            <span className="text-blue-400">

              {" "}ResumeAI?

            </span>

          </h2>

          <p
            className="
            text-center
            text-gray-400
            max-w-3xl
            mx-auto
            mb-20"
          >

            Everything you need to optimize your resume and maximize your chances
            of getting shortlisted.

          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {[
              {
                icon:"🤖",
                title:"AI Resume Analysis",
                desc:"Analyze resumes using powerful Large Language Models."
              },

              {
                icon:"📈",
                title:"ATS Score",
                desc:"Get an accurate ATS compatibility score instantly."
              },

              {
                icon:"🎯",
                title:"Skill Matching",
                desc:"Compare your resume with the job description."
              },

              {
                icon:"💡",
                title:"AI Suggestions",
                desc:"Receive intelligent recommendations to improve your resume."
              },

              {
                icon:"⚡",
                title:"Instant Results",
                desc:"Generate detailed reports within seconds."
              },

              {
                icon:"📄",
                title:"Professional Reports",
                desc:"Download recruiter-ready resume analysis reports."
              }

            ].map((feature,index)=>(

              <motion.div

                key={index}

                whileHover={{
                  y:-10,
                  scale:1.03
                }}

                transition={{
                  duration:.3
                }}

                className="
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                shadow-xl"

              >

                <div className="text-6xl">

                  {feature.icon}

                </div>

                <h3 className="text-2xl font-bold mt-6">

                  {feature.title}

                </h3>

                <p className="text-gray-400 mt-5 leading-8">

                  {feature.desc}

                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </section>

      {/* =======================================================
                    TESTIMONIALS
======================================================= */}

      <section className="relative z-10 py-28 px-8">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <h2 className="text-5xl font-bold text-center">

            Loved by

            <span className="text-blue-400">
              {" "}Developers
            </span>

          </h2>

          <p className="text-center text-gray-400 mt-5 mb-20">

            Thousands of students and professionals trust ResumeAI.

          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                name:"Rahul",
                role:"AI Engineer",
                review:"ResumeAI increased my ATS score from 63% to 91%. I received interview calls within a week."
              },

              {
                name:"Priya",
                role:"Data Scientist",
                review:"The AI recommendations are incredibly accurate. It pointed out missing skills recruiters actually expected."
              },

              {
                name:"Aman",
                role:"ML Engineer",
                review:"The dashboard is beautiful and the analysis feels like having a personal career coach."
              }

            ].map((user,index)=>(

              <motion.div

                key={index}

                whileHover={{
                  scale:1.04,
                  y:-10
                }}

                className="
                p-8
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10"

              >

                <div className="text-yellow-400 text-2xl">

                  ⭐⭐⭐⭐⭐

                </div>

                <p className="mt-6 text-gray-300 leading-8">

                  "{user.review}"

                </p>

                <div className="mt-8">

                  <h3 className="font-bold">

                    {user.name}

                  </h3>

                  <p className="text-gray-500">

                    {user.role}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </section>

      {/* =======================================================
                        FAQ
======================================================= */}

      <section className="relative z-10 py-28 px-8">

        <h2 className="text-center text-5xl font-bold mb-20">

          Frequently Asked

          <span className="text-purple-400">

            {" "}Questions

          </span>

        </h2>

        <div className="max-w-5xl mx-auto space-y-6">

          {[
            [
              "Is ResumeAI free?",
              "Yes. ResumeAI offers free ATS analysis with AI recommendations."
            ],

            [
              "Can I paste a Job Description?",
              "Yes. Upload a file or simply paste the Job Description into the text area."
            ],

            [
              "Is my resume secure?",
              "Absolutely. Your resume is processed securely and is never stored permanently."
            ],

            [
              "Which AI model is used?",
              "ResumeAI uses Llama 3.3 through OpenRouter for professional AI-powered resume analysis."
            ]

          ].map((item,index)=>(

            <details

              key={index}

              className="
              bg-white/5
              rounded-2xl
              p-6
              border
              border-white/10"

            >

              <summary
                className="
                cursor-pointer
                text-xl
                font-semibold"
              >

                {item[0]}

              </summary>

              <p className="mt-5 text-gray-400 leading-8">

                {item[1]}

              </p>

            </details>

          ))}

        </div>

      </section>

      {/* =======================================================
                      FINAL CTA
======================================================= */}

      <section className="relative z-10 py-32 px-8">

        <motion.div

          initial={{ opacity:0, scale:.9 }}

          whileInView={{ opacity:1, scale:1 }}

          viewport={{ once:true }}

          className="
          max-w-6xl
          mx-auto
          rounded-[40px]
          bg-gradient-to-r
          from-blue-700
          via-purple-700
          to-pink-600
          p-20
          text-center
          shadow-2xl"

        >

          <h1 className="text-6xl font-black">

            Ready to Land Your

            <br/>

            Dream Job?

          </h1>

          <p className="mt-8 text-xl text-white/80">

            Upload your resume and let AI maximize your chances of getting shortlisted.

          </p>

          <button

            onClick={()=>navigate("/dashboard")}

            className="
            mt-12
            px-12
            py-5
            rounded-2xl
            bg-white
            text-black
            font-bold
            text-xl
            hover:scale-105
            duration-300"

          >

            🚀 Analyze Resume

          </button>

        </motion.div>

      </section>

      {/* =======================================================
                      FOOTER
======================================================= */}

      <footer className="relative z-10 border-t border-white/10 py-12">

        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">

          <div>

            <h1 className="text-3xl font-black">

              ResumeAI

            </h1>

            <p className="text-gray-500 mt-3">

              AI Powered ATS Resume Analyzer

            </p>

          </div>

          <div className="flex gap-10 mt-8 md:mt-0">

            <a href="#" className="hover:text-blue-400">

              Home

            </a>

            <a href="#" className="hover:text-blue-400">

              Dashboard

            </a>

            <a href="#" className="hover:text-blue-400">

              Features

            </a>

            <a href="#" className="hover:text-blue-400">

              Contact

            </a>

          </div>

        </div>

        <p className="text-center text-gray-500 mt-10">

          © 2026 ResumeAI • Built with ❤️ using React + FastAPI + Llama 3.3

        </p>

      </footer>

    </div>

  );

}

export default Home;

