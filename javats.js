var Game = /** @class */ (function () {
    function Game(containerID, playerScoreID, computerScoreID) {
        this.playerCount = 0;
        this.computerCount = 0;
        this.container = document.querySelector(".".concat(containerID));
        this.playerHTMLScore = document.querySelector(".".concat(playerScoreID));
        this.computerHTMLScore = document.querySelector(".".concat(computerScoreID));
    }
    // I'm assuming that rock is 0, paper is 1, and scissors is 2.
    Game.prototype.getRandNumToComp = function () {
        return Math.floor(Math.random() * 3);
    };
    Game.prototype.numToInt = function (numStr) {
        return parseInt(numStr, 10);
    };
    Game.prototype.roundWinner = function (playerNum, computerNum) {
        if (playerNum === computerNum) {
            return;
        }
        else if ((playerNum === 0 && computerNum === 1) ||
            (playerNum === 1 && computerNum === 2) ||
            (playerNum === 2 && computerNum === 0)) {
            this.computerCount++;
            this.computerHTMLScore.textContent = "".concat(this.computerCount);
        }
        else {
            this.playerCount++;
            this.playerHTMLScore.textContent = "".concat(this.playerCount);
        }
    };
    Game.prototype.checkWinner = function () {
        if (this.playerCount === 3) {
            this.container.innerHTML = 'You won :^';
        }
        else if (this.computerCount === 3) {
            this.container.innerHTML = 'Computer Won :C';
        }
        else {
            return;
        }
    };
    Game.prototype.playRound = function (playerChoice) {
        var playerNum = this.numToInt(playerChoice);
        var computerNum = this.getRandNumToComp();
        this.roundWinner(playerNum, computerNum);
        this.checkWinner();
    };
    Game.prototype.applyListeners = function (buttons) {
        var _this = this;
        buttons.forEach(function (button) {
            button.addEventListener('click', function () {
                _this.playRound(button.value);
            });
        });
    };
    return Game;
}());
var playGame = function () {
    var gameInstance = new Game('container', 'p', 'c');
    var buttons = document === null || document === void 0 ? void 0 : document.querySelectorAll('button');
    gameInstance.applyListeners(buttons);
};
// The first page
var textElement = document.getElementById('text');
var text = 'User, at the final security check in this bank vault, I, the all-knowing computer, present you with a challenge. Engage in rock, paper, scissors game to determine your fate. Victory grants you access to boundless wealth; defeat means eternal entrapment. Choose your moves wisely, as the weight of each decision shapes your destiny. The stakes have never been higher, as your future hangs on the outcome.';
var textEnterElement = document.getElementById('textEnter');
var textEnter = 'Press any key or click to play the game!';
var blinking = document.getElementsByClassName('blink')[0];
var index = 0;
var index2 = 0;
// Add text slowly
function addText() {
    textElement.innerHTML += text.charAt(index);
    index++;
    if (index < text.length) {
        setTimeout(addText, 30);
    }
    else {
        blinking.innerHTML = '';
        setTimeout(addEnterText, 1000);
        document.addEventListener('keydown', handleInteraction);
        document.addEventListener('click', handleInteraction);
    }
}
function addEnterText() {
    textEnterElement.innerHTML += textEnter.charAt(index2);
    index2++;
    if (index2 < textEnter.length) {
        setTimeout(addEnterText, 20);
    }
}
setTimeout(addText, 3000);
var overl = document.getElementsByClassName('overlay')[0];
var cont = document.getElementsByClassName('container')[0];
var hasRun = false;
function handleInteraction() {
    overl.innerHTML = '';
    cont.id = '';
    hasRun = true;
}
playGame();
