/**
 *  calculo de real para dólar 
 * @author Alex Lima & Kevin Teodoro
 */


// importa a biblioteca read-linesync
const input = require('readline-sync')

// variáveis
let Real, Taxa, Dolar
console.clear()
console.log("Calculo do Real para Dolar")

// entrada 
// No console entradas (input) numéricas precisam ser convertidas com uso métodos Number()
Real = Number(input.question("Digite o valor em real: "))
Taxa = Number(input.question("Digite o valor da taxa de cambio: "))


//processamneto 
Dolar = (Real / Taxa )

//saída
console.log(`Dolar: ${Dolar.toFixed(1)}`)





