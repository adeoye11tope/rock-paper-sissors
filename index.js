function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0){
       console.log("rock");
       return "Rock".toLowerCase();
    }
    else if(choice === 1){
      console.log("paper")
      return "Paper".toLowerCase();
    }
    else{
      console.log("scissors")
      return "Scissors".toLowerCase();
    }
    
  }
  let computerCounter = 0;
  let playerCounter = 0;
  
  
  

  function playRound(playerSelection, computerSelection){
  
    
    if(computerSelection === playerSelection){
      console.log("It's a tie");
    }
  else if(computerSelection === "rock" && playerSelection === "scissors" ){
    console.log("You lose! Rock beats scissors");
    computerCounter += 1;
  }
   else if(computerSelection === "scissors" && playerSelection === "paper" ){
    console.log("You lose! Scissors beats paper");
    computerCounter += 1;
  }
   else if(computerSelection === "paper" && playerSelection === "rock" ){
    console.log("You lose! Paper beats rock");
    computerCounter += 1;

  }
   else if(computerSelection === "scissors" && playerSelection === "rock" ){
    console.log("You Win! Rock beats scissors");
    playerCounter += 1;
  }
   else if(computerSelection === "paper" && playerSelection === "scissors" ){
    console.log("You Win! Scissors beats paper"); 
    playerCounter += 1;

  }
   else{
    console.log("You Win! Paper beats rock");
    playerCounter += 1;
  }
  
  
  };
  function getChoice(){
    let playerSelection = prompt("Enter your choice either rock, paper or scissors").toLowerCase();
    let computerSelection = getComputerChoice();
    setTimeout(playRound(playerSelection, computerSelection), 20);

  }
  
  
  function game(){
    
    
    for(let counter = 0; counter < 5; counter++){
      getChoice();
    }
      
      
      
      

    
    if(computerCounter > playerCounter){
      console.log("Computer Wins!");
    }
    else{
      console.log("You Wins!");
    }
    
  }

  game();