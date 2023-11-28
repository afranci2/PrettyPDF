const axios = require('axios');
const { openaiApiKey } = require('../config');

exports.simplifyText = async (text) => {
  const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
    prompt: `Simplify and structure the following text into sections:\n\n${text}`,
    max_tokens: 1024,
  }, {
    headers: {
      'Authorization': `Bearer ${openaiApiKey}`,
    },
  });

  return response.data.choices[0].text;
};



