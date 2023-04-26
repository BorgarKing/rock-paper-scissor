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

    let i = 0; //player counter
    let j = 0; //pc counter 
    
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

let roundResult= playRound (userInput,pcChoice);
console.log(roundResult);
