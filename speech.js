// VERIFICA A EXITENCIA DO RECONHECEDOR DE VOZ
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;

// ANALISA SE HÁ SUPORTE PARA RECONHECIMENTO DE VOZ  
if (window.SpeechRecognition) {
    document.getElementById("message").innerHTML = "Ouvindo<span>.</span><span>.</span><span>.</span> ";
} else {
    document.getElementById("message").innerHTML = "API not supported";
}

var recognizer = new window.SpeechRecognition();
recognizer.lang = 'pt-BR'; // TAMBEM RECONHECE INGLES
//recognizer.lang = 'en-US';

// DEIXE O OUVINTE ESCUTANDO ATÉ A PAGINA SER FECHADA
recognizer.continuous = true;

recognizer.onresult = event => {
    let txt = document.createElement("p");
    txt.className = "txt";

    // DESESTRUTURAÇÃO
    let { resultIndex, results } = event;

    for (var i = resultIndex; i < results.length; i++) {
        if (results[i].isFinal) {
            txt.textContent = `${results[i][0].transcript} (Taxa de acerto: ${results[i][0].confidence})`;

            var comando = results[i][0].transcript.split(" ");
            // PROCURA A PALAVRA DITA NA LISTA DE FUNÇÕESE EXECUTA
            for (i in funcs)
                if (i.toLowerCase() == comando[0].toLowerCase())
                    funcs[i](comando.splice(1, comando.length));

        } else {
            txt.textContent += results[i][0].transcript;
        }
    }

    document.getElementById("txt").appendChild(txt);
}

try {
    recognizer.start();
} catch (ex) {
    alert("error: " + ex.message);
}