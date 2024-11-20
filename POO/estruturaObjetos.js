/**
 * Estrutura de dados - objetos
 * @author Alex Lima
 */

console.clear()

const funcionario1 = {}
console.log(typeof (funcionario1))
// adicionar dados a estrutura
funcionario1.nome = "Alex"
funcionario1.cargo = "Técnico"
funcionario1.email = "alexotaz2702@gmail.com"
funcionario1.salario = "EU quero salário"
funcionario1.insta = "@oaleeek"
console.log(funcionario1)
// listar os dados a estrutura 
console.log(funcionario1)
console.log(funcionario1.cargo)
// modificar os dados da estrutrura
funcionario1.nome = "Alex Lima"
console.log(funcionario1)
// excluir dados da estrutura
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: "Bruce Wayne",
    cargo: "CEO",
    email: "batman@gmail.com",
    salario: 400000
}
console.log(funcionario2)
const endereco1 = {
    logradouro: "Bat Caverna",
    cidade: "Gothan City",
    estado: "Nova Jersey"
}

console.log(endereco1)

//spread operator (união de 2 estruturas de dados)
const funcionario3 = {
    nome: "Alfred pennywort",
    cargo: "Mordomo",
    email: "alfred@gmail.com",
    salario: 20000,
    ...endereco1
}

console.log(funcionario3)

const funcionario4 = {
    nome: "Dick Grayson",
    cargo: "Acrobata",
    email: "robin@gmail.com",
    salario: "21300"
}

console.log(funcionario4)

const funcionario5 = {
    nome: "Tony Stark",
    cargo: "Engenheiro",
    email: "ironman@gmail.com",
    salario: 375000,
    armadura: {
        versao: "mark II",
        ano: 2010,
        reator: "Arc 01"
    },
    suitUp: () => {
        console.log("🕹️")
    }

}

console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.armadura.versao)
funcionario5.suitUp() //executar a função interna da estrutura