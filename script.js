console.log("testing again")

function getComputerChoice () {
  let options = ["rock", "paper", "scissors"]
  return options[Math.floor(Math.random()*options.length)]
}

function play (computerSelection, playerSelection) {
  playerSelection = playerSelection.toLowerCase()
  if (playerSelection == computerSelection) {
    return "Draw!"
  } else if (playerSelection == "rock" && computerSelection == "scissors"){
    return "You win! Rock beats scissors!"
  } else if (playerSelection == "scissors" && computerSelection == "paper"){
    return "You win! Scissors beats paper!"
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win! Paper beats rock!"
  } else {
    return "You lose, " + computerSelection + " beats " + playerSelection + "!"
  }
}


function game () {
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice()
    let playerSelection = prompt("Let's play! Choose rock, paper, or scissors: ")
    while (playerSelection != "rock" && playerSelection != "scissors" && playerSelection != "paper") {
      playerSelection = prompt("Invalid move, try again!")
    }
    console.log(play(computerSelection, playerSelection))
  }

}
