const choices = ["Rock", "Paper", "Scissors"];


function getComputerChoice(){
  let index = Math.floor((Math.random() * 3));
  return choices[index];
}

function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1,).toLowerCase();
}



function playRound(playerSelection, computerSelection){
  if(playerSelection === "rock" && computerSelection === "paper"){
    return "You Lose! Paper beats Rock";
  }else if (playerSelection === "paper" && computerSelection === "scissors"){
    return "You lose! Scissors beats Paper";
  }else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats Scissors";
  }else if (playerSelection === computerSelection){
    return `It's a Tie, you botch chose ${capitalize(playerSelection)}`;
  }else {
    return `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
  }
}


const playerChoice = "paper";
const computerChoice = getComputerChoice().toLowerCase();

console.log(playRound(playerChoice, computerChoice));

