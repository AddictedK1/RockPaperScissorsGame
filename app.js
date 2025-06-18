let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector(".msgContainer");
const playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".compScore");

const generateChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

const draw = () => {
    msg.innerText = "draw bitch!";
    msg.style.backgroundColor = "pink"; 
};

const showWinner = (playerWin, userChoice, compChoice) => {
    if(playerWin)  {
        msg.innerText = `you Won! your ${userChoice} beats ${compChoice}`;
        console.log("you win!");
        userScore++;
        playerScore.innerText = userScore; 
        msg.style.backgroundColor = "green";
    }else {
        msg.innerText = `bad luck! ${compChoice} beats your ${userChoice}`;
        console.log("you lose!");
        computerScore++;
        compScore.innerText = computerScore;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = generateChoice();
    let playerWin=true;
    if(userChoice === compChoice)  {
        draw();
    }else {
        if(userChoice === "rock")  {
            playerWin = (compChoice === "scissors") ? true : false;  
        }else if (userChoice === "paper")  {
            playerWin = (compChoice === "rock") ? true : false;
        }else {
            playerWin = (compChoice === "paper") ? true : false;
        }
        showWinner(playerWin, userChoice, compChoice);
    }
    

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});