class Game {
	private playerCount: number = 0;
	private computerCount: number = 0;
	private container: HTMLElement;
	private playerHTMLScore: HTMLElement;
	private computerHTMLScore: HTMLElement;

	constructor(
		containerID: string,
		playerScoreID: string,
		computerScoreID: string
	) {
		this.container = document.querySelector(`.${containerID}`)!;
		this.playerHTMLScore = document.querySelector(`.${playerScoreID}`)!;
		this.computerHTMLScore = document.querySelector(`.${computerScoreID}`)!;
	}

	// I'm assuming that rock is 0, paper is 1, and scissors is 2.

	private getRandNumToComp(): number {
		return Math.floor(Math.random() * 3);
	}

	private numToInt(numStr: string): number {
		return parseInt(numStr, 10);
	}

	private roundWinner(playerNum: number, computerNum: number): void {
		if (playerNum === computerNum) {
			return;
		} else if (
			(playerNum === 0 && computerNum === 1) ||
			(playerNum === 1 && computerNum === 2) ||
			(playerNum === 2 && computerNum === 0)
		) {
			this.computerCount++;
			this.computerHTMLScore.textContent = `${this.computerCount}`;
		} else {
			this.playerCount++;
			this.playerHTMLScore.textContent = `${this.playerCount}`;
		}
	}

	private checkWinner() {
		if (this.playerCount === 3) {
			this.container.innerHTML = 'You won :^';
		} else if (this.computerCount === 3) {
			this.container.innerHTML = 'Computer Won :C';
		} else {
			return;
		}
	}

	playRound(playerChoice: string): void {
		const playerNum = this.numToInt(playerChoice);
		const computerNum = this.getRandNumToComp();

		this.roundWinner(playerNum, computerNum);
		this.checkWinner();
	}

	applyListeners(buttons: NodeListOf<HTMLButtonElement>) {
		buttons.forEach(button => {
			button.addEventListener('click', () => {
				this.playRound(button.value);
			});
		});
	}
}

const playGame = () => {
	const gameInstance = new Game('container', 'p', 'c');
	const buttons = document?.querySelectorAll('button');
	gameInstance.applyListeners(buttons);
};

// The first page

const textElement = document.getElementById('text') as HTMLDivElement;
const text =
	'User, at the final security check in this bank vault, I, the all-knowing computer, present you with a challenge. Engage in rock, paper, scissors game to determine your fate. Victory grants you access to boundless wealth; defeat means eternal entrapment. Choose your moves wisely, as the weight of each decision shapes your destiny. The stakes have never been higher, as your future hangs on the outcome.';

const textEnterElement = document.getElementById('textEnter') as HTMLDivElement;
const textEnter = 'Press any key or click to play the game!';

const blinking = document.getElementsByClassName('blink')[0] as HTMLDivElement;

let index = 0;
let index2 = 0;

// Add text slowly
function addText() {
	textElement.innerHTML += text.charAt(index);
	index++;
	if (index < text.length) {
		setTimeout(addText, 30);
	} else {
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

const overl = document.getElementsByClassName('overlay')[0] as HTMLDivElement;
const cont = document.getElementsByClassName('container')[0] as HTMLDivElement;
let hasRun = false;

function handleInteraction() {
	overl.innerHTML = '';
	cont.id = '';
	hasRun = true;
}

playGame();
