/**
 * PDV
 * @author Alex Lima
 */
const input = require('readline-sync')
let total, desconto, troco, totalDesconto, valorDesconto, valorPago
console.clear()

console.log("            _____                   _____               _____          ")
console.log("           /\\    \\                 /\\    \\             /\\    \\   ")
console.log("          /::\\    \\               /::\\    \\           /::\\____\\        ")
console.log("         /::::\\    \\             /::::\\    \\         /:::/    /        ")      
console.log("        /::::::\\    \\           /::::::\\    \\       /:::/    /         ")     
console.log("       /:::/\\:::\\    \\         /:::/\\:::\\    \\     /:::/    /    ")   
console.log("      /:::/__\\:::\\    \\       /:::/  \\:::\\    \\   /:::/____/           ")
console.log("     /::::\\   \\:::\\    \\     /:::/    \\:::\\    \\  |::|    |    ")       
console.log("    /::::::\\   \\:::\\    \\   /:::/    / \\:::\\    \\ |::|    |     _____  ")
console.log("   /:::/\\:::\\   \\:::\\____\\ /:::/    /   \\:::\\ ___\\|::|    |    /\\    \\ ")
console.log("  /:::/  \\:::\\   \\:::|    /:::/____/     \\:::|    |::|    |   /::\\____\ ")
console.log("  \\::/    \\:::\\  /:::|____\\:::\\    \\     /:::|____|::|    |  /:::/    /")
console.log("   \\/_____/\\:::\\/:::/    / \\:::\\    \\   /:::/    /|::|    | /:::/    / ")
console.log("            \\::::::/    /   \\:::\\    \\ /:::/    / |::|____|/:::/    /  ")
console.log("             \\::::/    /     \\:::\\    /:::/    /  |:::::::::::/    /   ")
console.log("              \\::/____/       \\:::\\  /:::/    /   \\::::::::::/____/    ")
console.log("~~                             \\:::\\/:::/    /     ~~~~~~~~~~          ")
console.log("                                \\::::::/    /                          ")
console.log ("                                 \\::::/    /                           ")    
console.log("                                  \\::/____/                            ")
console.log("                                   ~~                                  ")
  
//entrada
total = Number(input.question("Digite o valor total da compra: "))
desconto = Number(input.question("Digite o valor do desconto em %: "))

//processamento
valorDesconto = (desconto * total) / 100

//processamento 2
totalDesconto = total - valorDesconto

//entrada 2
valorPago = Number(input.question("valor em dinheiro pago pelo cliente: "))

//processamento 3
troco = valorPago - totalDesconto

//saída 1
console.log("")
console.log("--------------------------------")
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log(`Desconto: R$ ${desconto}%`)
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`)
console.log(`Total com desconto: R$ ${totalDesconto.toFixed(2)}`)

//entrada 2
valorPago = Number(input.question("valor em dinheiro pago pelo cliente: "))

//processamento 3
troco = valorPago - totalDesconto

//saída 

console.log("")
console.log(`Valor pago em dinheiro: R$ ${valorPago.toFixed(2)}`)
console.log(`troco: R$ ${troco.toFixed(2)}`)
console.log("--------------------------------------------------------")
