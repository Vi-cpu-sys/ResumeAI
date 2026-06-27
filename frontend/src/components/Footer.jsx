import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaPython
} from "react-icons/fa";

import {
  SiFastapi,
  SiTailwindcss
} from "react-icons/si";

function Footer() {

  const year = new Date().getFullYear();

  return (

    <footer
      className="
      mt-24
      border-t
      border-white/10
      bg-white/5
      backdrop-blur-xl"
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        py-10"
      >

        <motion.div

          initial={{
            opacity: 0,
            y: 30
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true
          }}

          className="
          grid
          md:grid-cols-3
          gap-10"

        >

          {/* Brand */}

          <div>

            <h2
              className="
              text-3xl
              font-bold
              text-blue-400"
            >
              ResumeAI
            </h2>

            <p
              className="
              mt-4
              text-gray-400
              leading-7"
            >
              AI-powered Resume Analyzer that evaluates ATS compatibility,
              compares resumes with job descriptions, and provides actionable
              recommendations to improve interview chances.
            </p>

          </div>

          {/* Tech Stack */}

          <div>

            <h3
              className="
              text-xl
              font-semibold
              mb-4"
            >
              Built With
            </h3>

            <div
              className="
              flex
              flex-wrap
              gap-4"
            >

              <div className="flex items-center gap-2">
                <FaReact className="text-cyan-400 text-xl" />
                React
              </div>

              <div className="flex items-center gap-2">
                <SiTailwindcss className="text-sky-400 text-xl" />
                TailwindCSS
              </div>

              <div className="flex items-center gap-2">
                <FaPython className="text-yellow-400 text-xl" />
                Python
              </div>

              <div className="flex items-center gap-2">
                <SiFastapi className="text-green-400 text-xl" />
                FastAPI
              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3
              className="
              text-xl
              font-semibold
              mb-4"
            >
              Connect
            </h3>

            <div
              className="
              flex
              gap-5"
            >

              <a

                href="https://github.com/Vi-cpu-sys"

                target="_blank"

                rel="noreferrer"

                className="
                text-3xl
                hover:text-white
                transition"

              >

                <FaGithub />

              </a>

              <a

                href="https://www.linkedin.com/in/vinutha-naik-6870a9256"

                target="_blank"

                rel="noreferrer"

                className="
                text-3xl
                hover:text-blue-400
                transition"

              >

                <FaLinkedin />

              </a>

            </div>

          </div>

        </motion.div>

        <div
          className="
          border-t
          border-white/10
          mt-10
          pt-6
          text-center
          text-gray-500"
        >

          © {year} ResumeAI • Built with React, FastAPI & AI

        </div>

      </div>

    </footer>

  );

}

export default Footer;