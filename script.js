const body = document.querySelector("body");
const gameUpdate = document.createElement("div");
const domPlayerScore = document.createElement("div");
const domComputerScore = document.createElement("div");
body.appendChild(gameUpdate);
body.appendChild(domPlayerScore);
body.appendChild(domComputerScore);

function getComputerChoice() {
    // make an array with all the options
    let options = ["rock", "paper", "scissors"];
    // get a random array element
    let randomElement = Math.floor(Math.random() * options.length);
    // return the random element
    return options[randomElement];
}

function playRound(humanChoice, computerChoice) {
    // if its a tie
    if (humanChoice === computerChoice) {
        // console.log its a tie
        gameUpdate.textContent = `It's a tie! Both chose ${humanChoice}!`;
        getScore(null);
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "scissors" && computerChoice === "paper")) {
        gameUpdate.textContent = `You won! ${humanChoice} beats ${computerChoice}!`;
        getScore(true);
    } else {
        gameUpdate.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
        getScore(false);
    }
}

const rockBtn = document.querySelector(".rock");
rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

const paperBtn = document.querySelector(".paper");
paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

const scissorsBtn = document.querySelector(".scissors");
scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

playerScore = 0;
computerScore = 0;

function getScore(playerWon) {
    if (playerWon === true) {
        playerScore++;
    } else if (playerWon === false) {
        computerScore++;
    }
    
    if (playerScore === 5) {
        gameEnd("player");
    } else if (computerScore === 5) {
        gameEnd("computer");
    }
    domPlayerScore.textContent = `Player: ${playerScore}`;
    domComputerScore.textContent = `Computer: ${computerScore}`    
}

function gameEnd(winner) {
    let hide = "display: none;"
    // hide buttons
    rockBtn.style.cssText = hide;
    paperBtn.style.cssText = hide;
    scissorsBtn.style.cssText = hide;
    
    // hide scores
    domPlayerScore.cssText = hide;
    domComputerScore.cssText = hide;

    if (winner === "player") {
        gameUpdate.textContent = "Congrats you won!";
    } else if (winner === "computer") {
        gameUpdate.textContent = "Sorry you lost. Try again!";
    }
}
