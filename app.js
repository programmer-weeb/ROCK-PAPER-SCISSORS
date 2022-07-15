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
    // computerSelection = computerPlay();
    if (computerSelection === playerSelection.toLowerCase()) {
//         console.log(`you choose ${playerSelection}
// computer choose ${computerSelection}`);
        return (
            `you choose ${playerSelection}
computer choose ${computerSelection}
"Tie game!"`
        )
        
        // console.log("Tie game!");

    }
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
            // console.log("You Lose! Paper beats Rock");
        }
        else if (computerSelection === "scisscors") {
            return "You wind! Rock beats scisscors";
            // console.log("You wind! Rock beats scisscors");
        }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            return "you won paper beats rock";
            // console.log("you won paper beats rock");
        }
        else if (computerSelection === "scisscors") {
            return "You Lose! scisscors beats paper";
            // console.log("You Lose! scisscors beats paper");
        }
    } else if (playerSelection.toLowerCase() === "scisscors") { //scisscors
        if (computerSelection === "paper") {
            return "You wind! scissors beats paper";
            // console.log("You wind! scissors beats paper");
        }
        else if (computerSelection === "rock") {
            return "you lose rock beats scisscors";
            // console.log("you lose rock beats scisscors");
        }
    }
    else {
        // return 'invalide selection';
        return
        // console.log('invalide selection');
    }
}

function game(playerSelection) {

    let computerSelection = computerPlay();
    console.log(`your selection is ${playerSelection}
computer selection is ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
    // return playRound(playerSelection, computerSelection);
}

// DOM manipulation

/* let buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener('click', game(`${btn.id}`))
}) */

let rockButton = document.querySelector("#rock")
let paperButton = document.querySelector("#paper")
let scissorsButton = document.querySelector("#scissors")

rockButton.addEventListener('click', () => {
    game("rock")
})
paperButton.addEventListener('click', () => {
    game("paper")
});
scissorsButton.addEventListener('click', () => {
    game("scissors")
});



