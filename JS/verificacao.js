function verificacao(chute) {
    const numero = +chute
    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor Inválido</div>
       `
    }

    if (numeroMaiorMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido! O número precisa estar entre ${menor_valor} e ${maior_valor}</div>`
        return
    }



    if (numero === numero_secreto) {
        document.body.innerHTML = `
        <div class="container">
        <h1>Vôce Acertou!!!</h1>
        <h3>O número secreto era:<span class="numero_secreto">${numero_secreto}</span></h3>
        <button id="btn_jogar" class="btn_jogar">Jogar Novamente</button>
        </div>
    </div>
        `
    } else if (numero < numero_secreto) {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-turn-up"></i></div>`
    } else if (numero > numero_secreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-turn-down"></i></div>`
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorMenor(numero) {
    return numero > maior_valor || numero < menor_valor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'btn_jogar'){
        window.location.reload()
    }
})