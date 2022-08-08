function getComputerChoice() {
    const computerArray = ['rock', 'paper', 'scissors'];
    const computerChoice = computerArray[Math.floor(Math.random() * computerArray.length)];
    return computerChoice;
}
function getPlayerChoice() {
    const decision = prompt ('Rock, Paper, or Scissors?').toLowerCase();
    return decision;
}
function playTime () {
    if (playerChoice == computerChoice) {
        return('DRAW!!');
    }
    if(playerChoice == 'rock') {
        if(computerChoice == 'scissors'){
            return player + 
            `\n`  + computer + `\n` + 
            `You win! Rock beats Scissors`;
        } else {
            return player + `\n` 
            + computer + `\n` + 
            'You lose! Paper beats rock';
        }
    }
    if(playerChoice == 'paper') {
        if(computerChoice == 'rock'){
        return player + `\n` +
        computer + `\n` +
        `You win! Paper beats rock`;
        } else {
        return player + `\n` +
        computer + `\n` +
        'You lose! Scissors beats paper';
        }
    }
    if(playerChoice == 'scissors') {
        if(computerChoice == 'rock'){
            return player +  `\n` +
            computer + `\n` + 
            'You lose! Rock beats scissors!';
        }else {
            return player + `\n` +
            computer +`\n` +
            'You win! Scissors beats paper!';
        }
    }
}


function game() {
    for (i = 0; i<5; i++) {
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice();
        computer = (`Computer chose: ` + computerChoice);
        player = (`You chose: ` + playerChoice);
        console.log(playTime());     
    }
}

computerChoice = getComputerChoice;
playerChoice = getPlayerChoice;
computer = (`Computer chose: ` + computerChoice);
player = (`You chose: ` + playerChoice);

game();