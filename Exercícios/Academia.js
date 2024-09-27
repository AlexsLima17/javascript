/**
 * Ficha de um aluno na academia
 *  @author Alex Lima
 */

// variáveis 
let nome 
let idade
let peso
let altura
let vip    
let imc

console.clear()
nome = "Alex Lima"
idade = 20
peso = 51
altura = 1.71
vip = true

//processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)


console.log("Ficha do aluno")
console.log("___________________________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`FCM: ${fcm}`)
console.log(`imc: ${imc}`)
