const mobileBtn = document.querySelector(".mobile-button");
const navMobile = document.querySelector(".ul-nav");

mobileBtn.addEventListener("click", () => {
  navMobile.classList.toggle('mobile-menu-active')
})