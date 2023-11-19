const statements = [
  "No Evidence, You Go Explain Tire",
  "Better Go Back, Police Full Road",
  "You Go Use Your Eyes See Wetin You Dey Find",
  "Charity Begins At Home , Na 404 You Dey",
  "Things My Eyes See, Abeg Go Back",
  "404 Page Na For Person Wey No Dey Hear Word",
  "This Page You Enter No Go Save You",
  "See You See EFCC",
  "Dev Don Drive Enter Unknown House",
  "You Sure Say You Don Chop?"
  ];
  
  const para404 = document.querySelector('.text-output');
  const logo = document.querySelector('.logo');
  
 setInterval(() => {
    let randomStatement = Math.floor(Math.random() * statements.length)
    para404.innerText = statements[randomStatement]
  }, 4000);
  
  
  const menuToggle = document.querySelector('.menu-toggle');
      const mainMenu = document.querySelector('#main-menu');

      menuToggle.addEventListener('click', () => {
        mainMenu.classList.toggle('active');
      });
      
      setInterval(() => {
        logo.style.color = randomColor()
      }, 5000)
  
  function randomColor(){
    let randomColor = Math.random().toString(16).slice(2,8);
    return `#${randomColor}`
  }
  
  