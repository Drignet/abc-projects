const colors = [
  "#FFFFFF",
  "#FFB6C1",
  "#FFDAB9",
  "#E6E6FA",
  "#D3D3D3",
  "#F5F5DC",
  "#FFFDD0",
  "#ADD8E6",
  "#87CEEB",
  "#98FB98",
  "#FF7F50",
  "#FA8072",
  "#FFD700",
  "#FFFF00"
];

const caption = document.querySelector(".caption");

setInterval(() => {
  const randomColors = Math.floor(Math.random() * colors.length)
  caption.style.color = colors[randomColors];
}, 2000);