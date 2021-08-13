let playerSelection;
// const rock = document.querySelector(".rock")
// const paper = document.querySelector(".paper")
// const scissors = document.querySelector(".scissors")
const buttons = document.querySelectorAll(".choice");
const display = document.createElement("h2");
const body = document.querySelector("body");
const reset = document.querySelector(".reset");

let playerWins = 0;
let computerWins = 0;
let gameOver = false;

function computerPlay(){
    let random = Math.floor(Math.random() * 3)
    if (random === 0){
        return "rock"
    } else if (random === 1){
        return "paper"
    } else if (random === 2){
        return "scissors"
    }
}

function playGame(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (!gameOver){
        if (playerSelection === computerSelection){
    
            display.innerText += `Player: ${playerSelection}, computer: ${computerSelection}. It's a draw. \n`
            body.append(display);
        } else if (playerSelection === "paper" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper"){
            playerWins++;
            display.innerText += `Player: ${playerSelection}, computer: ${computerSelection}. Player wins ${playerWins}. \n`
            body.append(display);
        }
          else {
            computerWins++;
            display.innerText += `Player: ${playerSelection}, computer: ${computerSelection}. Computer wins ${computerWins}. \n`
            body.append(display);
        }
    } 
    if (playerWins === 5){
        gameOver = true;
        display.innerText = `GAME OVER. Player WON !`
    } else if (computerWins === 5){
        gameOver = true;
        display.innerText = `TOO BAD! *Computer laughs*`
    }
}

function resetGame(){

    display.innerText = "";
    playerWins = 0;
    computerWins = 0;
    gameOver = false;
}

reset.addEventListener("click", resetGame);

buttons.forEach(button => button.addEventListener("click", () => {
    playerSelection = button.innerText;

    playGame(playerSelection, computerPlay());
}))
