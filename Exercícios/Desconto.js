<<<<<<< HEAD
/**
 * Cálculo do valor do desconto 
 * @author Alex Lima
 */

const input = require ("readline-sync")

let totalDesconto, total, desconto

console.clear()
console.log ("Calculo do valor do desconto")

//entrada
total = Number(input.question("Digite o valor da compra: "))
desconto = Number(input.question("Digite o valor do desconto em %: "))

//processamento
totalDesconto = total - ((desconto * total) / 100)

//saída
=======
/**
 * Cálculo do valor do desconto 
 * @author Alex Lima
 */

const input = require ("readline-sync")

let totalDesconto, total, desconto

console.clear()
console.log ("Calculo do valor do desconto")

//entrada
total = Number(input.question("Digite o valor da compra: "))
desconto = Number(input.question("Digite o valor do desconto em %: "))

//processamento
totalDesconto = total - ((desconto * total) / 100)

//saída
>>>>>>> 05e80b74b4449ba31680723058b4b035b248068a
console.log(`total com desconto: ${totalDesconto.toFixed(2)}`)