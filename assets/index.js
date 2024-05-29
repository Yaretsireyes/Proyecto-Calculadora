// variable para guardar el primer numero ingresado.
let primerNumero = 0
// variable para guardar el segundo numero ingresado
let segundoNumero = 0
//variable para declarar un signo y hacer la operacion
let signo = '';

const buttonOne = document.querySelector('.button-one')
const buttonTwo = document.querySelector('.button-two')
const buttonThree = document.querySelector('.button-three')
const signoSuma = document.querySelector('.signo-suma')
const buttonFour = document.querySelector('.button-four')
const buttonFive = document.querySelector('.button-five')
const buttonSix = document.querySelector('.button-six')
const signoMultiplicar = document.querySelector('.signo-multiplicar')
const buttonSeven = document.querySelector('.button-seven')
const buttonEight = document.querySelector('.button-eight')
const buttonNine = document.querySelector('.button-nine')
const signoDivision = document.querySelector('.signo-division')
const buttonZero = document.querySelector('.button-zero')
const buttonEliminar = document.querySelector('.button-eliminar')
const signoIgual = document.querySelector('.signo-igual')
const signoMenos = document.querySelector('.signo-menos')

const input = document.querySelector('.input-Guardar')

buttonOne.addEventListener('click', () => {
    input.value += '1'
})
buttonTwo.addEventListener('click', () => {
    input.value += '2'
})
buttonThree.addEventListener('click', () => {
    input.value += '3'
})

buttonFour.addEventListener('click', () => {
    input.value += '4'
})
buttonFive.addEventListener('click', () => {
    input.value += '5'
})
buttonSix.addEventListener('click', () => {
    input.value += '6'
})

buttonSeven.addEventListener('click', () => {
    input.value += '7'
})
buttonEight.addEventListener('click', () => {
    input.value += '8'
})
buttonNine.addEventListener('click', () => {
    input.value += '9'
})

buttonZero.addEventListener('click', () => {
    input.value += '0'
})
buttonEliminar.addEventListener('click', () => {
    input.value = ''
})
signoSuma.addEventListener('click', () => {
    primerNumero = input.value
    input.value = ''
    console.log(primerNumero)
    signo = '+'
})

signoMultiplicar.addEventListener('click', () => {
    primerNumero = input.value
    input.value = ''
    signo = '*'
})
signoMenos.addEventListener('click', () => {
    primerNumero = input.value
    input.value = ''
    signo = '-'
})
signoDivision.addEventListener('click', () => {
    primerNumero = input.value
    input.value = ''
    signo = '/'
})
signoIgual.addEventListener('click', () => {
    segundoNumero = input.value

    if (signo == '+') {
        resultado = parseInt(primerNumero) + parseInt(segundoNumero)
        input.value = resultado
    }else if (signo == '-') {
        resultado = parseInt(primerNumero) - parseInt(segundoNumero)
        input.value = resultado

    } else if (signo == '*') {
        resultado = parseInt(primerNumero) * parseInt(segundoNumero)
        input.value = resultado

    } else if (signo == '/') {
        resultado = parseInt(primerNumero) / parseInt(segundoNumero)
        input.value = resultado
    }
})



