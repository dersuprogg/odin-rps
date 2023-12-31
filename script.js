const choicesBtn = document.querySelectorAll(".btn");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");
const board = document.querySelector(".board");
const resetBtn = document.querySelector(".reset-btn");

resetBtn.style.visibility = "hidden";

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let index = Math.floor(Math.random() * 3);
  return choices[index];
}

function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

const player = {
  name: "Player",
  score: 0,
};
const computer = {
  name: "Computer",
  score: 0,
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    computer.score++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computer.score++;
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computer.score++;
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === computerSelection) {
    return `It's a Tie, you botch chose ${capitalize(playerSelection)}`;
  } else {
    player.score++;
    return `You win! ${capitalize(playerSelection)} beats ${capitalize(
      computerSelection
    )}`;
  }
}

function checkWinner(player1, player2) {
  if (player1.score > player2.score) {
    return player1.name;
  } else {
    return player2.name;
  }
}

function resetGame() {
  choicesBtn.forEach((btn) => {
    btn.removeAttribute("disabled");
    player.score = 0;
    playerScoreSpan.textContent = player.score;
    computer.score = 0;
    computerScoreSpan.textContent = computer.score;
    board.textContent = "";
    resetBtn.style.visibility = "hidden";
  });
}

resetBtn.addEventListener("click", resetGame);

choicesBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const playerChoice = btn.innerText.toLowerCase();
    const computerChoice = getComputerChoice();
    const msg = playRound(playerChoice, computerChoice);

    playerScoreSpan.textContent = player.score;
    computerScoreSpan.textContent = computer.score;
    if (player.score == 5 || computer.score == 5) {
      const winner = checkWinner(player, computer);
      board.textContent = `We have a winner: ${winner}`;
      choicesBtn.forEach((btn) => {
        btn.setAttribute("disabled", true);
      });
      resetBtn.style.visibility = "visible";
    } else {
      board.textContent = msg;
    }
  });
});
