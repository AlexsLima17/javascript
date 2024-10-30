/**
 * Estudo das Funções com parametros e retorno
 * @author Alex Lima
 */

function somar(a, b) {
    return (console.log(a + b))
}

const somarA = function (a, b) {
    return(console.log(a + b))
}

somarA(5, 3)

const somarAF = (a, b) => {
    return (console.log(a + b))
}

somarAF(2, 2)

//Na função abaixo o retorno e implicito
const somarAFS = (a, b) => console.log(a + b)
somarAFS(3, 9)