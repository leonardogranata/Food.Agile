// Função para validar o cadastro
function validarCadastro() {
    // Regex para validar o nome (apenas letras e espaços)
    const nomeRegex = /^[a-zA-Z\s]+$/;
    // Regex para validar o e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Obtém os valores dos campos de entrada
    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Valida o nome
    if (!nomeRegex.test(nome)) {
        alert("Nome inválido. Use apenas letras e espaços."); // Alerta se o nome for inválido
        return false; // Retorna falso se a validação falhar
    }

    // Valida o e-mail
    if (!emailRegex.test(email)) {
        alert("E-mail inválido. Insira um e-mail válido."); // Alerta se o e-mail for inválido
        return false; // Retorna falso se a validação falhar
    }
    return true; // Retorna verdadeiro se todas as validações passarem
}


// Gerar JSON

function gerarJSON() {
    // Selecione o formulário
    let formulario = document.querySelector("#formulario");

    // Adciona um evento de envio ao formulário
    formulario.addEventListener("submit", function (event) {

        // Impede o comportamento padrão do formulário (enviar os dados para o servidor)
        event.preventDefault();

        // Cria um objeto para armazenar os dados do formulário
        let dados = {};

        // Adiciona os valores dos campos do formulário ao objeto
        dados.nome = document.querySelector("#name").value;
        dados.email = document.querySelector("#email").value;
        

        dados.observacoes = document.querySelector("#observacoes").value;

        // Converte o objeto em uma string JSON
        let dadosJSON = JSON.stringify(dados);
        
        // Exibe a string JSON na tela (apenas para fins de demonstração)
        alert(dadosJSON);
    });
}
