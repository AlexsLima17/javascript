/**
 * exemplo de uso da estrutura switch
 * @author Alex Lima
 */

const input = require('readline-sync')

let opcao

console.clear()
console.log("BOOT")
console.log("1. Carregar o sistema do windows")
console.log("2. Carregar o sistema do linux")

opcao = Number(input.question("Digite a opcao desejada: "))

switch (opcao) {
    case 1:
        console.clear()
        console.log("Carregando o sistema Windows....")
        break
    case 2:
        console.clear()
        console.log("")
        break
    default:
        console.log("Opção inválida")
}