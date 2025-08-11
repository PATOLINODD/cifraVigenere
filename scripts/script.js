const texto = document.querySelector("#grafar");
const chave = document.getElementById("chave");
const area = document.querySelector("#grafado");
const criptografar = document.querySelector("#criptografar");
const descriptografar = document.querySelector("#descriptografar");

function parseTextNKey(chave, texto) {
  const letras = texto.split(" ").join("").toLowerCase().split("");
  const modelo = repeatKeyUntil(chave, texto);
  return {
    letras: letras,
    modelo: modelo,
  };
}

document.getElementById("criptografar").addEventListener("click", (e) => {
  e.target.classList.toggle("clicked");
  e.target.onanimationend = () => e.target.classList.remove("clicked");
  const isValidForm = validForm(chave, texto);
  if (!isValidForm) return;
  const result = encrypt(chave.value, texto.value);
  area.innerHTML = result;
});

document.getElementById("descriptografar").addEventListener("click", (e) => {
  e.target.classList.toggle("clicked");
  e.target.onanimationend = () => e.target.classList.remove("clicked");
  const isValidForm = validForm(chave, texto);
  if (!isValidForm) return;
  const result = decrypt(chave.value, texto.value);
  area.innerHTML = result;
});

function validForm(chaveEl, textEl) {
  if (
    chaveEl.value &&
    chaveEl.value != "" &&
    textEl.value &&
    textEl.value != ""
  ) {
    return true;
  }
  popup(
    "Verifique se todos os campos estão preenchidos e tente novamente",
    "warn",
  );
  !chaveEl.value
    ? chaveEl.classList.add("outline-danger", "shake-animation")
    : null;
  !textEl.value
    ? textEl.classList.add("outline-danger", "shake-animation")
    : null;

  chaveEl.onanimationend = (e) => {
    e.target.classList.remove("shake-animation");
  };
  textEl.onanimationend = (e) => {
    e.target.classList.remove("shake-animation");
  };
  return false;
}
