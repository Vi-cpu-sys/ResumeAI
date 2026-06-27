import { useEffect, useState } from "react";

function AnalysisHistory() {

  const [history, setHistory] = useState(null);

  useEffect(() => {

    const savedData =
      localStorage.getItem(
        "lastAnalysis"
      );

    if (savedData) {

      setHistory(
        JSON.parse(savedData)
      );

    }

  }, []);

  if (!history) {

    return (

      <div
        className="
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-8
        shadow-2xl"
      >

        <h2
          className="
          text-3xl
          font-bold
          mb-4"
        >
          Analysis History
        </h2>

        <p className="text-gray-400">
          No previous analysis found.
        </p>

      </div>

    );

  }

  return (

    <div
      className="
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-8
      shadow-2xl"
    >

      <h2
        className="
        text-3xl
        font-bold
        mb-8"
      >
        Previous Analysis
      </h2>

      <div
        className="
        grid
        md:grid-cols-3
        gap-6"
      >

        <div
          className="
          bg-blue-500/10
          border
          border-blue-500/20
          rounded-2xl
          p-5"
        >

          <h3 className="text-gray-400">
            ATS Score
          </h3>

          <div
            className="
            text-4xl
            font-bold
            text-blue-400
            mt-2"
          >
            {history.score}%
          </div>

        </div>

        <div
          className="
          bg-green-500/10
          border
          border-green-500/20
          rounded-2xl
          p-5"
        >

          <h3 className="text-gray-400">
            Verdict
          </h3>

          <div
            className="
            text-xl
            font-bold
            text-green-400
            mt-2"
          >
            {history.verdict}
          </div>

        </div>

        <div
          className="
          bg-purple-500/10
          border
          border-purple-500/20
          rounded-2xl
          p-5"
        >

          <h3 className="text-gray-400">
            Match Status
          </h3>

          <div
            className="
            text-xl
            font-bold
            text-purple-400
            mt-2"
          >
            {history.status}
          </div>

        </div>

      </div>

    </div>

  );

}

export default AnalysisHistory;