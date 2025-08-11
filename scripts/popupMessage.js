let body = null;
let popupEl = null;

const animationsPopup = {
  fadeIn: "fade-in",
  fadeOut: "fade-out",
};

document.addEventListener("DOMContentLoaded", () => {
  body = document.querySelector("body");
  popupEl = document.createElement("div");
  popupEl.classList.add("popup", "flex-col-reverse");
  body.appendChild(popupEl);
});

function popup(message, category) {
  const content = document.createElement("div");
  content.onanimationend = onAnimationEnd;

  content.classList.add("toast-message", category);

  const nodeText = document.createTextNode(message);
  content.appendChild(nodeText);
  popupEl.appendChild(content);
}

function onAnimationEnd(content) {
  if (content.animationName === animationsPopup.fadeOut) {
    content.target.remove();
    return;
  }
  setTimeout(() => {
    content.target.classList.remove(animationsPopup.fadeIn);
    content.target.classList.add("fade-out");
  }, 2000);
}
