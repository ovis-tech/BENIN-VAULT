// ========== routes/api/artifactChat.js ==========
// Mounted in server.js as: app.use("/api/artifact-chat", require("./routes/api/artifactChat.js"))
//
// SETUP:
// 1. npm install @google/generative-ai
// 2. Add to your existing .env file:
//      GEMINI_API_KEY=your_actual_key_here
//    Get a free key at https://aistudio.google.com (no credit card needed)

const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/", async (req, res) => {
  try {
    const {
      artifactName,
      artifactEnglish,
      artifactDescription,
      question,
      history,
    } = req.body || {};

    // Basic validation — reject empty/missing questions early
    if (!question || typeof question !== "string" || !question.trim()) {
      return res.status(400).json({ error: "A question is required." });
    }

    const safeHistory = Array.isArray(history) ? history : [];

    const systemPrompt = `You are a knowledgeable museum guide answering visitor questions about a single Benin Vault artifact.

Artifact name (native): ${artifactName || "Unknown"}
Artifact name (English): ${artifactEnglish || "Unknown"}
Description: ${artifactDescription || "No description available."}

Rules:
- Answer only using the description above plus your general knowledge of Benin Kingdom history and culture.
- Keep answers concise: 1-3 short sentences, suitable for a small chat panel.
- If asked something unrelated to this artifact or Benin history, politely redirect the visitor back to the artifact.
- If you don't know something, say so honestly rather than inventing details.`;

    const model = genAI.getGenerativeModel({
      model: "gemini-flash-latest",
      systemInstruction: systemPrompt,
    });

    // Gemini's chat history format uses "model" instead of "assistant"
    const geminiHistory = safeHistory
      .filter(
        (m) =>
          m &&
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string"
      )
      .map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

    const chat = model.startChat({ history: geminiHistory });
    const result = await chat.sendMessage(question);
    const answer = result.response.text().trim();

    if (!answer) {
      return res
        .status(500)
        .json({ error: "No answer was generated. Please try again." });
    }

    return res.status(200).json({ answer });
  } catch (err) {
    console.error("artifact-chat error:", err);
    return res
      .status(500)
      .json({ error: "Something went wrong. Please try again." });
  }
});

module.exports = router;
// ========== /routes/api/artifactChat.js ==========