let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//main body
main();

function main() {

	rock_div.addEventListener('click', function() {
		game("r");
	})

	paper_div.addEventListener('click', function() {
		game("p");
	})

	scissors_div.addEventListener('click', function() {
		game("s");
	})
}




function win(userChoice, computerChoice){
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = convertWord(userChoice) + " beats " + convertWord(computerChoice) + ". You win!";
}

function lose(userChoice, computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	result_p.innerHTML = convertWord(userChoice) + " loses to " + convertWord(computerChoice) + ". You lose!";

}

function draw(userChoice, computerChoice){
	console.log("USER TIES");
	userScore_span.innerHTML = userScore;
	result_p.innerHTML = convertWord(userChoice) + " ties " + convertWord(computerChoice) + ". You tie!";

}

function convertWord (letter) {
	if (letter === "r") {return "Rock"};
	if (letter === "p") {return "Paper"};
	return "Scissors";
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	const result = userChoice + computerChoice;
	console.log(result);
	switch (result) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	var randNum = Math.floor(Math.random() * choices.length);
	return choices[randNum];
}