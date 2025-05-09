// Matrix effect background (visuale "hacker")
const matrixEffect = document.querySelector(".matrix-effect");
const chars = "01";
let matrix = "";

for (let i = 0; i < 300; i++) {
  matrix += chars[Math.floor(Math.random() * chars.length)];
}

matrixEffect.innerText = matrix;
matrixEffect.style.position = "absolute";
matrixEffect.style.bottom = "0";
matrixEffect.style.left = "0";
matrixEffect.style.opacity = "0.05";
matrixEffect.style.fontSize = "5vw";
matrixEffect.style.pointerEvents = "none";
matrixEffect.style.zIndex = "0";

// Optional: Glitch animation (solo CSS, ma JS può rafforzarla se vuoi)

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.createElement("div");
  loader.id = "loader";
  loader.style.position = "fixed";
  loader.style.top = "0";
  loader.style.left = "0";
  loader.style.width = "100%";
  loader.style.height = "100%";
  loader.style.background = "#0b0c10";
  loader.style.display = "flex";
  loader.style.alignItems = "center";
  loader.style.justifyContent = "center";
  loader.style.zIndex = "1000";
  loader.innerHTML = "<h1 style='color: #66fcf1;'>Caricamento...</h1>";
  document.body.appendChild(loader);

  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});
