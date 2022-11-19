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
            //Console.log() round information for coding purposes (PART 2)
            console.log(playerCount,"vs",computerCount);

            function displayResults(){
                //Display the results
                let roundValue = document.querySelector('#roundValue');
                roundValue.textContent = "Round "+roundNumber;
                results.appendChild(roundValue);
                let playerScore = document.querySelector('#playerScore');
                playerScore.textContent = "Your score: "+playerCount;
                results.appendChild(playerScore);
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
