const messageEncoded = document.getElementById("grafado");
let copied = false;
messageEncoded.addEventListener("click", async (e) => {
  if(!copied) {
    copied = await copyText(e.target.value);
    copied = handleCopyAnimation(copied);
  }
});

document.getElementById("copy").addEventListener("click", async (e) => {
  if(!copied){
    copied = await copyText(messageEncoded.value);
    copied = handleCopyAnimation(copied);
  }
})

async function copyText(textToCopy) {
  if(!textToCopy) {
    return false;
  }
  await navigator.clipboard.writeText(textToCopy);
  popup("Texto copiado", "success");
  return true;
}

function handleCopyAnimation(wasCopied){
  if(wasCopied) {
    const copyButton = document.getElementById("copy");
    copyButton.innerText = "COPIADO";
    copyButton.style.backgroundColor = "var(--success)";
    setTimeout(()=>{
      copyButton.innerText = "COPIAR TEXTO";
      copyButton.style.backgroundColor = "var(--warning)";
    }, 1000);
  }
  return false;
}