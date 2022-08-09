const playerText = document.querySelector('.player');
const computerText = document.querySelector('.computer');
const resultText = document.querySelector('.results');
const gameChoice = document.querySelectorAll('.option');
const playerScoreText = document.querySelector('.playerScore');
const compScoreText = document.querySelector('.compScore')
const winner = document.querySelector('.winner');
const reset = document.querySelector('.reset');

let player;
let computer;
let results;
let playerScore = 0;
let computerScore = 0;


run();
resetGame();

function run(){
gameChoice.forEach(button => button.addEventListener('click', () => {
    hideButtonEffects();
    disableButton();
    computerTurn();
    player = button.textContent;
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    checkWinner();
    endGame();
}))
}


function computerTurn(){
    const compArray = ['Rock', 'Paper', 'Scissors'];
    computer = compArray[Math.floor(Math.random() * compArray.length)];
    return computer;
}
function checkWinner(){
    if(player === computer){
        resultText.textContent = 'Results: DRAW!!!';
    }
    if(player === 'Rock' && computer === 'Scissors' || player === 'Paper' && computer === 'Rock' || player === 'Scissors' && computer === 'Paper'){
        resultText.textContent = 'Results: YOU WIN!',
        playerScoreText.textContent = `Player Wins: ` + ++playerScore;

                
    }else if(computer === 'Rock' && player === 'Scissors' || computer === 'Paper' && player === 'Rock' || computer === 'Scissors' && player === 'Paper'){
        resultText.textContent = 'Results: YOU LOSE!!',
        compScoreText.textContent = `Computer Wins: ` + ++computerScore;
    }
}
function endGame(){
    if(playerScore >=5){
        winner.textContent = 'Congrats!! You WINNN!!! Can you do it again???';
    }else if (computerScore >= 5){
        winner.textContent = 'LOOOOOOOOOOOSER!!! Try Again!';
    }
}
function hideButtonEffects () {
    if(playerScore >= 5 || computerScore >= 5){
const button = document.querySelectorAll('.option');
    button.forEach(button => {
    button.classList.add('nohover');
    })
    }
}
function disableButton(){
    if(playerScore >= 5 || computerScore >= 5){
     gameChoice.attr('disabled',1);   
    }        
}

function resetGame(){
    reset.addEventListener('click', () => {
        playerText.textContent = 'Player: ';
        computerText.textContent = 'Computer: ';
        resultText.textContent = 'Results: ';
        playerScoreText.textContent = `Player Wins: 0`;
        compScoreText.textContent = `Computer Wins: 0`;
        winner.textContent ='';
        playerScore = 0;
        computerScore = 0;
        const button = document.querySelectorAll('.option');
        button.forEach(button => {
            button.classList.remove('nohover');
        })
    })

}