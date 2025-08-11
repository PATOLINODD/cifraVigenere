texto.addEventListener("input", (e) => {
  if (!e.target.value || e.target.value == "") {
    e.target.classList.add("outline-danger");
    e.target.classList.remove("outline");
    return;
  }
  e.target.classList.remove("outline-danger");
  e.target.classList.add("outline");
});

chave.addEventListener("input", (e) => {
  if (!e.target.value || e.target.value == "") {
    e.target.classList.add("outline-danger");
    e.target.classList.remove("outline");
    return;
  }
  e.target.classList.remove("outline-danger");
  e.target.classList.add("outline");
});
