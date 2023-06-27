let playerWin = 0;

let computerWin = 0;
let whoWon;

const buttons = document.querySelectorAll('button');


const outputPlayer = document.querySelector('.p');
const outputComputer = document.querySelector('.c');
const outputWinner = document.querySelector('.winner');
const bodyElement = document.querySelector('body');
const cont = document.getElementsByClassName('container')[0];
// combine eventlistener with button clicking

let Winner = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice;
        if (button.classList.contains('rock')) {
            playerChoice = 'rock';
          } else if (button.classList.contains('paper')) {
            playerChoice = 'paper';
          } else if (button.classList.contains('scissors')) {
            playerChoice = 'scissors';
            console.log('scis')
          } 
          let Winner = oneRound(playerChoice,getComputerChoice);
          appendWin(Winner);
          outputComputer.textContent = `${computerWin}`;
          outputPlayer.textContent = `${playerWin}`;
          outputWinner.textContent = `${Winner}`; 
          // Display who won
          if (playerWin == 5) {
            cont.innerHTML = '<h1>You won !</h1>';
            } else if (computerWin == 5) {
            cont.innerHTML = '<h1>Computer won :C</h1>';
            }
    })
});



function oneRound(playerChoice, getComputerChoice) {
    if (playerChoice === getComputerChoice()) {
        return "It is a tie!";
    }  else if ( playerChoice === "paper" && getComputerChoice() === "scissors") {
        return 'Computer';
    } else if ( playerChoice === "scissors" && getComputerChoice() === "rock") {
        return 'Computer';
    } else if ( playerChoice === "rock" && getComputerChoice() === "paper") {
        return 'Computer';
    } else {
        return 'Player';
    }
}

function appendWin(choice) {
    if (choice == 'Computer') {
        return computerWin++;
    } else if (choice == 'Player'){
        return playerWin++;
    } else {
        return;
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

// The first page

const textElement = document.getElementById("text");
const text = "User, at the final security check in this bank vault, I, the all-knowing computer, present you with a challenge. Engage in rock, paper, scissors game to determine your fate. Victory grants you access to boundless wealth; defeat means eternal entrapment. Choose your moves wisely, as the weight of each decision shapes your destiny. The stakes have never been higher, as your future hangs on the outcome.";

const textEnterElement = document.getElementById("textEnter");
const textEnter = "Press ENTER to play the game."

const blinking = document.getElementsByClassName('blink')[0];

let index = 0;
let index2 = 0;
// Add tet slowly
function addText() {
    textElement.innerHTML += text.charAt(index);
    index++;
    if (index < text.length) {
        setTimeout(addText, 1);
    } else {
        blinking.innerHTML ="";
        setTimeout(addEnterText,1000);
        document.addEventListener("keydown", checkKeyPressed);
    }
}

function addEnterText() {
    textEnterElement.innerHTML += textEnter.charAt(index2);
    index2++;
    if (index2 < textEnter.length) {
        setTimeout(addEnterText, 1);
    } 
}

setTimeout(addText, 3000);
// Switching what is displayed by clicking enter
const overl = document.getElementsByClassName('overlay')[0];


let hasRun = false;
function checkKeyPressed(e) {
    if (e.key === 'Enter' && hasRun == false) {
        overl.innerHTML = '';
        cont.id = '';
        hasRun = true;
    }
};