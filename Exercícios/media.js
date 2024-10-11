/**
 * Calculando Média
 * @author Alex Lima
*/

const input = require ('readline-sync')
const colors = require ('colors')

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

console.log(`media: ${media}`)

if (media < 5) {
    console.log("Reprovado".bgRed)
}

if (media >= 5) {
    console.log("Aprovado".bgGreen)
}
