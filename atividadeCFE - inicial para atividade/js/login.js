document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const errorMessages = document.querySelectorAll("a");
  const loginButton = document.querySelector(".btn");

  loginButton.addEventListener("click", function() {
      // Reseta mensagens de erro
      errorMessages.forEach(function(element) {
          element.textContent = "";
      });

      const email = emailInput.value;
      const password = passwordInput.value;

      if (!email || !password) {
          if (!email) {
              errorMessages[0].textContent = "O campo de e-mail é obrigatório.";
          }
          if (!password) {
              errorMessages[1].textContent = "O campo de senha é obrigatório.";
          }
      } else {
          // Aqui você pode adicionar a lógica de autenticação
          // mostra uma mensagem de sucesso.
          alert("Login bem-sucedido!");
      }
  });
});