

let playerWin = 0;

let computerWin = 0;
let whoWon;

const buttons = document.querySelectorAll('button');
console.log(buttons)

const outputPlayer = document.querySelector('.p');
const outputComputer = document.querySelector('.c');
const outputWinner = document.querySelector('.winner');
const bodyElement = document.querySelector('body');

// combine eventlistener with button clicking


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice;
        if (button.classList.contains('rock')) {
            playerChoice = 'rock';
          } else if (button.classList.contains('paper')) {
            playerChoice = 'paper';
          } else if (button.classList.contains('scissors')) {
            playerChoice = 'scissors';
          } 
          oneRound(playerChoice,getComputerChoice);
          outputComputer.textContent = `${computerWin}`;
          outputPlayer.textContent = `${playerWin}`;
          outputWinner.textContent = `placeholder`; 
          // Display who won
          if (playerWin == 5) {
            bodyElement.innerHTML = '<h1>You won !</h1>';
            } else if (computerWin == 5) {
            bodyElement.innerHTML = '<h1>Computer won :C</h1>';
            }
    })
});



function oneRound(playerChoice, getComputerChoice) {
    if (playerChoice === getComputerChoice()) {
        return "It is a tie!";
    }  else if ( playerChoice === "paper" && getComputerChoice() === "scissors") {
        return computerWin++;
    } else if ( playerChoice === "scissors" && getComputerChoice() === "rock") {
        return computerWin++;
    } else if ( playerChoice === "rock" && getComputerChoice() === "paper") {
        return computerWin++;
    } else {
        return playerWin++;
    }
}

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return "scissors";
    } else if (random === 2) {
        return "rock";
    } else {
        return "paper";
    }
}