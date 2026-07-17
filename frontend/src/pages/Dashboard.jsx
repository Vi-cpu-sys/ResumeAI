import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import DropZone from "../components/DropZone";
import ScoreCard from "../components/ScoreCard";
import LoadingAnimation from "../components/LoadingAnimation";
import ResultsCard from "../components/ResultsCard";
import FloatingCard from "../components/FloatingCard";
import ATSCard from "../components/ATSCard";
import RecommendationCard from "../components/RecommendationCard";
import DownloadReport from "../components/DownloadReport";
import VerdictCard from "../components/VerdictCard";
import SkillChart from "../components/SkillChart";
import CandidateInsights from "../components/CandidateInsights";
import JobFitCard from "../components/JobFitCard";
import JobFitChart from "../components/JobFitChart";

function Dashboard() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [resumeFile, setResumeFile] = useState(null);

  const [jdFile, setJdFile] = useState(null);

  const [jdText, setJdText] = useState("");

  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {

    if (!resumeFile) {

      alert("Please upload your Resume");

      return;

    }

    if (!jdFile && jdText.trim() === "") {

      alert("Upload a Job Description OR Paste one.");

      return;

    }

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append("resume", resumeFile);

      if (jdFile) {

        formData.append("jd", jdFile);

      }

      if (jdText.trim() !== "") {

        formData.append("jd_text", jdText);

      }

      const API =

        import.meta.env.VITE_API_URL ||

        "http://127.0.0.1:8000";

      const response = await axios.post(

        `${API}/analyze`,

        formData

      );

      setResult(response.data);

      localStorage.setItem(

        "lastAnalysis",

        JSON.stringify(response.data)

      );

    }

    catch (error) {

      console.error(error);

      alert("Backend connection failed.");

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <div
      className="
      min-h-screen
      bg-[#0B1120]
      text-white
      px-8
      py-8
      relative
      overflow-hidden"
    >

      {/* Background Glow */}

      <div
        className="
        absolute
        w-[500px]
        h-[500px]
        bg-blue-600
        blur-[220px]
        opacity-20
        top-0
        left-0
        rounded-full"
      />

      <div
        className="
        absolute
        w-[500px]
        h-[500px]
        bg-purple-600
        blur-[220px]
        opacity-20
        bottom-0
        right-0
        rounded-full"
      />

      {/* Navbar */}

      <div
        className="
        sticky
        top-4
        z-50
        flex
        justify-between
        items-center
        mb-12
        bg-white/10
        backdrop-blur-xl
        border
        border-white/10
        rounded-2xl
        px-8
        py-4
        shadow-2xl"
      >

        <h1
          className="
          text-3xl
          font-extrabold
          text-blue-400
          drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
        >
          ResumeAI
        </h1>

        <button
          onClick={() => navigate("/")}
          className="
          px-6
          py-2
          rounded-xl
          bg-blue-600/20
          border
          border-blue-500/30
          hover:bg-blue-500
          hover:scale-105
          transition-all
          duration-300"
        >
          ← Home
        </button>

      </div>

      {/* Header */}

      <div className="relative z-10">

        <h1
          className="
          text-5xl
          md:text-6xl
          font-bold
          text-center"
        >
          AI Resume Analyzer
        </h1>

        <p
          className="
          text-center
          text-gray-400
          mt-4
          text-lg"
        >
          Upload Resume and Job Description
          for AI-powered analysis.
        </p>

      </div>

      {/* Stats */}

      <div
        className="
        relative
        z-10
        grid
        grid-cols-2
        md:grid-cols-4
        gap-6
        mt-12"
      >

        <FloatingCard
          value="95%"
          title="ATS Accuracy"
        />

        <FloatingCard
          value="50K+"
          title="Resumes Analyzed"
        />

        <FloatingCard
          value="AI"
          title="Powered Analysis"
        />

        <FloatingCard
          value="24/7"
          title="Instant Results"
        />

      </div>

      {/* Upload */}

      <div
        className="
        relative
        z-10
        grid
        md:grid-cols-2
        gap-8
        mt-16"
      >

        <DropZone
          title="Upload Resume"
          onFileSelect={setResumeFile}
          file={resumeFile}
        />

        <DropZone
          title="Upload Job Description"
          onFileSelect={setJdFile}
          file={jdFile}
        />

      </div>

      {/* Uploaded Files */}

      <div
        className="
        relative
        z-10
        flex
        justify-center
        gap-8
        mt-8
        flex-wrap"
      >

        {resumeFile && (

          <div
            className="
            bg-green-500/20
            border
            border-green-500
            px-6
            py-3
            rounded-xl"
          >
            ✅ {resumeFile.name}
          </div>

        )}

        {jdFile && (

          <div
            className="
            bg-green-500/20
            border
            border-green-500
            px-6
            py-3
            rounded-xl"
          >
            ✅ {jdFile.name}
          </div>

        )}

      </div>

      {/* Analyze */}

      <div
        className="
        relative
        z-10
        text-center
        mt-10"
      >

        <button
          onClick={handleAnalyze}
          className="
          px-10
          py-4
          rounded-2xl
          bg-blue-600
          hover:bg-blue-500
          hover:scale-105
          text-xl
          font-semibold
          shadow-xl
          transition-all
          duration-300"
        >
          Analyze Resume 🚀
        </button>

      </div>

      {/* Loading */}

      {loading ? (

        <LoadingAnimation />

      ) : (

        result && (

          <>

            {/* Row 1 */}

            <div
              className="
              relative
              z-10
              grid
              lg:grid-cols-2
              gap-8
              mt-16"
            >

              <ScoreCard data={result} />

              <ATSCard data={result} />

            </div>

            {/* Row 2 */}

            <div
              className="
              relative
              z-10
              grid
              lg:grid-cols-2
              gap-8
              mt-8"
            >

              <ResultsCard data={result} />

              <RecommendationCard data={result} />

            </div>

            {/* Row 3 */}

            <div
              className="
              relative
              z-10
              grid
              lg:grid-cols-2
              gap-8
              mt-8"
            >

              <VerdictCard data={result} />

              <DownloadReport data={result} />

            </div>

            {/* Row 4 */}

            <div
              className="
              relative
              z-10
              grid
              lg:grid-cols-2
              gap-8
              mt-8"
            >

              <SkillChart data={result} />

              <JobFitCard data={result} />

            </div>

            {/* Row 5 */}

            <div
              className="
              relative
              z-10
              mt-8"
            >

              <JobFitChart
                data={result}
              />

            </div>

            {/* Row 6 */}

            <div
              className="
              relative
              z-10
              mt-8"
            >

              <CandidateInsights
                data={result}
              />

            </div>

          </>

        )

      )}

      {/* Recent Analysis */}

      {

        !loading &&

        localStorage.getItem("lastAnalysis") && (

          <div
            className="
            relative
            z-10
            mt-16
            mb-20
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8"
          >

            <div
              className="
              flex
              justify-between
              items-center
              mb-6"
            >

              <h2
                className="
                text-3xl
                font-bold"
              >
                Previous Analysis
              </h2>

              <button

                onClick={() => {

                  localStorage.removeItem(
                    "lastAnalysis"
                  );

                  window.location.reload();

                }}

                className="
                px-5
                py-2
                rounded-xl
                bg-red-500/20
                border
                border-red-500/30
                hover:bg-red-500
                transition-all"

              >

                Clear History

              </button>

            </div>

            {

              (() => {

                const previous =
                  JSON.parse(
                    localStorage.getItem(
                      "lastAnalysis"
                    )
                  );

                return (

                  <div
                    className="
                    bg-blue-500/10
                    border
                    border-blue-500/20
                    rounded-2xl
                    p-6"
                  >

                    <div
                      className="
                      flex
                      justify-between
                      flex-wrap
                      gap-4"
                    >

                      <div>

                        <p
                          className="
                          text-gray-400"
                        >
                          Previous ATS Score
                        </p>

                        <h3
                          className="
                          text-5xl
                          font-bold
                          text-blue-400"
                        >
                          {previous.score}%
                        </h3>

                      </div>

                      <div>

                        <p
                          className="
                          text-gray-400"
                        >
                          Status
                        </p>

                        <h3
                          className="
                          text-2xl
                          font-semibold"
                        >
                          {previous.status}
                        </h3>

                      </div>

                      <div>

                        <p
                          className="
                          text-gray-400"
                        >
                          Recruiter Verdict
                        </p>

                        <h3
                          className="
                          text-2xl
                          font-semibold
                          text-green-400"
                        >
                          {previous.verdict}
                        </h3>

                      </div>

                    </div>

                  </div>

                );

              })()

            }

          </div>

        )

      }

    </div>

  );

}

export default Dashboard;

