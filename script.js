function getComputerChoice () {
  let options = ["rock", "paper", "scissors"]
  return options[Math.floor(Math.random()*options.length)]
}


function play (computerSelection, playerSelection) {
  playerSelection = playerSelection.toLowerCase()
  if (playerSelection == computerSelection) {
    return "Draw!"
  } else if (playerSelection == "rock" && computerSelection == "scissors"){
    playerScore += 1;
    return "You win! Rock beats scissors!"
  } else if (playerSelection == "scissors" && computerSelection == "paper"){
    playerScore += 1;
    return "You win! Scissors beats paper!"
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore += 1;
    return "You win! Paper beats rock!"
  } else {
    computerScore += 1;
    return "You lose, " + computerSelection + " beats " + playerSelection + "!";
  }
}

// create variables for each button
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const scoreboard = document.querySelector('#scoreboard');
const explaination = document.createElement('p');
explaination.textContent = '';
scoreboard.appendChild(explaination);


// add event listeners to each button
rock.addEventListener("click", clicked);
paper.addEventListener("click", clicked);
scissors.addEventListener("click", clicked);

function clicked(e) {
  // change explaination each play
  explaination.textContent = play(getComputerChoice(), e.target.id);

  // change scoreboard
  displayComputerScore.textContent = `Computer score: ${computerScore}`;
  displayPlayerScore.textContent = `Your score: ${playerScore}`;

  
}


// adding scoreboard
let playerScore = 0;
let computerScore = 0;

const displayPlayerScore = document.querySelector('#playerScore');
const displayComputerScore = document.querySelector('#computerScore');


// adding reset button
const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener("click", function(){

  computerScore = 0;
  playerScore = 0;

  displayComputerScore.textContent = `Computer score: ${computerScore}`;
  displayPlayerScore.textContent = `Your score: ${playerScore}`;
  explaination.textContent = '';
})