function getComputerChoice(){
    options = ['rock','paper','scissors']
    var OptionPicked = options[Math.floor(Math.random()*options.length)];
}

function getPlayerChoice(){
    let PlayerChoice = prompt("Choose rock, paper or scissors")
    PlayerChoice = PlayerChoice.toLowerCase()
}