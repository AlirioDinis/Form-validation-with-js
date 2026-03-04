const form = document.getElementById("formulario");

const email = document.getElementById("email");
const pais = document.getElementById("pais");
const cep = document.getElementById("cep");
const senha = document.getElementById("senha");
const confirmaSenha = document.getElementById("confirmaSenha");

const erroEmail = document.getElementById("erroEmail");
const erroPais = document.getElementById("erroPais");
const erroCep = document.getElementById("erroCep");
const erroSenha = document.getElementById("erroSenha");
const erroConfirma = document.getElementById("erroConfirma");

form.addEventListener("submit", (e) => {
  let valido = true;

  // Email
  if (!email.validity.valid) {
    erroEmail.textContent = "Digite um email válido.";
    valido = false;
  } else {
    erroEmail.textContent = "";
  }

  // País
  if (!pais.value.trim()) {
    erroPais.textContent = "O país deve ser preenchido.";
    valido = false;
  } else {
    erroPais.textContent = "";
  }

  // CEP
  const cepRegex = /^\d{5}-?\d{3}$/;
  if (!cepRegex.test(cep.value)) {
    erroCep.textContent = "Digite um CEP válido (ex: 12345-678).";
    valido = false;
  } else {
    erroCep.textContent = "";
  }

  // Senha
  if (senha.value.length < 6) {
    erroSenha.textContent = "A senha deve ter pelo menos 6 caracteres.";
    valido = false;
  } else {
    erroSenha.textContent = "";
  }

  // Confirmação
  if (senha.value !== confirmaSenha.value) {
    erroConfirma.textContent = "As senhas não coincidem.";
    valido = false;
  } else {
    erroConfirma.textContent = "";
  }

  if (!valido) {
    e.preventDefault(); // impede envio se houver erros
  }
});
