const messageEncoded = document.getElementById("grafado");
messageEncoded.addEventListener("click", async (e) => {
  await copyText(e.target.value);
});

document.getElementById("copy").addEventListener("click", async (e) => {
  copyText(messageEncoded.value);
})

async function copyText(textToCopy) {
  if(!textToCopy) {
    popup("Não existe texto para ser copiado!", "warn");
    return;
  }
  await navigator.clipboard.writeText(textToCopy);
  popup("Texto copiado", "success");
}