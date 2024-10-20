require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

router.post('/generate-image', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/images/generations', {
      prompt: prompt,
      n: 1,
      size: '512x512'
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error communicating with OpenAI:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Error communicating with OpenAI' });
  }
});

module.exports = router;