console.log("Hello World")
let humanscore = 0
let computerscore = 0

function getComputerChoice(){
    let number= Math.floor(Math.random()*3)
    if (number===0){
        return "rock"
    }
    else if (number===1){
        return "paper"
    }
    else{
        return "scissors"
    }
}

function getHumanChoice(){
    let userchoice = prompt("Choose rock, paper or scissors");
    return userchoice;
}

function playround(computerChoice, humanChoice){
    if (computerChoice === "rock" && humanChoice.toLowerCase() === "paper"){
        console.log("You Won! Paper beats Rock")
        humanscore = humanscore+1
    }
    else if (computerChoice === "paper" && humanChoice.toLowerCase() === "rock"){
        console.log("You lose! Paper beats Rock")
        computerscore = computerscore+1
    }
    else if (computerChoice === "rock" && humanChoice.toLowerCase() === "scissors"){
        console.log("You lose! Rock beats Scissors")
        computerscore = computerscore+1
    }
    else if (computerChoice === "scissors" && humanChoice.toLowerCase() === "rock"){
        console.log("You Won! Rock beats Scissors")
        humanscore = humanscore+1
    }
    else if (computerChoice === "scissors" && humanChoice.toLowerCase() === "paper"){
        console.log("You lose! Scissors beats Paper")
        computerscore = computerscore+1
    }
    else if (computerChoice === "paper" && humanChoice.toLowerCase() === "scissors"){
        console.log("You Won! Scissors beats Paper")
        humanscore = humanscore+1
    }
    else{
        console.log("It's a Draw!")
    }
     
}
// let counter = 0

// playround(getComputerChoice(),getHumanChoice())

function playGame(){
    for (let i = 0; i < 5; i++){
        playround(getComputerChoice(),getHumanChoice())
    }
    console.log("Final Score Computer:", computerscore, "Final Score Human:", humanscore)
}

playGame()