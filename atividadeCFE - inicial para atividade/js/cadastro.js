// Validação do Registro
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordconfirmation = document.getElementById("passwordconfirmation");

// Adiciona um evento de submit ao formulário
form.addEventListener("submit", (event) => {
  // Previne o comportamento padrão do formulário
  event.preventDefault();

  // Valida o formulário
  checkForm();
});

// Adiciona um evento de blur ao campo de usuário
username.addEventListener("blur", () => {
  // Valida o campo de usuário
  checkInputUsername();
});

// Adiciona um evento de blur ao campo de e-mail
email.addEventListener("blur", () => {
  // Valida o campo de e-mail
  checkInputEmail();
});

// Função que valida o campo de usuário
function checkInputUsername() {
  // Obtém o valor do campo de usuário
  const usernameValue = username.value;

  // Verifica se o campo de usuário está vazio
  if (usernameValue === "") {
    // Exibe uma mensagem de erro no campo de usuário
    errorInput(username, "Campo vazio! Coloque seu nome.");
  } else {
    // Remove a classe de erro do campo de usuário
    const formItem = username.parentElement;
    formItem.className = "form-content";
  }
}

// Função que valida o campo de e-mail
function checkInputEmail() {
  // Obtém o valor do campo de e-mail
  const emailValue = email.value;

  // Verifica se o campo de e-mail está vazio
  if (email.value === "") {
    // Exibe uma mensagem de erro no campo de e-mail
    errorInput(email, "E-mail obrigatório.");
  } else {
    // Remove a classe de erro do campo de e-mail
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}

// Função que valida o formulário
function checkForm() {
  checkInputUsername();
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordconfirmation();
}

// Função que exibe mensagem de erro
function errorInput(input, message) {
  const formItem = input.parentElement;
  const error = formItem.querySelector("a");
  error.textContent = message;
  error.style.visibility = "visible";
}


 

