
function enviarMensaje() {

    // YOUR_OPENAI_API_KEY
    //#region
    const api_key= '';
    //#endregion
    const promptText = document.getElementById('mensaje-user').value;
    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${api_key}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    role: "system",
                    content: promptText,            
                },
                {
                    role: "user",
                    content: "Tu eres una asistente muy amable que responde preguntas de manera concisa y al final de la respuesta siempre añade: Me encanta ayudarte 😊",            
                },
            ], 
            "temperature": 0,
            "max_tokens":500
        })
    }).then((response) => {
        if (response.ok) {
            response.json().then((data) => {
                document.getElementsByClassName('respuesta-mensaje')[0].innerText = data.choices[0].message.content;
            });
        }
    });
}