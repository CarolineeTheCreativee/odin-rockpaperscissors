//TWO PLAYERS


//HUMAN CHOICE
function getHumanChoice(){
  const choices = ["rock", "paper", "scissors"];
  let choice = prompt("Please choose either 'rock', 'paper' or 'scissors':").toLowerCase();
  while(!choices.includes(choice)){
    choice = prompt("Invalid input, please choose either 'rock', 'paper' or 'scissors':").toLowerCase(); 
  }
  return choice;
}


//COMPUTER CHOICE
function getComputerChoice(){
  const choices = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

 //PLAYROUND
function playRound(){
   const human = getHumanChoice();
   const computer = getComputerChoice();
   const roundWinner = determineWinner(human, computer);
}

//WINNER AND SCORE COUNT
function determineWinner(humanChoice, computerChoice)