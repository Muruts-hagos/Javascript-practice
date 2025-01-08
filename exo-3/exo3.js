// you can write js here
let playerInput = prompt("Your choice ( rock, paper, scissors) ?")

function getPlayerChoice(playerInput) {
    playerInput = playerInput.toLowerCase()

    if (playerInput == "rock" || playerInput == "paper" || playerInput == "scissors") {
        return playerInput
    } else {
        console.error("invalid input")
        return null
    }
}





function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function findWinner(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "Tied";
    }
    if (playerChoice == "rock") {
        if (computerChoice == "scissors") {
            return 'win'
        } else {
            return 'lost'
        }

    }




    if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            return 'win'
        } else {
            return 'lost'
        }
    }
    if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'Won';
        } else {
            return 'Lost';
        }
    }
}

function playGame() {
    let uchoice = getPlayerChoice(playerInput);
    let cChoice = getComputerChoice();
    if (uchoice === null) {
        return;

    }
    
    console.log(uchoice,cChoice) ;
    const result = findWinner(uchoice ,cChoice)
    console.log(result)
}
playGame()