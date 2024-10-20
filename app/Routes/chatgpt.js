// routes/chatgpt.js
require('dotenv').config(); // Assurez-vous que les variables d'environnement sont chargées
const express = require('express');
const router = express.Router();
const axios = require('axios');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

router.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      max_tokens: 150
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      }
    });
    console.log(response.data)
    res.json(response.data);
  } catch (error) {
    console.error('Error communicating with OpenAI:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Error communicating with OpenAI' });
  }
});

module.exports = router;
