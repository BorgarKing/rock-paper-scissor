let i = 0; //player counter
let j = 0; //pc counter 
const body = document.querySelector('body')
const buttons = document.querySelectorAll('button')
const resultDisplay= document.querySelector('.resultDisplay')
const pcDisplay =document.querySelector ('.pcDisplay')

//play a round using the Rock Paper Scissors buttons
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        let userInput= button.textContent.toLowerCase();
        game(userInput)
    })
})

function getPcChoice (){
const choices = ['rock', 'paper', 'scissors'];  
const pcPlay = Math.floor(Math.random() * choices.length);
return (choices[pcPlay]);
}

//displays the scores, results & pc play
function displayResults(pcChoice,roundResult,i,j){
    const playerScore= document.querySelector('.playerScore')
    const pcScore= document.querySelector('.pcScore')
    playerScore.textContent = `Your score: ${i}`;
    pcScore.textContent = `PC score: ${j}`;
    resultDisplay.textContent = roundResult;
    pcDisplay.textContent = `PC play: ${pcChoice}`;
}

//PlayRound function plays a round of good ol' rock paper scissors
function playRound (x,y){
    if (x==y){
        return ("oi it's a draw")
    }  
    if (x== "rock"){
        if(y=="paper"){return (`paper beats rock, you lost ${j+=1} round(s)`);}
        else if (y == "scissors") {return (`congrats you won ${i+=1} round(s)`)}
    }
    if (x== "paper"){
        if(y=="scissors"){return (`scissors beat paper, you lost ${j+=1} round(s)`)}
        else if (y == "rock") {return (`congrats you won ${i+=1} round(s)`)}
    }
    if (x== "scissors"){
        if(y=="rock"){return (`rock beats scissors, you lost ${j+=1} round(s)`)}
        else if (y == "paper") {return (`congrats you won ${i+=1} round(s)`)}
    }
}

//play a best of 5 game vs the PC
function game (userInput){
    if (i<3 && j<3){
        let pcChoice= getPcChoice();
        let roundResult=playRound(userInput,pcChoice)
        displayResults(pcChoice,roundResult,i,j)

        if (i==3){
            resultDisplay.textContent="You won the game bro cheers !"
            body.appendChild(playAgain)
        }

        else if (j==3) {
            resultDisplay.textContent= "tough luck buddy here's to living and fighting another day"
            body.appendChild(playAgain)
        }
    }
}

//A button to reload the game
const playAgain= document.createElement('button')
playAgain.textContent= "Play again" 
playAgain.addEventListener('click',()=> {
    i=0;
    j=0
    displayResults('','',i,j)
    pcDisplay.textContent ='';
    body.removeChild(playAgain) 
})




