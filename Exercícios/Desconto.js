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
console.log(`total com desconto: ${totalDesconto.toFixed(2)}`)