function getComputerChoice(){
    options = ['rock','paper','scissors'];
    computerSelection = options[Math.floor(Math.random()*options.length)];
}

function playRound(){
    //Set starting variables
    roundNumber = 1;
    playerCount = 0;
    computerCount = 0;

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

            //Run through win/loss logic
            if (playerSelection == computerSelection){
                console.log("Draw!");
            }
            if (computerSelection == 'rock'){
                if (playerSelection == 'paper'){
                    console.log("You Win!",playerSelection,"beats",computerSelection);
                    playerCount+=1;
                }
                if (playerSelection == 'scissors'){
                    console.log("You Lose!",computerSelection,"beats",playerSelection);
                    computerCount+=1;
                }
            }
            if (computerSelection == 'paper'){
                if (playerSelection == 'scissors'){
                    console.log("You Win!",playerSelection,"beats",computerSelection);
                    playerCount+=1;
                }
                if (playerSelection == 'rock'){
                    console.log("You Lose!",computerSelection,"beats",playerSelection);
                    computerCount+=1;
                }
            }
            if (computerSelection == 'scissors'){
                if (playerSelection == 'rock'){
                    console.log("You Win!",playerSelection,"beats",computerSelection);
                    playerCount+=1;
                }
                if (playerSelection == 'paper'){
                    console.log("You Lose!",computerSelection,"beats",playerSelection);
                    computerCount+=1;
                }
            }
            //Show both scores for developers sake
            console.log("Player's score is:",playerCount);
            console.log("Computer's score is:",computerCount);
            //Next round is generated
            roundNumber+=1;
        });
    });
    
    //
 };

 playRound()
