function getComputerChoice() {
    // make an array with all the options
    let options = ["Rock", "Paper", "Scissors"];
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
        if (userInput === "rock" || userInput === "paper" || userInput === "scissors"){
            // isCorrect = true
            isCorrect = true;
            // return userInput
            return userInput
        }
    }
    
}

console.log(getHumanChoice())