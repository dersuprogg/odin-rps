const choices = ["Rock", "Paper", "Scissors"];


function getComputerChoice(){
  let index = Math.floor((Math.random() * 3));
  return choices[index];
}

function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1,).toLowerCase();
}

const playerChoice = "paper";
const computerChoice = getComputerChoice().toLowerCase();

function playRound(playerSelection, computerSelection){
  if(playerSelection === "rock" && computerSelection === "paper"){
    console.log("You Lose! Paper beats Rock");
  }else if (playerSelection === "paper" && computerSelection === "scissors"){
    console.log("You lose! Scissors beats Paper");
  }else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose! Rock beats Scissors");
  }else if (playerSelection === computerSelection){
    console.log(`It's a Tie, you botch chose ${capitalize(playerSelection)}`);
  }else {
    console.log(`You win! ${playerSelection} beats ${capitalize(computerSelection)}`);
  }
}

playRound(playerChoice, computerChoice);

