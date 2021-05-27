console.log("Hello World JS");

function computerPlay() {
  let value = Math.floor(Math.random() * 3);
  let choice;
  switch (value) {
    case 0:
      choice = "rock";
      break;
    case 1:
      choice = "paper";
      break;
    case 2:
      choice = "scissors";
      break;
  }
  return choice;
}

function playRound(playerSelection, computerSelection) {
  let playerChoice = playerSelection.toLowerCase();
  if (playerChoice == computerSelection) {
      return "it's a tie!"
  }
  switch (playerChoice) {
    case "rock":
      switch (computerSelection) {
        case "paper":
            return "You Lose! Paper beats Rock"
            break;
        case "scissors":
            return "You Win! Rock beats Scissors"
            break;
      }
      break;

      case "paper":
        switch (computerSelection) {
            case "scissors":
                return "You Lose! Scissors beats Paper"
                break;
            case "rock":
                return "You Win! Paper beats Rock"
                break;
          }
          break;

        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return "You Lose! Rock beats Scissors"
                    break;
                case "paper":
                    return "You Win! Scissors beats Paper"
                    break;
              }
              break;

  }
}


function game() {
    let score = 0
    let winner
    for (i = 0; i < 5; i++ ) {
        const playerSelection = prompt("Please enter either rock, paper or scissors");
        const computerSelection = computerPlay();
        if (playRound(playerSelection, computerSelection).match(/win/i)) {
            score += 1
        }
        console.log(playRound(playerSelection, computerSelection))
        console.log("your current score is: " + score)
    }
    if (score > 2) {
        winner = "win"
    } else {
        winner = "lose"
    }

    return "You " + winner + " with a score of " + score 
}

console.log(game())