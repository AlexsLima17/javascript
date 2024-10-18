/**
 * APP - calculadora de saúde
 * @author Alex Lima
 */

// bibliotecas
const input = require('readline-sync')
const colors = require('colors')

// variáveis
let nome, idade, peso, altura, fcm, imc, consumo

// limpar a tela
console.clear()

// banner
console.log(" _______               __ __   __         ______         __              __         __              ")
console.log("|   |   |.-----.---.-.|  |  |_|  |--.    |      |.---.-.|  |.----.--.--.|  |.---.-.|  |_.-----.----.")
console.log("|       ||  -__|  _  ||  |   _|     |    |   ---||  _  ||  ||  __|  |  ||  ||  _  ||   _|  _  |   _|")
console.log("|___|___||_____|___._||__|____|__|__|    |______||___._||__||____|_____||__||___._||____|_____|__|  ")
console.log("")

// entrada de dados
nome = input.question("Digite o seu nome: ")
idade = Number(input.question("Digite a sua idade: "))
peso = Number(input.question("Digite o seu peso em Kg: "))
altura = Number(input.question("Digite a sual altura em metros: "))

// processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)
consumo = peso * 0.035

// saída
console.log("")
console.log("Ficha do aluno")
console.log("_____________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)
// tabela IMC
if (imc < 18.5) {
    console.log("Abaixo do peso".cyan)
} else if (imc < 25) {
    console.log("Peso normal".green)
} else if (imc < 30) {
    console.log("Levemente acima do peso".yellow)
} else if (imc < 35) {
    console.log("Obesidade Grau I".magenta)
} else if (imc < 40) {
    console.log("Obesidade Grau II (severa)".red)
} else {
    console.log("Obesidade Grau III (mórbida)".bgRed)
}
// consumo de água
console.log(`Consumir por dia ${consumo.toFixed(3)} litros de água`)