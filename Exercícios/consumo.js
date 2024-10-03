<<<<<<< HEAD
/**
 * Cálculo do consumo de combustível
 * @author Alex Lima
 */
const input = require ('readline-sync')

// variáveis
let distancia, litros, consumo

console.clear()
console.log("Cálculo do consumo de Combustível")

// entrada
distancia = Number (input.question("Digite a distancia em km: "))
litros = Number (input.question("Quantidade de litros do combustivel : "))

// processamento 
consumo = (distancia / litros)

// saída
console.log(`consumo do veiculo: ${consumo.toFixed(1)} km/l`)
=======
/**
 * Cálculo do consumo de combustível
 * @author Alex Lima
 */
const input = require ('readline-sync')

// variáveis
let distancia, litros, consumo

console.clear()
console.log("Cálculo do consumo de Combustível")

// entrada
distancia = Number (input.question("Digite a distancia em km: "))
litros = Number (input.question("Quantidade de litros do combustivel : "))

// processamento 
consumo = (distancia / litros)

// saída
console.log(`consumo do veiculo: ${consumo.toFixed(1)} km/l`)
>>>>>>> 05e80b74b4449ba31680723058b4b035b248068a
