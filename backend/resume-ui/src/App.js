import { useState } from "react";
import axios from "axios";

function App() {
  const [resume, setResume] = useState(null);
  const [jd, setJd] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if (!resume || !jd) {
      alert("Please upload both Resume and JD");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("jd", jd);

    try {
      setLoading(true);

      const res = await axios.post(
        "http://127.0.0.1:8000/analyze",
        formData
      );

      setResult(res.data);
    } catch (err) {
      console.log(err);
      alert("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial", background: "#f7f7f7", minHeight: "100vh" }}>
      
      <h1 style={{ textAlign: "center" }}>🧠 AI Resume Screening System</h1>

      {/* UPLOAD SECTION */}
      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "500px",
        margin: "20px auto"
      }}>
        <input
          type="file"
          onChange={(e) => setResume(e.target.files[0])}
        />
        <br /><br />

        <input
          type="file"
          onChange={(e) => setJd(e.target.files[0])}
        />
        <br /><br />

        <button
          onClick={analyze}
          style={{
            padding: "10px 20px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>
      </div>

      {/* RESULT SECTION */}
      {result && (
        <div style={{ maxWidth: "700px", margin: "30px auto" }}>

          {/* SCORE CARD */}
          <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px"
          }}>
            <h2>📊 Resume Score: {result.score}%</h2>

            <div style={{
              height: "15px",
              background: "#ddd",
              borderRadius: "10px",
              overflow: "hidden"
            }}>
              <div style={{
                width: `${result.score}%`,
                height: "100%",
                background:
                  result.score > 75 ? "green" :
                  result.score > 50 ? "orange" : "red"
              }} />
            </div>

            <h3 style={{ marginTop: "10px" }}>
              Status: {result.status}
            </h3>
          </div>

          {/* MATCHED SKILLS */}
          <div style={{
            background: "#eaffea",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "15px"
          }}>
            <h3>✅ Matched Skills</h3>
            <ul>
              {result.matched_skills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

          {/* MISSING SKILLS */}
          <div style={{
            background: "#ffeaea",
            padding: "15px",
            borderRadius: "10px"
          }}>
            <h3>❌ Missing Skills</h3>
            <ul>
              {result.missing_skills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

        </div>
      )}
    </div>
  );
}

export default App;