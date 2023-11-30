const axios = require('axios');
require('dotenv').config();



const openaiApiKey = process.env.OPENAI_API_KEY

exports.simplifyText = async (text) => {
  if (!openaiApiKey) {
    console.error('OpenAI API key is undefined. Make sure it is set in your environment variables.');
    return;
  }



  try {
    console.log("ENTERED API CALL", prompt)
    const prompt = 
    `Given the following raw text extracted from a PDF, generate a well-structured document with a title, an outline of sections, and a prettified version of the content with correct formatting:\n\n${text}\n\nPlease include the following details in the structured document:\n- Title of the document\n- An outline of the sections\n- A summary or description of the document\n- Prettified text with proper use of bullet points, indentation, and line breaks`;

    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: prompt,
        max_tokens: 1024,
        temperature: 0.5,
        top_p: 1.0,
        stop: ["\n\n"], // You can set this to any delimiter you want to signify the end of a completion
      },
      {
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );


    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error simplifying text:', error);
    throw new Error('Failed to simplify text with OpenAI.');
  }
};
