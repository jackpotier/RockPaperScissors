function getComputerChoice(){
    options = ['rock','paper','scissors'];
    computerSelection = options[Math.floor(Math.random()*options.length)];
}

function playRound(){
    //Set starting variables
    var roundNumber = 1;
    var playerCount = 0;
    var computerCount = 0;

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

            //Console.log() round information for coding purposes (PART 1)
            console.log("Round",roundNumber)

            //Run through win/loss logic
            if (computerSelection == 'rock'){
                if (playerSelection == 'paper'){
                    playerCount+=1;
                }
                if (playerSelection == 'scissors'){
                    computerCount+=1;
                }
            }
            if (computerSelection == 'paper'){
                if (playerSelection == 'scissors'){
                    playerCount+=1;
                }
                if (playerSelection == 'rock'){
                    computerCount+=1;
                }
            }
            if (computerSelection == 'scissors'){
                if (playerSelection == 'rock'){
                    playerCount+=1;
                }
                if (playerSelection == 'paper'){
                    computerCount+=1;
                }
            }

            function displayResults(){

                //Change the round number
                let roundValue = document.querySelector('#roundValue');
                roundValue.textContent = "Round "+roundNumber;
                results.appendChild(roundValue);

                //Change the displaying text about the round information
                let talk = document.querySelector('#talk')
                talk.textContent = "You chose "+playerSelection+" and the computer chose "+computerSelection;
                results.appendChild(talk);

                //Change the player's score
                let playerScore = document.querySelector('#playerScore');
                playerScore.textContent = "Your score: "+playerCount;
                results.appendChild(playerScore);

                //Change the computer's score
                let computerScore = document.querySelector('#computerScore');
                computerScore.textContent = "Computer's score: "+computerCount;
                results.appendChild(computerScore);
            }
            displayResults();

            //Next round is generated
            roundNumber+=1;
        });
    });
    
    //
 };

 playRound()
