/**
 * Cálculo de média aritmética de 3 valores
 * @author Alex Lima
 */

// importa a biblioteca read-linesync
const input = require('readline-sync')

// variáveis
let num1, num2, num3, media
console.clear()
console.log("Calculo da media aritmetica de 3 números")

// entrada 
// No console entradas (input) numéricas precisam ser convertidas com uso métodos Number()
num1 = Number(input.question("Digite o primeiro numero: "))
num2 = Number(input.question("Digite o segundo numero: "))
num3 = Number(input.question("Digite o terceiro numero: "))

//processamneto 
media = (num1 + num2 + num3) /3

//saída
console.log(`Media: ${media.toFixed(1)}`)