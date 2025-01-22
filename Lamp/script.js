/**
 * Evento de intervalo
 * @author Alex Lima
 */

function piscar() {
    let ligada = false 
    // Função nativa do JS para gerar intervalos
    // 1000 (1000ms = 1s)
    setInterval(()=> {
        if (ligada === false) {
            document.getElementById('lamp').src = "img/on.jpg"
        }else {
            document.getElementById('lamp').src = "img/off.jpg"
        }
        ligada = !ligada //NOT
    }),10000
}