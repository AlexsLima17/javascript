/**
 * Fundamentos da POO 
 * Encapsulamento (Segurança)
 * @author Alex lima
 */

console.clear()

class User {
    //atributos
    constructor(login, senha) {
        this.login = login
        //Encapsulamento (O _ "underline" enjula a variavel)
        let _senha = senha
        this.getSenha = () => _senha //leitura
        this.getSenha = (novaSenha) => _senha = novaSenha //escrita
    }
    //método 
    logar() {
        console.log("___________________________________")
        console.log(`Usuário: ${this.login}`)
        console.log(`Senha: ${this.getSenha()}`)
        if (this.login === 'admin' && this.getSenha === '123@senac') {
            console.log("Usuário autenticado")
        } else {
            console.log("Usuário e/ou senha inválido(s)")
        }
    }
}

/***** Sistema *****/
// Criando um novo objeto
const user1 = new User ("admin", "1234")
user1.logar()
user1.senha = "123@senac"
user1.logar()