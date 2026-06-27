import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function ScoreCard({ data }) {

  const score = data?.score || 0;

  const getStatusColor = () => {

    if (score >= 75)
      return "bg-green-500";

    if (score >= 50)
      return "bg-yellow-500";

    return "bg-red-500";

  };

  const getPathColor = () => {

    if (score >= 75)
      return "#22c55e";

    if (score >= 50)
      return "#eab308";

    return "#ef4444";

  };

  const getStatusIcon = () => {

    if (score >= 75)
      return "🟢";

    if (score >= 50)
      return "🟡";

    return "🔴";

  };

  const getMessage = () => {

    if (score >= 75)
      return "Excellent resume alignment with job requirements.";

    if (score >= 50)
      return "Good match. Minor improvements can boost ATS performance.";

    return "Resume requires optimization to improve ATS compatibility.";

  };

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

      {/* Header */}

      <div className="text-center mb-8">

        <p
          className="
          uppercase
          tracking-widest
          text-blue-400
          text-sm"
        >
          ATS SCORE
        </p>

        <h2
          className="
          text-4xl
          font-extrabold
          mt-2"
        >
          Resume Match Analysis
        </h2>

      </div>

      {/* Circular Score */}

      <div
        className="
        relative
        mx-auto"
        style={{
          width: 240,
          height: 240
        }}
      >

        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={buildStyles({

            textColor: "#ffffff",

            pathColor: getPathColor(),

            trailColor: "rgba(255,255,255,0.08)",

            textSize: "16px"

          })}
        />

      </div>

      {/* Status */}

      <div className="mt-8 text-center">

        <span
          className={`
          px-6
          py-3
          rounded-full
          text-white
          font-semibold
          shadow-lg
          ${getStatusColor()}
          `}
        >
          {getStatusIcon()} {data?.status}
        </span>

      </div>

      {/* Summary */}

      <div
        className="
        mt-8
        bg-blue-500/10
        border
        border-blue-500/20
        rounded-2xl
        p-5"
      >

        <h3
          className="
          text-lg
          font-semibold
          text-blue-300"
        >
          ATS Analysis
        </h3>

        <p
          className="
          text-gray-300
          mt-3"
        >
          {getMessage()}
        </p>

      </div>

      {/* Quick Stats */}

      <div
        className="
        grid
        grid-cols-2
        gap-4
        mt-8"
      >

        <div
          className="
          bg-white/5
          border
          border-white/10
          rounded-2xl
          p-4
          text-center"
        >

          <p className="text-gray-400">
            ATS Score
          </p>

          <h3
            className="
            text-3xl
            font-bold
            mt-2"
          >
            {score}%
          </h3>

        </div>

        <div
          className="
          bg-white/5
          border
          border-white/10
          rounded-2xl
          p-4
          text-center"
        >

          <p className="text-gray-400">
            Status
          </p>

          <h3
            className="
            text-xl
            font-bold
            mt-2"
          >
            {data?.status}
          </h3>

        </div>

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
        ATS score is calculated using skill matching, keyword relevance, and resume-job description alignment.
      </div>

    </div>

  );

}

export default ScoreCard;