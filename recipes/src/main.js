const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet"
];

const caption = document.querySelector(".caption");

setInterval(() => {
  const randomColors = Math.floor(Math.random() * colors.length)
  caption.style.color = colors[randomColors];
}, 2000);