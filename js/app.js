/*-------------------------------- Constants --------------------------------*/

const choices = ["rock", "paper", "scissors"];

/*-------------------------------- Variables --------------------------------*/

let message;
let computerChoice;
let playerChoice;

/*------------------------ Cached Element References ------------------------*/

const resultDisplayElement = document.querySelector("#result-display");
const resetButtonElement = document.querySelector("#reset-button");
const playerChoiceElements = document.querySelectorAll(".choice");

/*-------------------------------- Functions --------------------------------*/

// Get the computer's choice from the "choices" array (rock, paper, scissors) randomly
function getComputerChoice() {
        // Generate a random number between 0-2
        const computerChoiceIndex =  Math.floor(Math.random() * choices.length);
        // Return the appropriate item (rock, paper, scissors) from the "choices" array
        return choices[computerChoiceIndex];
}

// Decide the winner of the game by comparing player and computer choices
function compare() {
        // Compare "playerChoice" to "computerChoice"
        // If "playerChoice" beats "computerChoice"
        // return "Player wins!"
        // Else if "computerChoice" beats "playerChoice"
        // return "Computer wins!"
        // Else return "Tie!"
        if (playerChoice === computerChoice) {
                return "Tie!";
        } else {
                if (playerChoice === "rock") {
                        if (computerChoice === "paper") {
                                return "Computer wins!";
                        } else if (computerChoice === "scissors") {
                                return "Player wins!";
                        }
                } else if (playerChoice === "paper") {
                        if (computerChoice === "rock") {
                                return "Player wins!";
                        } else if (computerChoice === "scissors") {
                                return "Computer wins!";
                        }
                } else if (playerChoice === "scissors") {
                        if (computerChoice === "rock") {
                                return "Computer wins!";
                        } else if (computerChoice === "paper") {
                                return "Player wins!";
                        }
                }
        }
        
}

// Update UI/HTML directly
function render() {
        // Update the container paragraph element with the result
        resultDisplayElement.textContent = `Computer chose ${computerChoice} and you chose ${playerChoice}. ${message}`;
}

// Initialize the game state
function play(event) {
        // Set the "computerChoice" variables's value
        computerChoice = getComputerChoice();
        // Set the "playerChoice" variables's value
        playerChoice = event.target.id;
        // Set the "message" variable's value
        message = compare();
        // After updating the state, display the HTML
        render();
}

// Reset the game state
function resetGame() {
        // Resetting the "computerChoice" and "playerChoice" variables and clearing the result message
        computerChoice = null;
        playerChoice = null;
        resultDisplayElement.textContent = "";
}

/*----------------------------- Event Listeners -----------------------------*/

// Listening for clicks on the reset game button and triggering the "resetGame" function
resetButtonElement.addEventListener("click", resetGame);
// Listening for clicks on the three player choice elements and triggering the "play" function
playerChoiceElements.forEach((choice) => {
        choice.addEventListener("click", play);
});