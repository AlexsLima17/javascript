/**
 * Estudos das funções simples
 * @author Alex Lima
 */

hello()
// função literal
function hello() {
    console.log("Hello function")
}
console.log(typeof(hello()))

//função atribuida
//função atribuídas precisam ser criadas no início do código (antes da chamda da função)
const hello2 = function() {
    console.log("Hello2 fuction")
}
hello2()
console.log(typeof(hello2))

//Arrow function (forma simplificada de criar função atribuída)
const hello3 = () => {
    console.log("Hello3 function")
}
hello3()
console.log(typeof(hello3))

//Arrow function mais simplificada (neste caso só é possível executar uma linha de código)
const hello4 = _ => console.log("Hello4 function")
