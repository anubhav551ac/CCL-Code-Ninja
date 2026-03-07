
require("dotenv").config();
const OpenAI = require("openai"); 

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.generateText = async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });
    res.json({ result: response.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};