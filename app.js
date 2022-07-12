function computerPlay() {
    const rand = Math.floor(Math.random() * 3)
    switch (rand) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scisscors';

    }
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection.toLowerCase()) {
        console.log("Tie game!");
    }
    if (playerSelection.toLowerCase() === "rock") {
        if (computerPlay === "paper") {
            return "You Lose! Paper beats Rock";
        }
        else if (computerPlay === "scisscors") {
            return "You wind! Rock beats scisscors";
        }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerPlay === "rock") {
            return "you won paper beats rock"
        }
        else if (computerPlay === "scisscors") {
            return "You Lose! scisscors beats paper";
        }
    } else if (playerSelection.toLowerCase() === "scisscors") { //scisscors
        if (computerPlay === "paper") {
            return "You wind! scissors beats paper"
        }
        else if (computerPlay === "rock") {
            return "you lose rock beats scisscors";
        }
    }
    else {
        return 'invalide selection';
    }
}
// const playerSelection = 'rock'
// const computerSelection = computerPlay()


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("what's your selection?")
        let computerSelection = computerPlay()
        console.log(`your selection is ${playerSelection}
computer selection is ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()