

let playerWin = 0

let computerWin = 0
let whoWon;

const buttons = document.querySelectorAll('button');
console.log(buttons)

const outputPlayer = document.querySelector('.p');
const outputComputer = document.querySelector('.c');
const outputWinner = document.querySelector('.winner');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('rock')) {
            console.log("Rock button was clicked.");
            let playerChoice = 'rock';
            oneRound(playerChoice,getComputerChoice);
          } else if (button.classList.contains('paper')) {
            console.log("Paper button was clicked.");
            let playerChoice = 'paper';
            oneRound(playerChoice,getComputerChoice);
          } else if (button.classList.contains('scissors')) {
            console.log("Scissors button was clicked.");
            let playerChoice = 'scissors';
            oneRound(playerChoice,getComputerChoice);
          } 
          outputComputer.textContent = `${computerWin}`;
          outputPlayer.textContent = `${playerWin}`;
          outputWinner.textContent = `placeholder`;

          // Need to keep the progress of game to the 5 wins and
          // make the winner     
    })
});

if (playerWin = 5) {
    
}

// let playerChoice = prompt('Enter your choice. Rock/Paper/Scissors.')
// playerChoice = playerChoice.toLowerCase()
// console.log("Button clicked:", button.textContent);
// oneRound(playerChoice,getComputerChoice);
// winner(playerWin, computerWin);
// console.log(whoWon);

function winner(playerWin, computerWin) {
    if (playerWin > computerWin) {
        whoWon = " You won !";
    } else if (playerWin < computerWin) {
        whoWon = " You ve lost !";
    } else {
        whoWon = " It is a tie !";
    }
    return whoWon
}


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