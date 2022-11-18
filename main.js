function getComputerChoice(){
    options = ['rock','paper','scissors'];
    window.ComputerSelection = options[Math.floor(Math.random()*options.length)];
}