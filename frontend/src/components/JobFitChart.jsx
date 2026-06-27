import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell
} from "recharts";

function JobFitChart({ data }) {
  const jobFit = data?.job_fit || {};

  const chartData = [
    { role: "AI Engineer", score: jobFit["AI Engineer"] || 0 },
    { role: "ML Engineer", score: jobFit["ML Engineer"] || 0 },
    { role: "Data Scientist", score: jobFit["Data Scientist"] || 0 },
    { role: "Data Analyst", score: jobFit["Data Analyst"] || 0 }
  ];

  const colors = ["#3B82F6", "#8B5CF6", "#EC4899", "#14B8A6"];

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
      hover:scale-[1.01]
      transition-all
      duration-300"
    >
      <h2
        className="
        text-3xl
        font-bold
        mb-6"
      >
        Job Fit Visualization
      </h2>

      <p
        className="
        text-gray-400
        mb-6"
      >
        AI-generated suitability score for different career roles.
      </p>

      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.1)"
            />

            <XAxis dataKey="role" stroke="#cbd5e1" />

            <YAxis domain={[0, 100]} stroke="#cbd5e1" />

            <Tooltip />

            <Bar dataKey="score" radius={[12, 12, 0, 0]}>
              {chartData.map((_, index) => (
                <Cell key={index} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div
        className="
        mt-8
        border-t
        border-white/10
        pt-4
        text-sm
        text-gray-400"
      >
        Based on ATS score, matched skills, and resume-job alignment.
      </div>
    </div>
  );
}

export default JobFitChart;

