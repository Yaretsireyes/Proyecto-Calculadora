let numeros = document.querySelectorAll('.number');
let input = document.querySelector('.input-Guardar');
let btnsAccion = document.querySelectorAll('.signo')
let clear = document.querySelector('.clear')
let primerNumero = 0;
let segundoNumero = 0;
let acumulador = 0
let signo = ''
let primeraVez = true;
numeros.forEach((btn) => {
    btn.addEventListener('click', () => {
        input.value += btn.value
    })
})
const suma = () => {
    acumulador = acumulador + primerNumero
}
const resta = () => {
    if (primeraVez) {
        acumulador = primerNumero - Math.abs(acumulador)
        primeraVez = false
    }
    else if (acumulador >= 0) {
        acumulador = Math.abs(acumulador) - primerNumero
    } else {
        acumulador = acumulador - primerNumero
    }
}
const multiplicacion = () => {
    if (acumulador == 0) {
        acumulador = 1
        acumulador = acumulador * primerNumero
    } else {
        acumulador = acumulador * primerNumero
    }
}
const division = () => {
    if (acumulador == 0) {
        acumulador = primerNumero;
    } else {
        acumulador = acumulador / primerNumero
    }
}
const igual = () => {
    if (signo == '+') {
        segundoNumero = parseInt(input.value)
        acumulador = acumulador + segundoNumero;
        input.value = acumulador

    } else if (signo == '-') {
        segundoNumero = parseInt(input.value)
        acumulador = acumulador - segundoNumero;
        input.value = acumulador
        primeraVez = true;


    } else if (signo == '/') {
        segundoNumero = parseInt(input.value)
        acumulador = acumulador / segundoNumero;
        input.value = acumulador
        primeraVez = true


    } else if (signo == '*') {
        segundoNumero = parseInt(input.value)
        acumulador = acumulador * segundoNumero;
        input.value = acumulador
    }
}
btnsAccion.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (input.value == '') {
            alert('INGRESE UN NUMERO')
        }
        else if (e.target.value != '=') {

            primerNumero = parseInt(input.value)

            switch (e.target.value) {
                case '+':

                    if (signo != '') {
                        igual()
                    } else {
                        suma()
                    }
                    break;
                case '-':
                    if (signo != '') {
                        igual()
                    } else {
                        resta()
                    }
                    break;
                case '*':
                    if (signo != '') {
                        igual()
                    } else {
                        multiplicacion()
                    }

                    break;
                case '/':
                    if (signo != '') {
                        igual()
                    } else {
                        division()
                    }
                    break;
            }
            input.value = ''
            signo = e.target.value

        } else {
            igual()
            acumulador = 0
            signo = ''
        }
    })
})

clear.addEventListener('click', () => {
    input.value = ''
    primerNumero = 0;
    segundoNumero = 0;
    acumulador = 0
    signo = ''
    primeraVez = true;
})