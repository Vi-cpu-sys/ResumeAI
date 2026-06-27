import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

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
import ResumeStatsCard from "../components/ResumeStatsCard";
import AnalysisHistory from "../components/AnalysisHistory";
import Footer from "../components/Footer";
import EmptyState from "../components/EmptyState";

function Dashboard() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [jdFile, setJdFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    if (!resumeFile || !jdFile) {
      toast.error("Please upload both Resume and Job Description.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("resume", resumeFile);
      formData.append("jd", jdFile);

      const response = await axios.post(
        "http://127.0.0.1:8000/analyze",
        formData
      );

      setResult(response.data);

      toast.success("Resume analyzed successfully!");

      localStorage.setItem(
        "lastAnalysis",
        JSON.stringify(response.data)
      );

      setTimeout(() => {
        window.scrollTo({ top: 900, behavior: "smooth" });
      }, 500);
    } catch (error) {
      console.error(error);
      toast.error("Unable to connect to backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={
        "\n" +
        "min-h-screen\n" +
        "bg-[#0B1120]\n" +
        "text-white\n" +
        "px-8\n" +
        "py-8\n" +
        "relative\n" +
        "overflow-hidden"
      }
    >
      {/* Background Glow */}
      <div
        className={
          "\n" +
          "absolute\n" +
          "w-[500px]\n" +
          "h-[500px]\n" +
          "bg-blue-600\n" +
          "blur-[220px]\n" +
          "opacity-20\n" +
          "top-0\n" +
          "left-0\n" +
          "rounded-full"
        }
      />
      <div
        className={
          "\n" +
          "absolute\n" +
          "w-[500px]\n" +
          "h-[500px]\n" +
          "bg-purple-600\n" +
          "blur-[220px]\n" +
          "opacity-20\n" +
          "bottom-0\n" +
          "right-0\n" +
          "rounded-full"
        }
      />

      {/* Navbar */}
      <div
        className={
          "\n" +
          "sticky\n" +
          "top-4\n" +
          "z-50\n" +
          "flex\n" +
          "justify-between\n" +
          "items-center\n" +
          "mb-12\n" +
          "bg-white/10\n" +
          "backdrop-blur-xl\n" +
          "border\n" +
          "border-white/10\n" +
          "rounded-2xl\n" +
          "px-8\n" +
          "py-4\n" +
          "shadow-2xl"
        }
      >
        <h1
          className={
            "\n" +
            "text-3xl\n" +
            "font-extrabold\n" +
            "text-blue-400\n" +
            "drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          }
        >
          ResumeAI
        </h1>

        <button
          onClick={() => navigate("/")}
          className={
            "\n" +
            "px-6\n" +
            "py-2\n" +
            "rounded-xl\n" +
            "bg-blue-600/20\n" +
            "border\n" +
            "border-blue-500/30\n" +
            "hover:bg-blue-500\n" +
            "hover:scale-105\n" +
            "transition-all\n" +
            "duration-300"
          }
        >
          ← Home
        </button>
      </div>

      {/* Header */}
      <div className="relative z-10">
        <h1
          className={
            "\n" +
            "text-5xl\n" +
            "md:text-6xl\n" +
            "font-bold\n" +
            "text-center"
          }
        >
          AI Resume Analyzer
        </h1>
        <p
          className={
            "\n" +
            "text-center\n" +
            "text-gray-400\n" +
            "mt-4\n" +
            "text-lg"
          }
        >
          Upload Resume and Job Description
          for AI-powered analysis.
        </p>
      </div>

      {/* Stats Cards */}
      <div
        className={
          "\n" +
          "relative\n" +
          "z-10\n" +
          "grid\n" +
          "grid-cols-2\n" +
          "md:grid-cols-4\n" +
          "gap-6\n" +
          "mt-12"
        }
      >
        <FloatingCard value="95%" title="ATS Accuracy" />
        <FloatingCard value="50K+" title="Resumes Analyzed" />
        <FloatingCard value="AI" title="Powered Analysis" />
        <FloatingCard value="24/7" title="Instant Results" />
      </div>

      {/* Upload Section */}
      <div
        className={
          "\n" +
          "relative\n" +
          "z-10\n" +
          "grid\n" +
          "md:grid-cols-2\n" +
          "gap-8\n" +
          "mt-16"
        }
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

      {/* Upload Status */}
      <div
        className={
          "\n" +
          "relative\n" +
          "z-10\n" +
          "flex\n" +
          "justify-center\n" +
          "gap-8\n" +
          "mt-8\n" +
          "flex-wrap"
        }
      >
        {resumeFile && (
          <div
            className={
              "\n" +
              "bg-green-500/20\n" +
              "border\n" +
              "border-green-500\n" +
              "px-6\n" +
              "py-3\n" +
              "rounded-xl"
            }
          >
            ✅ {resumeFile.name}
          </div>
        )}

        {jdFile && (
          <div
            className={
              "\n" +
              "bg-green-500/20\n" +
              "border\n" +
              "border-green-500\n" +
              "px-6\n" +
              "py-3\n" +
              "rounded-xl"
            }
          >
            ✅ {jdFile.name}
          </div>
        )}
      </div>

      {/* Analyze Button */}
      <div
        className={
          "\n" +
          "relative\n" +
          "z-10\n" +
          "text-center\n" +
          "mt-10"
        }
      >
        <button
          onClick={handleAnalyze}
          className={
            "\n" +
            "px-10\n" +
            "py-4\n" +
            "rounded-2xl\n" +
            "bg-blue-600\n" +
            "hover:bg-blue-500\n" +
            "hover:scale-105\n" +
            "text-xl\n" +
            "font-semibold\n" +
            "shadow-xl\n" +
            "transition-all\n" +
            "duration-300"
          }
        >
          Analyze Resume 🚀
        </button>

        <button
          onClick={() => {
            setResumeFile(null);
            setJdFile(null);
            setResult(null);
          }}
          className={
            "\n" +
            "ml-4\n" +
            "px-8\n" +
            "py-4\n" +
            "rounded-2xl\n" +
            "bg-red-600\n" +
            "hover:bg-red-500\n" +
            "transition-all"
          }
        >
          Reset
        </button>
      </div>

      {/* Loading / Results */}
      {loading ? (
        <LoadingAnimation />
      ) : result ? (
        <>
          {/* Row 1 */}
          <div
            className={
              "\n" +
              "relative\n" +
              "z-10\n" +
              "grid\n" +
              "lg:grid-cols-2\n" +
              "gap-8\n" +
              "mt-16"
            }
          >
            <ScoreCard data={result} />
            <ATSCard data={result} />
            <div
              className={
                "\n" +
                "relative\n" +
                "z-10\n" +
                "mt-8"
              }
            >
              <ResumeStatsCard data={result} />
            </div>
          </div>

          {/* Row 2 */}
          <div
            className={
              "\n" +
              "relative\n" +
              "z-10\n" +
              "grid\n" +
              "lg:grid-cols-2\n" +
              "gap-8\n" +
              "mt-8"
            }
          >
            <ResultsCard data={result} />
            <RecommendationCard data={result} />
          </div>

          {/* Row 3 */}
          <div
            className={
              "\n" +
              "relative\n" +
              "z-10\n" +
              "grid\n" +
              "lg:grid-cols-2\n" +
              "gap-8\n" +
              "mt-8"
            }
          >
            <VerdictCard data={result} />
            <DownloadReport data={result} />
          </div>

          {/* Row 4 */}
          <div
            className={
              "\n" +
              "relative\n" +
              "z-10\n" +
              "grid\n" +
              "lg:grid-cols-2\n" +
              "gap-8\n" +
              "mt-8"
            }
          >
            <SkillChart data={result} />
            <JobFitCard
              data={{
                ...result,
                score: result.score,
                job_fit: result.job_fit,
              }}
            />
          </div>

          {/* Row 5 */}
          <div
            className={
              "\n" +
              "relative\n" +
              "z-10\n" +
              "mt-8\n" +
              "mb-20"
            }
          >
            <CandidateInsights
              data={{
                ...result,
                strengths: result.strengths,
                weaknesses: result.weaknesses,
                interview_probability: result.interview_probability,
              }}
            />

            <div
              className={
                "\n" +
                "relative\n" +
                "z-10\n" +
                "mt-8\n" +
                "mb-20"
              }
            >
              <AnalysisHistory />
            </div>
          </div>
        </>
      ) : (
        <EmptyState />
      )}

      <Footer />
    </div>
  );
}

export default Dashboard;

