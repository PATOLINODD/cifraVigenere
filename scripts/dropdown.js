const dropdown = document.querySelector(".dropdown-info");
dropdown.onanimationend = (e) => {
  if(e.animationName === "disapearing") {
    e.target.classList.remove("disapearing");
    e.target.classList.remove("showing-in");
  }
}

document.getElementById("open").addEventListener("click", (e) => {
  dropdown.classList.add("showing-in");
})

document.getElementById("close").addEventListener("click", (e) => {
  dropdown.classList.remove("showing-in");
  dropdown.classList.add("disapearing");
})