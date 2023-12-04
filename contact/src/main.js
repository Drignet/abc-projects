const mobileBtn = document.querySelector(".mobile-button");
const navMobile = document.querySelector(".ul-nav");

const form = document.querySelector('form');
const submitBtn = document.querySelector('#btn')

mobileBtn.addEventListener("click", () => {
  navMobile.classList.toggle('mobile-menu-active')
})

let user;
btn.addEventListener('click', () => {
    let name = form.children[0].value
    let number = form.children[1].value
    let address = form.children[2].value
    let quantity = form.children[3].value
    let enquiry = form.children[4].value
    
    if (name === "" || number === "" || address === "" || quantity === "") {
        event.preventDefault();
        alert("Please fill in all the required fields.");
    }else{
      alert("Order submited Successfully")
      window.location.href = "index.html"
      user = {
    name,
    number,
    address,
    qunatity,
    enquiry,
  }
  
  form.reset()
    }
  
})

