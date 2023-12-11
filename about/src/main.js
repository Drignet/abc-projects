const mobileBtn = document.querySelector(".mobile-button");
const navMobile = document.querySelector(".ul-nav");

const form = document.querySelector('form');
const submitBtn = document.querySelector('#btn')

mobileBtn.addEventListener("click", () => {
  navMobile.classList.toggle('mobile-menu-active')
})

const paragraphs = document.querySelectorAll('.about-right-bottom p');

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.5 });

paragraphs.forEach(paragraph => {
    observer.observe(paragraph);
});
