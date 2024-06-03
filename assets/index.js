let numeros = document.querySelectorAll('.number');
let input = document.querySelector('.input-Guardar');
let btnsAccion = document.querySelectorAll('.signo')
let primerNumero = 0;
let segundoNumero = 0;
let acumulador = 0
let acumuladorMT = 1
let signo = ''
let primeraVez = true;
numeros.forEach((btn) => {
    btn.addEventListener('click', () => {
        input.value += btn.value
    })
})

btnsAccion.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.value == '/' || e.target.value == '+'
            || e.target.value == '-' || e.target.value == '*') {
            primerNumero = parseInt(input.value)

            switch (e.target.value) {
                case '+':
                    acumulador = acumulador + primerNumero
                    break;
                case '-':
                    if (primeraVez) {
                        acumulador = primerNumero - Math.abs(acumulador)
                        primeraVez = false
                    }
                    else if (acumulador >= 0) {
                        acumulador = Math.abs(acumulador) - primerNumero
                    } else {
                        acumulador = acumulador - primerNumero
                    }
                    break;
                case '*':
                    acumuladorMT = acumuladorMT * primerNumero
                    break;
                case '/':
                    if (primeraVez) {
                        acumulador = acumulador + primerNumero;
                        primeraVez = false
                    } else {
                        acumulador = acumulador / primerNumero
                    }
                    break;
            }
            input.value = ''
            signo = e.target.value

            //segunda operacion
        } else if (e.target.value == '=') {
            if (signo == '+') {
                segundoNumero = parseInt(input.value)
                let resultado = acumulador + segundoNumero;
                input.value = resultado

            } else if (signo == '-') {
                segundoNumero = parseInt(input.value)
                let resultado = acumulador - segundoNumero;
                primeraVez = true;
                input.value = resultado

            } else if (signo == '/') {
                segundoNumero = parseInt(input.value)
                let resultado = acumulador / segundoNumero;
                primeraVez = true
                input.value = resultado

            } else if (signo == '*') {
                segundoNumero = parseInt(input.value)
                let resultado = acumuladorMT * segundoNumero;
                input.value = resultado
            }
            acumulador = 0
            acumuladorMT = 1

        }
        else if (e.target.value == 'limpiar') {
            input.value = ''
        }
    })
})
