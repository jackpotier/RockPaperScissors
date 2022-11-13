function getComputerChoice(){
    options = ['rock','paper','scissors'];
    window.ComputerSelection = options[Math.floor(Math.random()*options.length)];
}

function getPlayerChoice(){
    var PlayerChoice = prompt("Please choose rock, paper or scissors");
    PlayerSelection = PlayerChoice.toLowerCase();
};

playerCount = Number(0);
computerCount = Number(0);
round = Number(1);

function playRound(PlayerSelection, ComputerSelection) {
    round+=1;
    console.log("You chose",PlayerSelection,"and the computer chose",ComputerSelection);
    if (PlayerSelection == ComputerSelection){
        console.log("Draw!");
    }
    if (ComputerSelection == 'rock'){
        if (PlayerSelection == 'paper'){
            console.log("You Win!",PlayerSelection,"beats",ComputerSelection);
            playerCount+=1;
        }
        if (PlayerSelection == 'scissors'){
            console.log("You Lose!",ComputerSelection,"beats",PlayerSelection);
            computerCount+=1;
        }
    }
    if (ComputerSelection == 'paper'){
        if (PlayerSelection == 'scissors'){
            console.log("You Win!",PlayerSelection,"beats",ComputerSelection);
            playerCount+=1;
        }
        if (PlayerSelection == 'rock'){
            console.log("You Lose!",ComputerSelection,"beats",PlayerSelection);
            computerCount+=1;
        }
    }
    if (ComputerSelection == 'scissors'){
        if (PlayerSelection == 'rock'){
            console.log("You Win!",PlayerSelection,"beats",ComputerSelection);
            playerCount+=1;
        }
        if (PlayerSelection == 'paper'){
            console.log("You Lose!",ComputerSelection,"beats",PlayerSelection);
            computerCount+=1;
        }
    }
}

while (playerCount <5 && computerCount <5){
    console.log("Round",round);
    getComputerChoice();
    getPlayerChoice();
    playRound(PlayerSelection, ComputerSelection);
    console.log("Your score is", playerCount,"and the computer's score is",computerCount);
}

if (playerCount >=5){
    console.log("You were the first to 5 points, congrats!");
}

if (computerCount >=5){
    console.log("The computer was the first to 5 points, what a bummer!")
}


