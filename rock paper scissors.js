const computerPlay = () => {
    let random = Math.floor(Math.random() * 3)
    if (random === 0){
        return "rock"
    } else if (random === 1){
        return "paper"
    } else if (random === 2){
        return "scissors"
    }
}

let playerSelection = prompt("Please select rock, paper or scissors.");
let playerWins = 0;
let computerWins = 0;

const playGame = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection){
        console.log(`Player: ${playerSelection}, computer: ${computerSelection}. It's a draw`)
    } else if (playerSelection === "paper" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper"){
        console.log(`Player: ${playerSelection}, computer: ${computerSelection}. Player wins ${++playerWins}.`)
    }
      else {
        console.log(`Player: ${playerSelection}, computer: ${computerSelection}. Computer wins ${++computerWins}.`)
    }
}

// const playGame = (playerSelection, computerSelection) => {
//     let playerWins = 0;
//     let computerWins = 0;
//     playerSelection = playerSelection.toLowerCase()
//     if (playerSelection === computerSelection){
//         console.log(`Player: ${playerSelection}, computer: ${computerSelection}. It's a draw`)
//     } else if (playerSelection === "paper" && computerSelection === "rock"){
//         console.log(`Player: ${playerSelection}, computer: ${computerSelection}. Player wins ${++playerWins}.`)

//     } else if (playerSelection === "rock" && computerSelection === "scissors"){
//         console.log(`Player: ${playerSelection}, computer: ${computerSelection}. Player wins ${++playerWins}.`)

//     } else if (playerSelection === "scissors" && computerSelection === "paper"){
//         console.log(`Player: ${playerSelection}, computer: ${computerSelection}. Player wins ${++playerWins}.`)

//     } else {
//         computerWins++;
//         console.log(`Player: ${playerSelection}, computer: ${computerSelection}. Computer wins ${computerWins}.`)
//     }
// }

const gameToFive = () => {
    while(!(playerWins === 5 || computerWins === 5)){
        playGame(playerSelection, computerPlay());
    }
}

gameToFive();