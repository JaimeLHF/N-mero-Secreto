

const menor_valor = 1
const maior_valor = 100

const numero_secreto = gerarNumveroAleatorio()

function gerarNumveroAleatorio() {
    return parseInt(Math.random() * maior_valor + 1)
}
console.log(numero_secreto)
const elemento_menor_valor = document.getElementById('menor_valor')
elemento_menor_valor.innerHTML = menor_valor

const elemento_maior_valor = document.getElementById('maior_valor')
elemento_maior_valor.innerHTML = maior_valor

const input_number = document.getElementById('input_number')

