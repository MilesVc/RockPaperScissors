console.log("Hello World")
let humanscore = 0
let computerscore = 0
const div = document.createElement("div")
const button = document.querySelector(".scissors")
button.parentNode.insertBefore(div, button.nextSibling)
const div2 = document.createElement("div")
button.parentNode.insertBefore(div2, button.nextSibling)


function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)
    if (number === 0) {
        return "rock"
    }
    else if (number === 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function playround(computerChoice, humanChoice) {
    if (humanscore >= 5) {
        div2.textContent = (`You Have Won!! Game is Over. Your Score: ${humanscore} & Computer Score: ${computerscore}`);
    }
    else if (computerscore >= 5) {
        div2.textContent = (`Game is Over. Your Score: ${humanscore} & Computer Score: ${computerscore}`);
    }
    else {
        if (computerChoice === "rock" && humanChoice.toLowerCase() === "paper") {
            div.textContent = ('You Won! Paper beats Rock')
            console.log("You Won! Paper beats Rock")
            humanscore = humanscore + 1
        }
        else if (computerChoice === "paper" && humanChoice.toLowerCase() === "rock") {
            div.textContent = ('You lose! Paper beats Rock')
            console.log("You lose! Paper beats Rock")
            computerscore = computerscore + 1
        }
        else if (computerChoice === "rock" && humanChoice.toLowerCase() === "scissors") {
            div.textContent = ('You lose! Rock beats Scissors')
            console.log("You lose! Rock beats Scissors")
            computerscore = computerscore + 1
        }
        else if (computerChoice === "scissors" && humanChoice.toLowerCase() === "rock") {
            div.textContent = ('You Won! Rock beats Scissors')
            console.log("You Won! Rock beats Scissors")
            humanscore = humanscore + 1
        }
        else if (computerChoice === "scissors" && humanChoice.toLowerCase() === "paper") {
            div.textContent = ('You lose! Scissors beats Paper')
            console.log("You lose! Scissors beats Paper")
            computerscore = computerscore + 1
        }
        else if (computerChoice === "paper" && humanChoice.toLowerCase() === "scissors") {
            div.textContent = ('You Won! Scissors beats Paper')
            console.log("You Won! Scissors beats Paper")
            humanscore = humanscore + 1
        }
        else {
            console.log("It's a Draw!")
            div.textContent = (`It's a Draw!`)

        }
    }

}


function playGame() {
    console.log("Final Score Computer:", computerscore, "Final Score Human:",)
}


playGame()

div2.textContent = computerscore

const rock = document.querySelector('.rock')
rock.addEventListener('click', () => {
    playround(getComputerChoice(), "rock")
})

const paper = document.querySelector('.paper')
paper.addEventListener('click', () => {
    playround(getComputerChoice(), "paper")
})

const scissors = document.querySelector('.scissors')
scissors.addEventListener('click', () => {
    playround(getComputerChoice(), "scissors")
})


