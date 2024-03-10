
    function getComputerChoice() {
        // Generate a random number between 0 and 2
        const randomNumber = Math.floor(Math.random() * 3);
        
        // Assign 'Rock', 'Paper', or 'Scissors' based on the random number
        switch (randomNumber) {
          case 0:
            return 'Rock';
          case 1:
            return 'Paper';
          case 2:
            return 'Scissors';
        }
      }
      
      
      console.log(getComputerChoice());
      



// function playRound(playerSelection, computerSelection) {
//     // your code here!
//   }
  
//   const playerSelection = "rock";
//   const computerSelection = getComputerChoice();
//   console.log(playRound(playerSelection, computerSelection));
  