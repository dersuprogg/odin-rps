const choicesBtn = document.querySelectorAll(".btn");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");
const board = document.querySelector(".board");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let index = Math.floor(Math.random() * 3);
  return choices[index];
}

function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === computerSelection) {
    return `It's a Tie, you botch chose ${capitalize(playerSelection)}`;
  } else {
    playerScore++;
    return `You win! ${capitalize(playerSelection)} beats ${capitalize(
      computerSelection
    )}`;
  }
}

choicesBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const playerChoice = btn.innerText.toLowerCase();
    const computerChoice = getComputerChoice();
    const msg = playRound(playerChoice, computerChoice);

    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    board.textContent = msg;
  });
});
