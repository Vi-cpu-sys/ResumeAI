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

function SkillChart({ data }) {

  const matchedCount =
    data?.matched_skills?.length || 0;

  const missingCount =
    data?.missing_skills?.length || 0;

  const chartData = [

    {
      name: "Matched Skills",
      skills: matchedCount,
      color: "#22c55e"
    },

    {
      name: "Missing Skills",
      skills: missingCount,
      color: "#ef4444"
    }

  ];

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
      transition-all
      duration-300"
    >

      {/* Header */}

      <div className="mb-8">

        <h2
          className="
          text-3xl
          font-bold
          bg-gradient-to-r
          from-blue-400
          to-purple-400
          bg-clip-text
          text-transparent"
        >
          Skill Analytics
        </h2>

        <p className="text-gray-400 mt-2">
          Visual representation of skill matching performance.
        </p>

      </div>

      {/* Summary Cards */}

      <div
        className="
        grid
        md:grid-cols-2
        gap-6
        mb-8"
      >

        <div
          className="
          bg-green-500/10
          border
          border-green-500/20
          rounded-2xl
          p-5"
        >

          <h3 className="text-green-400 text-lg">
            Matched Skills
          </h3>

          <p
            className="
            text-4xl
            font-bold
            mt-2"
          >
            {matchedCount}
          </p>

        </div>

        <div
          className="
          bg-red-500/10
          border
          border-red-500/20
          rounded-2xl
          p-5"
        >

          <h3 className="text-red-400 text-lg">
            Missing Skills
          </h3>

          <p
            className="
            text-4xl
            font-bold
            mt-2"
          >
            {missingCount}
          </p>

        </div>

      </div>

      {/* Chart */}

      <div
        style={{
          width: "100%",
          height: 350
        }}
      >

        <ResponsiveContainer>

          <BarChart
            data={chartData}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
            />

            <XAxis
              dataKey="name"
              stroke="#94a3b8"
            />

            <YAxis
              stroke="#94a3b8"
            />

            <Tooltip />

            <Bar
              dataKey="skills"
              radius={[12, 12, 0, 0]}
            >

              {

                chartData.map(
                  (entry, index) => (

                    <Cell
                      key={index}
                      fill={entry.color}
                    />

                  )
                )

              }

            </Bar>

          </BarChart>

        </ResponsiveContainer>

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
        Higher matched skills indicate stronger alignment between the resume and job description.
      </div>

    </div>

  );

}

export default SkillChart;