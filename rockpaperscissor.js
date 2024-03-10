function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to lowercase for case-insensitive comparison
    playerSelection = playerSelection.toLowerCase();

    // Define the possible outcomes
    const outcomes = {
        rock: { beats: 'scissors', losesTo: 'paper' },
        paper: { beats: 'rock', losesTo: 'scissors' },
        scissors: { beats: 'paper', losesTo: 'rock' }
    };

    // Check if it's a tie
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    // Check if the player wins
    if (outcomes[playerSelection].beats === computerSelection) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    // Otherwise, the player loses
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function getComputerChoice() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
    
    // Assign 'Rock', 'Paper', or 'Scissors' based on the random number
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    // Play five rounds
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(computerSelection);
        console.log(result);

        // Update scores
        if (result.startsWith("You Win")) {
            playerScore++;
        } else if (result.startsWith("You Lose")) {
            computerScore++;
        }
    }

    // Determine the winner
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }
}

// Start the game
playGame();
