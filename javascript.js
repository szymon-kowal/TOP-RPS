console.log(getComputerChoice())

let playerChoice = prompt('Enter your choice. Rock/Paper/Scissors.') 
playerChoice = playerChoice.toLowerCase()

for (let i = 0; i < 5; i++) {
    console.log(oneRound())
}

function oneRound() {
    computerSelection = getComputerChoice();
    if (playerChoice === computerSelection) {
        return "It is a tie!";
    }  else if ( playerChoice === "paper" && computerSelection === "scissors") {
        return " You have lost !"
    } else if ( playerChoice === "scissors" && computerSelection === "rock") {
        return " You have lost !"
    } else if ( playerChoice === "rock" && computerSelection === "paper") {
        return " You have lost !"
    } else {
        return " You have won !!!"
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