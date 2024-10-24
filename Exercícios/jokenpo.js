/**
 * Jokenpo 
 * @author Alex Lima
 */

//biblioteca
const input = require('readline-sync')

console.clear()
console.log("___JoKenPo___")
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")

//Lógica do Jogador
jogador = Number(input.question("Digite a opcao desejada: "))
console.log("")
switch (jogador) {
    case 1:
        console.log("Jogador escolheu PEDRA")
        break
    case 2:
        console.log("Jogador escolheu PAPEL")
        break
    case 3:
        console.log("Jogador escolheu PEDRA")
        break
    default:
        console.log("Opção inválida")
        break
}

// Lógica do computador

computador = Math.floor(Math.random()* 3 + 1)

switch(computador){
    case 1:
        console.log("COMPUTADOR: PEDRA")
        break
    case 2:
        console.log("COMPUTADOR: PAPEL")
        break
    case 3:
        console.log("COMPUTADOR: PEDRA")
        break
    default:
        console.log("Opção inválida")
        break
}
 
//Lógica para determinar o vencedor ou declara empate

if (jogador === computador){
    console.log("EMPATE")
} else if (jogador === 1 && computador === 3 || jogador === 2 && computador === 1 || jogador === 3 && computador === 2){
    console.log("Jogador VENCEU")
} else {
    console.log("COMPUTADOR VENCEU ")
}
