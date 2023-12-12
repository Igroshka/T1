const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const { text } = req.body;
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_SECRET}`
        },
        body: JSON.stringify({
            prompt: text,
            max_tokens: 60
        })
    });
    const data = await response.json();
    res.status(200).json({ generatedText: data.choices[0].text });
};
