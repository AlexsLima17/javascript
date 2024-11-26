/**
 * Estruturas de Dados
 * @author Alex Lima
 */

//                  [0]     [1]     [2]     [3]     [4]
let alunosEM1 = ["Tania","Pedro","Maria","João","Viviane"]

console.clear()
console.log(typeof(alunosEM1))
console.log(alunosEM1)
// o comando abaixo identifica o número de elementos de um vetor
console.log(alunosEM1.length)
// o comando abaxio exibe o índice do array associado ao elemento
console.table(alunosEM1)
console.log(alunosEM1[2])
//comando abaixo adiciona um elemento ao vetor
alunosEM1.push("Jorge")
console.log(alunosEM1)
//para alterar um elmento do vetor, é necessário usar o íncide
alunosEM1[3] = "João Pantera"
console.table(alunosEM1)
// o comando abaixo remove o último elemento do vetor
alunosEM1.pop()
console.table(alunosEM1)
//removendo um elemento específico sem alterar o índice, neste caso é necessário fronecer o índice do elemento a ser excluído
delete alunosEM1[1]
console.table(alunosEM1)