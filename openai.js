const { OpenAI } = require('openai');
require('dotenv').config(); // Load API key from .env file

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

// Function to generate comments using OpenAI
const generateComment = async (code, language, verbosity) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "user", content: `Generate ${verbosity} comments for the following ${language} code: ${code}` }
      ],
      max_tokens: 1000,
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error in OpenAI API call:", error.message);
    return null;
  }
};

module.exports = { generateComment };
