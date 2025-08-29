const messageEncoded = document.getElementById("grafado");
let copied = false;
messageEncoded.addEventListener("click", handleCopyAnimation);

document.getElementById("copy").addEventListener("click", handleCopyAnimation)

async function copyText(textToCopy) {
  if(!textToCopy) {
    return false;
  }
  await navigator.clipboard.writeText(textToCopy);
  popup("Texto copiado", "success");
  return true;
}

async function handleCopyAnimation(event){
  if(!copied){
    copied = await copyText(messageEncoded.value);
    const copyButton = document.getElementById("copy");
    copyButton.innerText = "COPIADO";
    copyButton.style.backgroundColor = "var(--success)";
    setTimeout(()=>{
      copyButton.innerText = "COPIAR TEXTO";
      copyButton.style.backgroundColor = "var(--warning)";
      copied = false;
    }, 1000);
  }
}