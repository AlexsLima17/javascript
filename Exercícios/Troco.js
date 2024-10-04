/**
 * Troco
 * @author Alex Lima
 */

const input = require ("readline-sync")

//variáveis
let valorPago, total, troco

console.clear()
console.log ("Troco")

//entrada
total= Number(input.question("Digite o valor da compra: "))
valorPago = Number(input.question("Digite o valor do pago: "))

//processamento
troco = valorPago - total

//saída
console.log(`Valor do troco: R$ ${troco.toFixed(2)}`)