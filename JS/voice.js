const elementoChute = document.getElementById('chute')



window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)



function onSpeak(e) {
    chute = e.results[0][0].transcript
    console.log(chute)
    exibe_chute(chute)    
    verificacao(chute)
}

function exibe_chute(chute){
    elementoChute.innerHTML = `
    <div>Vôce disse:</div>
    <span class="box">${chute}</span>`
}

recognition.addEventListener('end', () => recognition.start())


