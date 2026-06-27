from src.recommendations import generate_recommendations

missing = [
    "tensorflow",
    "machine learning",
    "docker"
]

recommendations = generate_recommendations(missing)

for item in recommendations:
    print(item)