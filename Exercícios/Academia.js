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
console.log(`imc: ${imc.toFixed(2)}`)

// tabela IMC
if (imc < 18.5) {
    console.log("Abaixo do peso")
} else if (imc < 25){
    console.log("Peso Normal")
} else if (imc < 30){
    console.log("Levemente Acima do Peso")
} else if (imc < 35){
    console.log("Obesidade Grau 1 ")
}else if (imc < 40){
    console.log("Obesidade Grau 2 (severa) ")
}else (imc > 40){
    console.log("Obesidade Grau 3 (mórbida) ")
}