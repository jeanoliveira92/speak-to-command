# Speak To Command

Este projeto incorpora a biblioteca SpeechRecognition nativa nos navegadores. A principio ela mantem um ouvinte ligado e durante as pausas nas falas transcreve na tela o que foi falado.
Mas também, o principal objetivo deste projeto é receber um comando de voz e gerar um comando Javascript. Abaixo será descrito alguns componentes.

## Tecnologias
* HTML
* CSS
* Javascript
* Biblioteca SpeechRecognition

## Arquivo

`./speech.js`

O arquivo speech.js possui os códigos referentes aos ouvidores e transcritores.

`./funcoes.js`
```javascript
const open = (item) => {
    alert(`OPENING: ${item.join(" ")}`);
}

const close = (item) => {
    alert(`CLOSING: ${item.join(" ")}`);
}

var funcs = {
    open,
    close
}
```

O arquivo funcoes.js possui as funções que são executadas dada uma palavra. As funções são nomeadas por uma constante. Essas constantes são passadas como atributos de um JSON. Esse json é enviado para as funções ouvidoras. A primeira palavra de cada frase dita aciona a função. Por exemplo. "Open Meu diário" a resposta será um box de alerta com o texto "OPENING: Meu diário". 


## Interface
## Ouvindo e gerando comando para abrir uma janela
![](https://github.com/jeanoliveira92/speak-to-command/blob/master/screenshot.jpg?raw=true)

## Ouvindo e Transcrevendo
![](https://github.com/jeanoliveira92/speak-to-command/blob/master/screenshot2.jpg?raw=true)


## Licença
Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE.md] (LICENSE.md) para obter detalhes.
