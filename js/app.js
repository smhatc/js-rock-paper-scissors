/*-------------------------------- Constants --------------------------------*/

const choices = ["rock", "paper", "scissors"];

/*-------------------------------- Variables --------------------------------*/

let message;
let computerChoice;
let playerChoice;

/*------------------------ Cached Element References ------------------------*/

const playerChoiceElements = document.querySelectorAll(".choice");
const resultDisplayElement = document.querySelector("#result-display");

/*-------------------------------- Functions --------------------------------*/

// Get the computer's choice from the "choices" array (rock, paper, scissors) randomly
function getComputerChoice() {
        // Generate a random number between 0-2
        const computerChoiceIndex =  Math.floor(Math.random() * choices.length);
        // Return the appropriate item (rock, paper, scissors) from the "choices" array
        return choices[computerChoiceIndex];
}

// Get the player's choice from the "choices" array (rock, paper, scissors) based on the clicked element
function getPlayerChoice(event) {
        // Returning the appropriate choice from the array based on the ID of the clicked element
        if (event.target.id === "rock") {
                return choices[choices.indexOf("rock")];
        } else if (event.target.id === "paper") {
                return choices[choices.indexOf("paper")];
        } else if (event.target.id === "scissors") {
                return choices[choices.indexOf("scissors")];
        }
}

// Updates UI/HTML directly
function render() {
        // Update the container paragraph element with the result
        resultDisplayElement.textContent = `Computer chose ${computerChoice} and you chose ${playerChoice}`;
}

// Initialize the game state
function play(event) {
        // Set the "computerChoice" variables's value
        computerChoice = getComputerChoice();
        // Set the "playerChoice" variables's value
        playerChoice = getPlayerChoice(event);
        // After updating the state, display the HTML
        render();
}

/*----------------------------- Event Listeners -----------------------------*/

playerChoiceElements.forEach((choice) => {
        choice.addEventListener("click", play);
});