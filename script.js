userInput = prompt ("rock paper scissors ?");

inputCheck (userInput);

//inputCheck is a function that makes sure the user input is either rock paper or scissors 

function inputCheck (userInput){


    if (userInput == "rock" || userInput == "paper" || userInput == "scissors"){ }
    
    else{
        alert ("it's rock paper scissors man how hard can it be come on !");
        window.userInput= prompt("Try again");
        return (inputCheck(window.userInput));
        
    }
}

console.log (userInput);

//getPcChoice is a function that returns a random selection from the choices array

const choices = ['rock', 'paper', 'scissors'];    

function getPcChoice (x){

const pcChoice = Math.floor(Math.random() * x.length);
console.log(x[pcChoice]);
return (x[pcChoice]);

}

let pc= getPcChoice(choices);

function game (pc,userInput){
if (userInput==pc){
    return ("oi it's a draw")
}  
 if (userInput== "rock"){
    if(pc=="paper"){return("Paper beats rock dumb shit")}
    else if (pc == "scissors") {return("congrats shit head")}
 }
 if (userInput== "paper"){
    if(pc=="scissors"){return("scissors beat paper dumb shit")}
    else if (pc == "rock") {return("congrats shit head")}
 }
 if (userInput== "scissors"){
    if(pc=="rock"){return("Rock beats scissors dumb shit")}
    else if (pc == "paper") {return("congrats shit head")}
 }
  
}
game (pc,userInput);