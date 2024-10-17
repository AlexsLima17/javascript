/**
 * Obrigatoriedade de voto
 * @author Alex Lima
 */

const input = require ("readline-sync")

let idade;

console.clear()
console.log("Verificar obrigatoriedade de voto")

idade = Number(input.question("Digite a idade: "))

console.log(`Idade: ${idade}`)

if (idade < 16) {
    console.log("Proibido votar")
} else if (idade >= 16 && idade < 18 || idade > 70) {
    console.log("Voto facultativo")
} else {
    console.log("Voto obrigatório")

}
