from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)  # Allow React frontend to call Flask

# Configure Gemini
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
model = genai.GenerativeModel("gemini-1.5-flash")

@app.route("/translate", methods=["POST"])
def translate():
    data = request.json
    text = data.get("text")
    source_lang = data.get("source_lang", "English")
    target_lang = data.get("target_lang", "Spanish")

    prompt = f"Translate this from {source_lang} to {target_lang}: {text}"
    response = model.generate_content(prompt)

    return jsonify({"translated_text": response.text})

if __name__ == "__main__":
    app.run(debug=True)
