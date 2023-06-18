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
            return `You Lose! ${computerSelection} beats ${playerSelection2}`;
        } else if (computerSelection === "Scissors") {
            return `You Win! ${playerSelection2} beats ${computerSelection}`;
        } else {
            return "Tie!";
        }
    } else if (playerSelection2 === "Paper") {
        if (computerSelection === "Rock") {
            return `You Win! ${playerSelection2} beats ${computerSelection}`;
        } else if (computerSelection === "Scissors") {
            return `You Lose! ${computerSelection} beats ${playerSelection2}`;
        } else {
            return "Tie!";
        }
    } else if (playerSelection2 === "Scissors") {
        if (computerSelection === "Rock") {
            return `You Lose! ${computerSelection} beats ${playerSelection2}`;
        } else if (computerSelection === "Paper") {
            return `You Win! ${playerSelection2} beats ${computerSelection}`;
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

console.log(game());