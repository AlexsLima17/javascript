/**
 * Uso de async -await (sintaxe moderna do JS para lidar com asssincronismo)
 * @author Alex Lima
*/

//biblioteca nativa do JS para trabalhar com arquivos
const fs = require('fs')

function criarArquivo() {
    let conteudo = "Alex Lima\nExemplo de uso dos novos recursos de assincronismo no JS (async - await)"
    gravarArquivo("teste.txt", conteudo)
}

async function gravarArquivo(path, conteudo) {
    try {
        await fs.promises.writeFile(path, conteudo)
        console.log("Arquivo gravado com sucesso.")
     } catch (error) {
        console.log(error)
    }
}

console.clear()
criarArquivo()
