let i = 0; //player counter
let j = 0; //pc counter 
const buttons = document.querySelectorAll('button')

//play a round using the Rock Paper Scissors buttons
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        let userInput= button.textContent.toLowerCase();
        let pcChoice=getPcChoice();
        let roundResult=playRound(userInput,pcChoice)
        displayResults(pcChoice,roundResult)
    })
})

function getPcChoice (){
const choices = ['rock', 'paper', 'scissors'];  
const pcPlay = Math.floor(Math.random() * choices.length);
return (choices[pcPlay]);
}

//displays the results & pc play, the counters will be added in the HTML
function displayResults(pcChoice,roundResult){
    const resultDisplay= document.querySelector('.resultDisplay')
    const pcDisplay =document.querySelector ('.pcDisplay')
    resultDisplay.textContent = roundResult;
    pcDisplay.textContent = pcChoice;
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
// function game (){
//     while (i<3 && j<3){
//         pcChoice= getPcChoice();
//         roundResult= playRound (userInput,pcChoice);
//             console.log (`Your play: ${userInput} \nPC play: ${pcChoice}`);
//             console.log (i,j);
//             console.log(roundResult);
//         return (game()) ;
//     }
    
//     if (i==3){ return console.log("You won the game bro cheers !")}
//     else if (j==3) {return console.log("tough luck buddy here's to living and fighting another day")}

// }

