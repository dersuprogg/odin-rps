const choices = ["Rock", "Paper", "Scissors"];


function getComputerChoice(){
  let index = Math.floor((Math.random() * 3));
  return choices[index];
}

