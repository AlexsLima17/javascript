function buscarEndereco() {
    let cep = document.getElementById('cep').value
    let urlAPI = `https://viacep.com.br/ws/${cep}/json/`

    fetch(urlAPI)
        .then(response => response.json())
        .then(dados => {
            document.getElementById('logradouro').value = dados.logradouro
            document.getElementById('bairro').value = dados.bairro
            document.getElementById('cidade').value = dados.localidade
            document.getElementById('uf').value = dados.uf;
        })
        .catch(error => console.error('Erro ao buscar o endereço:', error));
}

function validarEmail(email) {
    // Regex atualizado para validar corretamente domínios com .com e outras extensões
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(email);
}

// Exibir erro ao lado do campo de e-mail em tempo real
document.getElementById("email").addEventListener("input", function () {
    let email = this.value.trim();
    let emailErro = document.getElementById("email-erro");

    if (!validarEmail(email)) {
        emailErro.textContent = "⚠️ E-mail inválido! Exemplo: usuario@email.com";
        emailErro.style.color = "red";
    } else {
        emailErro.textContent = "";
    }
});

function validarFormulario() {
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let cep = document.getElementById("cep").value.trim();
    let logradouro = document.getElementById("logradouro").value.trim();
    let bairro = document.getElementById("bairro").value.trim();
    let cidade = document.getElementById("cidade").value.trim();
    let uf = document.getElementById("uf").value.trim();

    let mensagemErro = "";

    if (!nome || !email || !telefone || !cep || !logradouro || !bairro || !cidade || !uf) {
        mensagemErro += "⚠️ Preencha todos os campos obrigatórios!<br>";
    }

    if (!validarEmail(email)) {
        mensagemErro += "⚠️ E-mail inválido! Verifique se está correto.<br>";
    }

    if (mensagemErro) {
        document.getElementById("error-message").innerHTML = mensagemErro;
        document.getElementById("error-message").style.display = "block";
        return false;
    }

    return true;
}

document.getElementById("form-cadastro").addEventListener("submit", function (event) {
    event.preventDefault();

    if (validarFormulario()) {
        alert("Cadastro realizado com sucesso! 🎉");
        this.submit();
    }
});
