function getComputerChoice() {
    let num = Math.floor(Math.random()*3 + 1)
    if (num == 1) {
        return "Rock";
    } else if (num == 2) {
        return "Paper";
    } else if (num == 3) {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerSelection2 = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    console.log("player choice: " + playerSelection2);
    console.log("computer choice: " + computerSelection);
    if (playerSelection2 === "Rock") {
        if (computerSelection === "Paper") {
            return `You Lose! ${computerSelection} beats ${playerSelection2}!`;
        } else if (computerSelection === "Scissors") {
            return `You Win! ${playerSelection2} beats ${computerSelection}!`;
        } else {
            return "Tie!";
        }
    } else if (playerSelection2 === "Paper") {
        if (computerSelection === "Rock") {
            return `You Win! ${playerSelection2} beats ${computerSelection}!`;
        } else if (computerSelection === "Scissors") {
            return `You Lose! ${computerSelection} beats ${playerSelection2}!`;
        } else {
            return "Tie!";
        }
    } else if (playerSelection2 === "Scissors") {
        if (computerSelection === "Rock") {
            return `You Lose! ${computerSelection} beats ${playerSelection2}!`;
        } else if (computerSelection === "Paper") {
            return `You Win! ${playerSelection2} beats ${computerSelection}!`;
        } else {
            return "Tie!";
        }
    }
}

function isValidInput(input) {
    let input2 = input.toLowerCase();
    if (input2 === "rock" || input2 === "paper" || input2 == "scissors") {
        return true;
    }
    return false;
}

function cancel(okOrCancel) {

}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i < 6; i++) {
        let valid = false;

        let playerSelection = "";
        playerSelection = prompt("Enter your choice: ", "")
        if (playerSelection == null) {
            return "Game cancelled. Refresh the browser to play the game.";
        }
        valid = isValidInput(playerSelection);

        while (!valid) {
            playerSelection = prompt(`Invalid input "${playerSelection}"! Enter another choice: `, "");
            if (playerSelection == null) {
                return "Game cancelled. Refresh the browser to play the game.";
            }
            valid = isValidInput(playerSelection);
        }
        
        console.log(`----- Round ${i} -----`);

        let msg = playRound(playerSelection, getComputerChoice());
        if (msg.includes("Win")) {
            playerScore++;
        } else if (msg.includes("Lose")) {
            computerScore++;
        }
        console.log(msg);
        console.log("player score: " + playerScore);
        console.log("computer score: " + computerScore)
    }

    if (playerScore > computerScore) {
        return "Player Wins!";
    } else if (computerScore > playerScore) {
        return "Computer Wins!";
    } else {
        return "Tie!";
    }
}

// const rockButton = document.querySelector("#rock");

const buttons = document.querySelectorAll('button');

const resultInfo = document.querySelector('.result-info');
const roundInfo = document.querySelector('.round-info');
const score = document.querySelector('#score');

const playerChoicePara = document.createElement("p");
const opponentChoicePara = document.createElement("p");
const scorePara = document.createElement('p');
const winnerMsgPara = document.createElement("p");
const finalWinnerMsgPara = document.createElement('p');
const roundInfoPara = document.createElement('p');

let round = 0;
let playerScore = 0;
let opponentScore = 0;
let playerChoiceTextNode = document.createTextNode("");
let opponentChoiceTextNode = document.createTextNode("");
let scoreTextNode = document.createTextNode("");
let winnerMsgTextNode = document.createTextNode("");
let finalWinnerMsgTextNode = document.createTextNode("");
let roundInfoTextNode = document.createTextNode("");

roundInfoPara.style.textDecoration = "underline";
roundInfoPara.style.fontWeight = "bold";
buttons.forEach(button => button.addEventListener('click', function(e) {

    if (round === 5) {
        return;
    }

    let opponentChoice = getComputerChoice();
    let playerSelection = e.target.id;
    let winnerMsg = playRound(e.target.id, opponentChoice);
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    winnerMsgTextNode.textContent = winnerMsg;
    playerChoiceTextNode.textContent = "Player choice: " + playerSelection;
    opponentChoiceTextNode.textContent = "Opponent choice: " + opponentChoice;

    resultInfo.style.border = "thick solid red";
    resultInfo.style.borderWidth = "3px";

    round++;
    roundInfoTextNode.textContent = "Results for Round " + round;
    if (winnerMsg.includes('Win')) {
        playerScore++;
    } else if (winnerMsg.includes('Lose')) {
        opponentScore++;
    }

    scoreTextNode.textContent = "Player Score = " + playerScore + " | Opponent Score = " + opponentScore;

    // win game
    if (round === 5) {
        if (playerScore > opponentScore) {
            finalWinnerMsgTextNode.textContent = "Player Wins!";
            finalWinnerMsgPara.style.color = "green";
        } else if (playerScore === opponentScore) {
            finalWinnerMsgTextNode.textContent = "Tie! No one Wins!";
            finalWinnerMsgPara.style.color = "#7F00FF";
        } else {
            finalWinnerMsgTextNode.textContent = "Opponent Wins!";
            finalWinnerMsgPara.style.color = "red";
        }
    }
}));

playerChoicePara.appendChild(playerChoiceTextNode);
opponentChoicePara.appendChild(opponentChoiceTextNode);
scorePara.appendChild(scoreTextNode);
winnerMsgPara.appendChild(winnerMsgTextNode);
finalWinnerMsgPara.appendChild(finalWinnerMsgTextNode);
roundInfoPara.appendChild(roundInfoTextNode);

resultInfo.appendChild(roundInfoPara);
resultInfo.appendChild(playerChoicePara);
resultInfo.appendChild(opponentChoicePara);
resultInfo.appendChild(winnerMsgPara);

score.appendChild(scorePara);
score.appendChild(finalWinnerMsgPara);


// console.log(buttons);
// console.log(game());