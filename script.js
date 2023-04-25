let userInput =inputCheck (prompt ("rock paper scissors ?"));

// inputCheck is a function that makes sure the user input is either rock paper or scissors 

function inputCheck (x){


    if (x == "rock" || x == "paper" || x == "scissors"){

        return (x);
     }
    
    else{
        alert ("it's rock paper scissors man how hard can it be come on !");
        x= prompt("Try again");
        return (inputCheck(x));
        
    }
}

console.log (userInput);

//getPcChoice is a function that returns a random selection from the choices array

const choices = ['rock', 'paper', 'scissors'];    

function getPcChoice (x){

const pcChoice = Math.floor(Math.random() * x.length);
return (x[pcChoice]);
}

let pcChoice= getPcChoice(choices);

console.log (userInput, pcChoice);

//PlayRound function plays a round of good ol' rock paper scissors

function playRound (x,y){

if (x==y){
    return ("oi it's a draw")
}  
 if (x== "rock"){
    if(y=="paper"){result ="Paper beats rock dumb shit";}
    else if (y == "scissors") {result ="congrats shit head";}
 }
 if (x== "paper"){
    if(y=="scissors"){result ="scissors beat paper dumb shit";}
    else if (y == "rock") {result ="congrats shit head";}
 }
 if (x== "scissors"){
    if(y=="rock"){result ="Rock beats scissors dumb shit";}
    else if (y == "paper") {result ="congrats shit head";}
 }

 return (result);
}

let roundResult= playRound (userInput,pcChoice);
console.log(roundResult);
