function getComputerChoice(){
    options = ['rock','paper','scissors'];
    window.ComputerSelection = options[Math.floor(Math.random()*options.length)];
    console.log(ComputerSelection);
}
getComputerChoice();

function getPlayerChoice(){
    var PlayerChoice = prompt("Please choose rock, paper or scissors");
    PlayerSelection = PlayerChoice.toLowerCase();
    console.log(PlayerChoice);
};
getPlayerChoice();

playerCount = Number(0);
computerCount = Number(0);

function playRound(PlayerSelection, ComputerSelection) {
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
while (playerCount <6 && computerCount <6){
    playRound(PlayerSelection, ComputerSelection);
    console.log("Your score is", playerCount,"and the computer's score is",computerCount);
}

if (playerCount >=5){
    console.log("You won, congrats!");
}

if (computerCount >=5){
    console.log("You lost, what a bummer!")
}


