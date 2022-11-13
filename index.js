function getComputerChoice(){
    options = ['rock','paper','scissors'];
    window.ComputerSelection = options[Math.floor(Math.random()*options.length)];
    console.log(ComputerSelection);
}
getComputerChoice();

function getPlayerChoice(){
    var PlayerChoice = prompt("Please choose rock, paper or scissors");
    PlayerSelection = PlayerChoice.toLowerCase();
    console.log(PlayerSelection)
};
getPlayerChoice();


function playRound(PlayerSelection, ComputerSelection) {
    if (PlayerSelection == ComputerSelection){
        console.log("Draw!");
    }
}
