function getComputerChoice() {
    // make an array with all the options
    let options = ["rock", "paper", "scissors"];
    // get a random array element
    let randomElement = Math.floor(Math.random() * options.length);
    // return the random element
    return options[randomElement];
}

function getHumanChoice() {
    let isCorrect = false;
    // while isCorrect === false
    while (isCorrect === false) {
        // get user input
        let userInput = prompt("Rock Paper or Scissors?");

        // make user input lowercase
        userInput = userInput.toLocaleLowerCase();

        // if userinput === rock paper or scissors
        if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
            // isCorrect = true
            isCorrect = true;
            // return userInput
            return userInput
        }
    }
    
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // if its a tie
    if (humanChoice === computerChoice) {
        // console.log its a tie
        return console.log(`It's a tie! Both chose ${humanChoice}!`);
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore = humanScore + 1;
        return console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
    } else {
        computerScore = computerScore + 1;
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    }
    // return console.log of winner
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)