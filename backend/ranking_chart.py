import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("outputs/ranking_results.csv")

top10 = df.head(10)

plt.figure(figsize=(10,5))

plt.bar(
    top10["Candidate"],
    top10["Match Score"]
)

plt.xticks(rotation=45)

plt.title("Top 10 Candidates")

plt.tight_layout()

plt.savefig(
    "outputs/ranking_chart.png"
)

plt.show()