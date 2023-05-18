// Declarando variáveis

const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("CFpassword");

const toggle = document.getElementById("btnDarkMode");
const body = document.querySelector("body");

let lblName = document.querySelector("#lblName");
let lblSurname = document.querySelector("#lblSurname");
let lblEmail = document.querySelector("#lblEmail");
let lblPass = document.querySelector("#lblPass");
let lblCFpass = document.querySelector("#lblCFpass");

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

validName = false;
validSurname = false;
validEmail = false;
validPassword = false;
validConf = false;

// Fazendo o evento de validação de nome. Está dentro de uma estrutura 'if' pois o código estava dando erro de carregamento e esse foi o jeito que encontrei para resolver.

if (firstName) {
  firstName.addEventListener("keyup", () => {
    if (firstName.value.length <= 4) {
      lblName.setAttribute("style", "color: red");
      lblName.innerHTML = "Insira no mínimo 5 caracteres";

      firstName.setAttribute("style", "border-color: red");
      validName = false;
    } else {
      lblName.setAttribute("style", "color: green");
      lblName.innerHTML = "Primeiro nome";
      firstName.setAttribute("style", "border-color: green");
      validName = true;
    }
  });
}

// Fazendo evento de validação de sobrenome

surname.addEventListener("keyup", () => {
  if (surname.value.length <= 4) {
    lblSurname.setAttribute("style", "color: red");
    lblSurname.innerHTML = "Insira no mínimo 5 caracteres";

    surname.setAttribute("style", "border-color: red");
    validSurname = false;
  } else {
    lblSurname.setAttribute("style", "color: green");
    lblSurname.innerHTML = "Segundo nome";
    surname.setAttribute("style", "border-color: green");
    validSurname = true;
  }
});

// Evento validar e-mail

email.addEventListener("keyup", () => {
  const emailValue = email.value.trim();

  if (email.value.length <= 4) {
    lblEmail.setAttribute("style", "color: red");
    lblEmail.innerHTML = "Insira um email válido.";

    email.setAttribute("style", "border-color: red");
    validEmail = false;
  } else if (!validarEmail(emailValue)) {
    lblEmail.style.color = "red";
    lblEmail.innetHTML = "Insira um email válido.";
    email.style.borderColor = "red";
    validEmail = false;
  } else {
    lblEmail.setAttribute("style", "color: green");
    lblEmail.innerHTML = "E-mail";
    email.setAttribute("style", "border-color: green");
    validEmail = true;
  }
});

// evento confirmação de senha, aqui chamo funções que declaro logo após.

password.addEventListener("keyup", () => {
  validarSenha();
});

confirmPass.addEventListener("keyup", () => {
  validarSenha();
});

// verifica se o dark-mode está ativado

function ModoEscuroAtivo() {
  return localStorage.getItem("modoEscuro") === "true";
}

// ativa o dark-mode

function atvModoEscuro() {
  body.classList.add("dark-mode");
  btnDarkMode.textContent = "Modo claro \u{01f506}";
  localStorage.setItem("modoEscuro", "true");
}

// desativa o dark-mode

function dstvModoEscuro() {
  body.classList.remove("dark-mode");
  btnDarkMode.textContent = "Modo escuro \u{01f313}";
  localStorage.setItem("modoEscuro", "false");
}

// verifica a preferência do usuário e aplica o modo escuro, se necessário

function verificarPreferenciaModoEscuro() {
  if (ModoEscuroAtivo()) {
    atvModoEscuro();
  } else {
    dstvModoEscuro();
  }
}

// função para alternar o modo escuro ao clicar no botão

toggle.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    dstvModoEscuro();
  } else {
    atvModoEscuro();
  }
});

// ao carregar a página, verifica a preferência do usuário e aplica o modo escuro, se necessário

window.addEventListener("load", verificarPreferenciaModoEscuro);

// função valida se email foi digitado corretamente

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// função valida se senha foi digitada corretamente de acordo com as preferencias passadas pelo professor.

function validarSenha() {
  if (password.value !== confirmPass.value || confirmPass.value === "") {
    lblCFpass.style.color = "red";
    lblCFpass.innerHTML = "As senhas não conferem";
    confirmPass.style.borderColor = "red";
    validConf = false;
  } else {
    lblCFpass.style.color = "green";
    lblCFpass.innerHTML = "Confirmar senha";
    confirmPass.style.borderColor = "green";
    validConf = true;
  }

  if (password.value.length < 6) {
    lblPass.style.color = "red";
    lblPass.innerHTML = "Insira no mínimo 6 caracteres";
    password.style.borderColor = "red";
    validPassword = false;
  } else if (password.value.length > 8) {
    lblPass.style.color = "red";
    lblPass.innerHTML = "Insira no máximo 8 caracteres";
    password.style.borderColor = "red";
    validPassword = false;
  } else {
    lblPass.style.color = "green";
    lblPass.innerHTML = "Senha";
    password.style.borderColor = "green";
    validPassword = true;
  }
}

// Função valida se todos os dados do formulário foram digitados corretamente antes de retornar mensagem de sucesso ou erro.

function cadastrar() {
  if (validName && validSurname && validEmail && validPassword && validConf) {
    msgSuccess.setAttribute("style", "display: block");
    msgSuccess.innerHTML = "<strong>Usuário cadastrado :)</strong>";
    msgError.setAttribute("style", "display: none");
    msgError.innerHTML = "";
  } else {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML =
      "<strong>Preencha todos os campos corretamente antes de cadastrar</strong>";
    msgSuccess.innerHTML = "";
    msgSuccess.setAttribute("style", "display: none");
  }
}

// evento que chama a função cadastrar quando o usuário clica no botão de submit.

document.getElementById("submit").addEventListener("click", cadastrar);
