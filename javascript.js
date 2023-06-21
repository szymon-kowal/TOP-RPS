let playerChoice = prompt('Enter your choice. Rock/Paper/Scissors.') 
playerChoice = playerChoice.toLowerCase()

let playerWin = 0
let computerWin = 0
let whoWon;

for (let i = 0; i < 5; i++) {
    oneRound(playerChoice,getComputerChoice)
}

winner(playerWin, computerWin)
console.log(whoWon)

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
    console.log(getComputerChoice())
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