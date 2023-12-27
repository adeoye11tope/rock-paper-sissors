let paperButton = document.getElementById("paper");
let rockButton = document.getElementById("rock");
let scissorsButton = document.getElementById("scissors");
let playerResult = document.getElementById("playerResult");
let computerResult = document.getElementById("computerResult");
let result = document.getElementById("result");
let computerScore = 0;
let playerScore = 0;
let winner = document.getElementById("winner");
let replay = document.getElementById("replay");
let i = 0;


function playRound(){
  
   
    paperButton.addEventListener("click", () => {
        playerResult.innerHTML = "paper";
        computerPlay();
        resultDisplay();
          
        if(paperButton.click){
            i++;
            
        }
     if(i === 5){
            displayWinner();
            if(displayWinner){
                i = 0;
                computerScore = 0;
                playerScore = 0;
            }
            window.setTimeout(removeWinner,2000);
        }
        
    
        
    });
    rockButton.addEventListener("click", () => {
        playerResult.innerHTML = "rock";
        computerPlay();
        resultDisplay();
       
        
        if(rockButton.click){
            i++;
    
        }
         if(i === 5){
            displayWinner();
            if(displayWinner){
                i = 0;
                computerScore = 0;
                playerScore = 0;
            }
            window.setTimeout(removeWinner,2000);
        }
      
        
        
     
    });
    scissorsButton.addEventListener("click", () => {
        playerResult.innerHTML = "scissors"
        computerPlay();
        resultDisplay();
          
        if(scissorsButton.click){
            i++;
            
        }
        if(i === 5){
            displayWinner();
            if(displayWinner){
                i = 0;
                computerScore = 0;
                playerScore = 0;
            }
            window.setTimeout(removeWinner,2000);
        }
        
        
    });
}
    
        



 
  
  




function computerPlay(){
    let randomize = Math.random();
    if(randomize < 0.35){
        computerResult.innerHTML = "paper";
    }
    else if(randomize < 0.65){
        computerResult.innerHTML = "scissors";
    }
    else if(randomize < 1){
        computerResult.innerHTML = "rock";
    }
}

function resultDisplay(){
    if((playerResult.innerHTML === "paper" && computerResult.innerHTML  === "rock")){
        playerScore += 1;
        result.innerHTML = `paper beats rock\n player have ${playerScore} point`;
    }
    else if((playerResult.innerHTML === "scissors" && computerResult.innerHTML === "paper")){
        playerScore += 1;
        result.innerHTML = `scissors beats paper \n player have ${playerScore} point`;
    }
    else if((playerResult.innerHTML === "rock" && computerResult.innerHTML === "scissors")){
        playerScore += 1;
        result.innerHTML = `rock beats scissors \n player have ${playerScore} point`;
    }
    else if((computerResult.innerHTML === "paper" && playerResult.innerHTML  === "rock")){
        computerScore += 1;
        result.innerHTML = `paper beats rock \n computer have ${computerScore} point`;
    }
    else if((computerResult.innerHTML === "scissors" && playerResult.innerHTML === "paper")){
        computerScore += 1;
        result.innerHTML = `scissors beats paper \n computer have ${computerScore} point`;
    }
    else if((computerResult.innerHTML === "rock" && playerResult.innerHTML === "scissors")){
        computerScore += 1;
        result.innerHTML = `rock beats scissors \n computer have ${computerScore} point`;
    }
    else{
        result.innerHTML = "it's a tie";
    }
    return result;
}
function displayWinner(){
    if(computerScore > playerScore){
        winner.innerHTML = "Computer Wins!!";
    }
    else if(playerScore > computerScore){
        winner.innerHTML = "You Win!!";
    }
    else{
        winner.innerHTML = "Final result is a tie nobody wins!!";
    }
    replay.innerHTML = "Play another round";
}
function removeWinner(){
    winner.innerHTML = " ";
}
playRound();
         

