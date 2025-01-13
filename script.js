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

function playRound(humanChoice, computerChoice) {
    // if its a tie
    if (humanChoice === computerChoice) {
        // console.log its a tie
        console.log(`It's a tie! Both chose ${humanChoice}!`);
        return null;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
        return true;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        return false;
    }
}

function playGame() {
    
    // initalize scores
    let humanScore = 0;
    let computerScore = 0;
    
    // play 5 rounds
    for (let i = 0; i < 5; i++) {
        // get choices
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        // if human won increase score else increase computer score
        let humanWon = playRound(humanSelection, computerSelection);
        // if human won give point else if computer won give computer point
        if (humanWon === true) {
            humanScore++;
        } else if (humanWon === false) {
            computerScore++;
        }
    }
    console.log(`Your Score is: ${humanScore}`);
    console.log(`Computers Score is: ${computerScore}`);
}

playGame();