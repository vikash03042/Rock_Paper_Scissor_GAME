let userScore =0;
let compScore=0;

const choices = document.querySelectorAll(".choice");

let msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genComputerChoice = () => {
   //rock,paper,scissors

   const options = ["rock","paper","scissors"];
   const ranIdx = Math.floor(Math.random()*3);
   return options[ranIdx]; 
}

const drawGame = (userChoice,ComputerChoice) => {
    console.log("game was draw.");
    msg.innerText = `Game Was Drawn Play Again!  You Both choose Same`;
    msg.style.backgroundColor = "green";
};

const showWinner = (userWin,userChoice,ComputerChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won . Your ${userChoice} beats ${ComputerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText =`You lost. ${ComputerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
console.log("user Choice = ",userChoice);

const ComputerChoice = genComputerChoice();
console.log("computer choice =",ComputerChoice);

if(userChoice === ComputerChoice){
drawGame(userChoice,ComputerChoice);
}
else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin =  ComputerChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
        userWin =ComputerChoice === "scissors" ? false : true;
    }
    else{
        userWin = ComputerChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,ComputerChoice);
}
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
 console.log("choice was clicked",userChoice);
 playGame(userChoice);
    })
})