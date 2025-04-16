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
