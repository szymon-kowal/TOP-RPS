
// The first page

const textElement = document.getElementById("text");
const text = "User, at the final security check in this bank vault, I, the all-knowing computer, present you with a challenge. Engage in rock, paper, scissors game to determine your fate. Victory grants you access to boundless wealth; defeat means eternal entrapment. Choose your moves wisely, as the weight of each decision shapes your destiny. The stakes have never been higher, as your future hangs on the outcome.";

const textEnterElement = document.getElementById("textEnter");
const textEnter = "Press ENTER to play the game."

const blinking = document.getElementsByClassName('blink')[0];

let index = 0;
let index2 = 0;

function addText() {
    textElement.innerHTML += text.charAt(index);
    index++;
    if (index < text.length) {
        setTimeout(addText, 3);
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
        setTimeout(addEnterText, 2);
    } 
}

setTimeout(addText, 3000);

const overl = document.getElementsByClassName('overlay')[0];
const cont = document.getElementsByClassName('container')[0];

let hasRun = false;
function checkKeyPressed(e) {
    if (e.key === 'Enter' && hasRun == false) {
        overl.innerHTML = '';
        cont.id = '';
        hasRun = true;
    }
};