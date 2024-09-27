/**
 * Sintaxe Básica da linguagem JS
 * @author Alex Lima
 */

//Limpar a tela o console
console.clear()

// JS - Sentença ; opcional
console.log("Hello World")

let nome = "Alex Lima"
let idade = 20 
//ponto é usado para casas decimais
let altura = 1.63

//tyoeof() é usado para indentificar o tipo de variável
console.log(typeof(nome))
console.log(typeof(idade))
console.log(typeof(altura))

// identificando variáveis inteiras e não inteiras
console.log(Number.isInteger(idade))
console.log(Number.isInteger(altura))

// concatenação (unir textos e variáveis)
console.log(`Nome: ${nome}`)
console.log("Nome: " + nome) // não recomendado

// arredondamento (casas decimais)
let media = 5.789
console.log(`Média: ${media.toFixed(1)}`)

// particularides do JS 
console.log(10/0)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log("3" + 2)
console.log("3" - 2)
console.log("3x" - 2)