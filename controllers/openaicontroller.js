const { Configuration, OpenAIApi } = require("openai");

// Configure OpenAI with your API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // store in .env for security
});
const openai = new OpenAIApi(configuration);

// Example endpoint
const generateText = async (req, res) => {
  try {
    const prompt = req.body.prompt || "Hello AI!";

    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    res.json({
      status: "success",
      data: response.data.choices[0].message.content,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

module.exports = { generateText };