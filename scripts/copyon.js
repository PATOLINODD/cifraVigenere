const messageEl = document.getElementById("message");
document.querySelector("#grafado").addEventListener("click", async (e) => {
  e.target.select();
  if (e.target.value) {
    await navigator.clipboard.writeText(e.target.value);
    popup("Texto copiado", "success");
  }
});
