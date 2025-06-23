// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// require("dotenv").config();

// router.post("/", async (req, res) => {
//   const userQuestion = req.body.question;

//   try {
//     const response = await axios.post(
//       "https://api.openai.com/v1/chat/completions",
//       {
//         model: "gpt-3.5-turbo",
//         messages: [
//           {
//             role: "system",
//             content: "You are AgriBot, an expert in crop guidance, organic farming, Jivamrut, pest control, and soil health. Help farmers in simple language.",
//           },
//           {
//             role: "user",
//             content: userQuestion,
//           },
//         ],
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//         },
//       }
//     );

//     const answer = response.data.choices[0].message.content;
//     res.json({ answer });
//   } catch (error) {
//     // console.error(error);
//     // res.status(500).json({ error: "Something went wrong" });
//     router.post("/chat", async (req, res) => {
//   const { message } = req.body;
//   if (!message) {
//     return res.status(400).json({ error: "Message is required" });
//   }

//   try {
//     const completion = await openai.createChatCompletion({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: message }],
//     });

//     res.json({ reply: completion.data.choices[0].message.content });
//   } catch (err) {
//     console.error("🔴 OpenAI API error:", err); // <- Show full error
//     res.status(500).json({ error: "Failed to get response from AI" });
//   }
// });

//   }
// });

// module.exports = router;





// routes/chat.js
const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.post("/", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are AgriBot, an expert in crops, Jivamrut, fertilizers. Answer in simple language.",
          },
          { role: "user", content: question },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const answer = response.data.choices[0].message.content;
    res.json({ answer });
  } catch (err) {
    console.error("🔴 OpenAI API Error:", err.response?.data || err.message);
    res.status(500).json({ answer: "⚠️ Error contacting AgriBot." });
  }
});

module.exports = router;

