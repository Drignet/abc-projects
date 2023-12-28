const computerChoices = ["rock", "paper", "scissors"];
const divSelect = document.querySelector(".select");
const displayResult = document.querySelector(".display-results h2");
const divMyScore = document.querySelector(".my-score");
const divComputerScore = document.querySelector(".computer-score");
const playerChoice = document.querySelector(".player-choice");
const compuChoice = document.querySelector(".computer-choice");

let myScore = 0;
let computerScore = 0;

divMyScore.textContent = myScore;
divComputerScore.textContent = computerScore;

document.querySelector(".reset").addEventListener("click", () =>{
  divMyScore.textContent = 0;
divComputerScore.textContent = 0;
  displayResult.textContent = "SELECT"
  playerChoice.textContent = ""
  compuChoice.textContent = ""
})

divSelect.addEventListener("click", (e) => {
  let computerChoice = getComputerChoice()
  let myValue = e.target.id
  
  computerChoice === "rock" ? computerChoice = "👊"
  : computerChoice === "paper" ? computerChoice = "🤚"
  : computerChoice = "✌️"
  
  myValue === "rock" ? myValue = "👊"
  : myValue === "paper" ? myValue = "🤚"
  : myValue = "✌️"
  
  playerChoice.textContent = myValue
  compuChoice.textContent = computerChoice
  
  return ((myValue === "👊" && myValue === computerChoice) || (myValue === "🤚" && myValue === computerChoice) || (myValue === "✌️" && myValue === computerChoice)) ? displayResult.textContent = "Draw"
  
  : (((myValue === "👊" && computerChoice === "🤚") || (myValue === "🤚" && computerChoice === "✌️") || (myValue === "✌️" && computerChoice === "👊"))) ? (displayResult.textContent = "You wins", divMyScore.textContent = +divMyScore.textContent + 1)
  : (displayResult.textContent = "Computer Wins", divComputerScore.textContent = +divComputerScore.textContent + 1)
  
  
})


function getComputerChoice() {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

