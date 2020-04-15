// Cálculo de IMC

const nome = 'Julio'
const peso = 80
const altura = 1.80

const imc = peso / (altura * altura)

let message = ""

if (imc >=30){
    message = `${nome} você está acima do peso`
} else {
    message = `${nome} você não estáacima do peso`
}

console.log(message)
