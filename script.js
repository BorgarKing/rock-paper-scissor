userInput = prompt ("rock paper scissors ?");

inputCheck (userInput);

//This function makes sure that the user input is either rock paper or scissors 

function inputCheck (userInput){


    if (userInput == "rock" || userInput == "paper" || userInput == "scissors"){ }
    
    else{
        alert ("it's rock paper scissors man how hard can it be come on !");
        window.userInput= prompt("Try again");
        return (inputCheck(window.userInput));
    }
}

console.log (userInput);

//PC choice is a random selection from the choices array

const choices = ['rock', 'paper', 'scissors'];    
const pcChoice = Math.floor(Math.random() * choices.length);
console.log(choices[pcChoice]);
