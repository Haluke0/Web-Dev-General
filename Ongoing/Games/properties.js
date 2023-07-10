const userChoiceText = document.getElementById("yourChoice");
const playerChoiceText = document.getElementById("playerChoice");
const baseDiv = document.getElementById("base");
const possibleChoices = document.querySelectorAll("button");
const progressBar = document.getElementById("progress");
const scoreBoard = document.getElementById("scoreboard")
const curScore = document.getElementById("curscore")
var boost = 1;
var randomizedChoice = 0; //actually the computer-generated choice, after all we ARE the "computer" so our choice is actually "computerChoice"
var userChoice = 0; //the one we choose
var perCent = Number(progressBar.style.getPropertyValue("--progress-height").replace("%",""));
var streak= 0;
var hiScore = 0;
var cooldown = false;
function onLoad(){
    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) =>{
        
        if (!cooldown){
            userChoice = e.target.id;
            userChoiceText.innerHTML = "YOUR CHOICE: "+ userChoice.toUpperCase();
            processTurn()
        }
        cooldown = true
    }))
}
function proceed(){
    baseDiv.style.display = "flex";
    document.getElementById("title").innerHTML = "SELECT"
    document.getElementById("intro").innerHTML = "Select one. Know that your only your best work is appreciated and that you are easily repleaceable"
    document.getElementById("proceed").style.display = "none";
}
function flattenBorderRadius(){
    progressBar.classList.add("border-radius-0")
}
function updateProgressHeight(increment){
    perCent += increment;
    if (perCent < 0){perCent = 0;}
    if (perCent >= 100){
        flattenBorderRadius()
        perCent = 100;
    }
    progressBar.style.setProperty("--progress-height", String(perCent) + "%");
}
function processTurn(){
    randomSelect();
    setTimeout(function(){
        playerChoiceText.innerHTML = "PLAYER CHOICE: "+ randomizedChoice.toUpperCase();
    },300)
    if (isUserWin() == 1){// 1 win, 0 draw, -1 defeat

        setTimeout(function(){//win
            updateProgressHeight(10 * boost); 
            cooldown = false
            updateStreak() // not working
        },1000)
        setTimeout(function(){
            updateTexts(true)
        },800)
        
    }else if(isUserWin() == -1){//loss
        setTimeout(function(){
            updateProgressHeight(-10);
            cooldown = false
            updateStreak(true) 
        },1000)
        setTimeout(function(){
            updateTexts(false)
        },800)
    }else{ //draw
        setTimeout(function(){
            updateStreak() 
            updateProgressHeight(5 * boost);
            cooldown = false
        },1000)
        setTimeout(function(){
            updateTexts(false,true)
        },800)
    }
}
function randomSelect(){
    randomizedChoice = Math.floor(Math.random() * possibleChoices.length) + 1;
    switch (randomizedChoice){
        case 1:
            randomizedChoice = "rock"
            break;
        case 2:
            randomizedChoice = "paper"
            break;
        case 3:
            randomizedChoice = "scissors"
            break;
    }
}
function updateTexts(positive,draw = false){
    if (draw){
        userChoiceText.classList.add("positive","negative")
        playerChoiceText.classList.add("positive","negative")
        setTimeout(function(){
            playerChoiceText.classList.remove("positive","negative")
            userChoiceText.classList.remove("positive","negative")
        },1000)
    }else{
        current = positive?"positive":"negative";
        userChoiceText.classList.add(current)
        playerChoiceText.classList.add(current)
        setTimeout(function(){
            userChoiceText.classList.remove(current)
            playerChoiceText.classList.remove(current)
        },1000)
    }

}
function isUserWin(){
    if (userChoice == "paper"){
        switch (randomizedChoice){
            case "rock":
                return 1
                break;
            case "paper":
                return 0
                break;
            case"scissors":
                return -1
                break;
        }
    }else if (userChoice == "rock"){
        switch (randomizedChoice){
            case "scissors":
                return 1
                break;
            case "rock":
                return 0
                break;
            case"paper":
                return -1
                break;
        }
    }else{
        switch (randomizedChoice){
            case "paper":
                return 1
                break;
            case "scissors":
                return 0
                break;
            case"rock":
                return -1
                break;
        }
    }
}
function updateStreak(erase = false){
    if (!erase) {streak++}
    if (hiScore < streak){
        hiScore = streak
        scoreBoard.innerHTML = "HI Score: " + hiScore;
    }
    if (erase){streak = 0}
    curScore.innerHTML = "Currnt Score: " + streak;
    
}