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

            //Display the results
            let results = document.querySelector('#results');
            let roundValue = document.createElement('div');
            roundValue.classList.add('infobox');
            roundValue.textContent = "Round: "+roundNumber;
            let playerScore = document.createElement('div');
            playerScore.classList.add('infobox');
            playerScore.textContent = "Player's score: "+playerCount;
            let computerScore = document.createElement('div');
            computerScore.classList.add('infobox');
            computerScore.textContent = "Computer's score "+computerCount;
            //Call the new divs containing round information
            results.appendChild(roundValue)
            results.appendChild(playerScore);
            results.appendChild(computerScore);
            //Next round is generated
            roundNumber+=1;
        });
    });
    
    //
 };

 playRound()
