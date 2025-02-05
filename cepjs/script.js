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
}// Função para formatar o CPF enquanto o usuário digita
function formatarCPF(campo) {
    let cpf = campo.value.replace(/\D/g, ""); // Remove tudo que não for número
    if (cpf.length > 3) cpf = cpf.substring(0, 3) + "." + cpf.substring(3);
    if (cpf.length > 7) cpf = cpf.substring(0, 7) + "." + cpf.substring(7);
    if (cpf.length > 11) cpf = cpf.substring(0, 11) + "-" + cpf.substring(11, 13);
    campo.value = cpf;
}

// Função para validar CPF
function validarCPF() {
    let cpf = document.getElementById("cpf").value.replace(/\D/g, ""); // Remove pontos e traço
    let erroSpan = document.getElementById("cpfErro");

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        erroSpan.innerText = "CPF inválido!";
        return false;
    }

    let soma = 0, resto;
    
    // Validação do primeiro dígito
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i - 1]) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[9])) {
        erroSpan.innerText = "CPF inválido!";
        return false;
    }

    // Validação do segundo dígito
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i - 1]) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[10])) {
        erroSpan.innerText = "CPF inválido!";
        return false;
    }

    erroSpan.innerText = ""; // Limpa erro se CPF for válido
    return true;
}
