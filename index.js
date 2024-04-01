const choices = ['Rock', 'Paper', 'Scissors'];
const displayMessage = document.getElementById('result');
const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice')






function playRound(player){
    let computer = choices[Math.floor(Math.random()*3)];
    let result = '';
    console.log(computer)
    if(player===computer){
        result = "It's a tie"
    }
    else{
        switch(player){
            case 'Rock':
                result = (computer==='Scissors')? 'You Win' : 'You lose';
                break;
            case 'Paper':
                result = (computer==='Rock')? 'You win': 'You lose';
            case 'Scissors':
                result = (computer==='Paper')? 'You win' : 'You lose';
        }
    }
    displayMessage.textContent = result;
    playerChoice.textContent = player;
    computerChoice.textContent = computer;    
}



function reset(){
    displayMessage.textContent = 'Make your choice';
    playerChoice.textContent = '-';
    computerChoice.textContent = '-';
}
