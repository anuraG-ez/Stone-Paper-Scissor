let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const choiceUser = document.querySelector("#userChoice");
const choiceComp = document.querySelector("#compChoice");

const gencompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx]
}

const draw = (userChoice,compChoice) =>{
    choiceUser.innerText = `Your Choice:  ${userChoice}`;
    choiceComp.innerText = `Comp Choice:  ${compChoice}`;
    msg.innerText = "It's a Draw🤝.Play again."
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,compChoice,userChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win!🥳";
        msg.style.backgroundColor = "green";
        choiceUser.innerText = `Your Choice:  ${userChoice}`;
        choiceComp.innerText = `Comp Choice:  ${compChoice}`;
    }
    else{
        choiceUser.innerText = `Your Choice:  ${userChoice}`;
        choiceComp.innerText = `Comp Choice:  ${compChoice}`;
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "Awww! You lose 😞";
        msg.style.backgroundColor = "#c1121f";
    }
}

const playGame= (userChoice)=>{
   
   const compChoice = gencompChoice();
  

   if(userChoice === compChoice){
    // Draw Game
    draw(userChoice,compChoice);
   } else{
     let userWin = true;
     if(userChoice === "rock"){
        userWin = compChoice==="paper"? false : true;
     } else if(userChoice === "paper"){
        userWin = compChoice === "scissors"? false : true;
     } else{
        userWin = compChoice ==="rock"? false : true;
     }
     showWinner(userWin,compChoice,userChoice);
   }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})