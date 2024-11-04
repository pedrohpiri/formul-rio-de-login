document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const emailError = document.getElementById("emailError");
    const senhaError = document.getElementById("senhaError");

    // Função para validar o formulário
    function validateForm() {
        let isValid = true;

        // Limpar mensagens de erro anteriores
        emailError.textContent = "";
        senhaError.textContent = "";

        // Validar e-mail
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar e-mail
        if (!emailValue) {
            emailError.textContent = "O e-mail é obrigatório.";
            isValid = false;
        } else if (!emailPattern.test(emailValue)) {
            emailError.textContent = "Por favor, insira um e-mail válido.";
            isValid = false;
        }

        // Validar senha
        const senhaValue = senhaInput.value.trim();
        if (!senhaValue) {
            senhaError.textContent = "A senha é obrigatória.";
            isValid = false;
        } else if (senhaValue.length < 6) {
            senhaError.textContent = "A senha deve ter pelo menos 6 caracteres.";
            isValid = false;
        }

        return isValid;
    }

    // Evento de envio do formulário
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        if (validateForm()) {
            // Aqui você pode enviar os dados para o servidor
            // Exemplo de um pedido de login (simulação)
            console.log("Formulário enviado com sucesso!");
            // Adicione lógica para enviar os dados via AJAX ou Fetch API, se necessário

            // Exibir mensagem de sucesso ou redirecionar o usuário
            alert("Login realizado com sucesso!");
        }
    });
});