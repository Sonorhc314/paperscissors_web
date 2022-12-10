//global variables
//--------------------------------

const tools = ["Scissors", "Paper", "Rock"];

const ButtonStart = document.querySelector("button.main");
let roundNumber = 0;
let compNumber = 0;
let playerNumber = 0;
//----------------------------------

function remove_dis() {
  //restart button
  document.getElementById("paper").disabled = false;
  document.getElementById("rock").disabled = false;
  document.getElementById("scissors").disabled = false;
}

function computerPlay() {
  //reandom select
  return tools[Math.floor(Math.random() * 3)];
}

function pressed(pressed_value) {
  //onclick function for player selection
  let computerChoice = computerPlay();
  playRound(pressed_value, computerChoice);
}

function playRound(PlayerChoice, ComputerChoice) {
  const player = document.getElementById("player_count");
  const comp = document.getElementById("comp_count");
  const round = document.getElementById("round");

  roundNumber++;
  round.textContent = `${roundNumber}`;
  if (
    (PlayerChoice == "Rock" && ComputerChoice == "Scissors") ||
    (PlayerChoice == "Paper" && ComputerChoice == "Rock") ||
    (PlayerChoice == "Scissors" && ComputerChoice == "Paper")
  ) {
    // wins
    playerNumber++;
    player.textContent = `${playerNumber}`;
  } else if (PlayerChoice == ComputerChoice) {
    // draw
    compNumber++;
    playerNumber++;
    comp.textContent = `${compNumber}`;
    player.textContent = `${playerNumber}`;
  } else {
    // computer wins
    compNumber++;
    comp.textContent = `${compNumber}`;
  }
  // game won
  if (roundNumber == 5) {
    document.getElementById("paper").disabled = true;
    document.getElementById("rock").disabled = true;
    document.getElementById("scissors").disabled = true;
    const winner = document.getElementById("whowon");
    if (compNumber > playerNumber) {
      winner.textContent = `Computer won ${playerNumber}:${compNumber}`;
    } else if (compNumber < playerNumber) {
      winner.textContent = `Player won, res - ${playerNumber}:${compNumber}`;
    } else {
      winner.textContent = `Draw!`;
    }
    roundNumber = 0;
    compNumber = 0;
    playerNumber = 0;
    player.textContent = `${playerNumber}`;
    round.textContent = `${roundNumber}`;
    comp.textContent = `${compNumber}`;
  }
}
