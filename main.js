function getComputerChoice(){
    options = ['rock','paper','scissors'];
    window.computerSelection = options[Math.floor(Math.random()*options.length)];
}

function playRound(){
    roundNumber = 1;
    // availableChoices is a node list. It looks and acts much like an array.
   const availableChoices = document.querySelectorAll('button');
    // we use the .forEach method to iterate through each button
    availableChoices.forEach((button) => {
        // and for each one we add a 'click' listener
        button.addEventListener('click', () => {
            //If button is clicked, the ID becomes the player's selection for the round
            let playerSelection = button.id;
            //The computer's choice is selected
            getComputerChoice();
            //Console log round information for developers sake
            console.log("Round",roundNumber)
            console.log("Player chooses:",playerSelection);
            console.log("Computer chooses:",computerSelection);
            //Next round is generated
            roundNumber+=1;
        });
    });

    //
 };

 playRound()
