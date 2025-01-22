/**
 * Ano Automático
 * @author Alex Lima
 */

//Inserindo o ano na tag <span>
let ano = document.getElementById('copyrightYear')
let anoAtual = new Date().getFullYear()
ano.innerHTML = anoAtual