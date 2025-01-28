/**
 * Uso do color-scheme para modificar o tema (claro-escuro)
 * Uso do "mode" para armazenamento no storage do browser
 * @author Alex Lima
 */

const html = document.querySelector('html')
// Uso do banco de dados do navegador
const tema = localStorage.getItem("mode")

// Capturar e implementar a preferência di usuário (light ou dark)
if (tema === "light"){
    light()
}
if (tema === "dark"){
    dark()
}


function light() {
    html.style.setProperty("color-scheme", "light")
    localStorage.setItem("tema", "light")
}

function dark() {
    html.style.setProperty("color-scheme", "dark")
    localStorage.setItem("tema", "dark")
}

function auto() {
    html.style.setProperty("color-scheme", "auto dark")
    localStorage.removeItem("tema", "auto")
}
