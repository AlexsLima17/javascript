/**
 * Input de Dados via Terminal
 * Uso do pacote read-line-sync
 * @author Alex Lima
 */

//importar o pacote
const input = require('readline-sync')

let nome 

console.clear()

nome = input.question("Digite o seu nome:")
console.log(`Hello ${nome}`)
