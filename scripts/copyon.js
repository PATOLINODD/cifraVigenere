const messageEncoded = document.getElementById("grafado");
let copied = false;
messageEncoded.addEventListener("click", async (e) => {
  if(!copied) {
    copied = await copyText(e.target.value);

    if(copied){
      document.getElementById("copy").innerText = "COPIADO";
      setTimeout(()=>{
        document.getElementById("copy").innerText = "COPIAR TEXTO";
        copied = false;
      }, 1000);
    }
  }
});

document.getElementById("copy").addEventListener("click", async (e) => {
  if(!copied){
    copied = await copyText(messageEncoded.value);
    
    if(copied){
      e.target.innerText = "COPIADO";
      setTimeout(()=>{
        e.target.innerText = "COPIAR TEXTO";
        copied = false;
      }, 1000);
    }
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