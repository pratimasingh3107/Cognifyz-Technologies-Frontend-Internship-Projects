const btn = document.getElementById("colorBtn");

// Array of colors to cycle through
const colors = ["#4a148c", "#ff5722", "#388e3c", "#1976d2", "#ffb300"];
let index = 0;

btn.addEventListener("click", () => {
    index = (index + 1) % colors.length; // cycle colors
    btn.style.backgroundColor = colors[index];
});
