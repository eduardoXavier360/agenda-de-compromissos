document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        const senhaCorreta = "123456"; // Defina a senha correta
        const senhaDigitada = document.getElementById("senha").value;
        const erroMsg = document.getElementById("erro-msg");
        const titulo = document.getElementById("titulo");

        if (senhaDigitada === senhaCorreta) {
            titulo.textContent = "Bem-vindo, Administrador!"; // Muda o título
            titulo.style.color = "green"; // Deixa o título verde
            erroMsg.style.display = "none"; // Oculta a mensagem de erro
            setTimeout(() => {
                window.location.href = "home.html"; // Redireciona após 2s
            }, 2000);
        } else {
            erroMsg.style.display = "block"; // Exibe mensagem de erro
            document.getElementById("senha").value = ""; // Limpa o campo senha
        }
    });
});
