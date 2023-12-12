document.getElementById('generateBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    fetch('/api/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: inputText })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('outputText').innerText = data.generatedText;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
