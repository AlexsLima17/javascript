/**
 * APP etanol x gasolina
 * @author Alex Lima
*/

const input = require ('readline-sync')
const colors = require ('colors')

let alcool, gasolina, vantagem
console.clear()
console.log("Calculo mais vantojoso alcool ou gasolina")

// entrada 
// No console entradas (input) numéricas precisam ser convertidas com uso métodos Number()
alcool = Number(input.question("Digite o valor do alcool em R$: "))
gasolina = Number(input.question("Digite o valor da Gasolina em R$: "))

//processamneto 
vantagem = (alcool / gasolina) 
console.log(`vantagem: ${vantagem}`)

if (vantagem < 0.7) {
    console.log("Alcool".bgGreen)
}

if (vantagem >= 0.7) {
    console.log("Gasolina".bgYellow)
}
