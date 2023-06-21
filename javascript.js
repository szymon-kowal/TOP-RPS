console.log(getComputerChoice())

let playerChoice = toLowerCase() 

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return "Scissors";
    } else if (random === 2) {
        return "Rock";
    } else {
        return "Paper";
    }  
}