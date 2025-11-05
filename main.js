
let situation;
let skillScore;
let dye;


function catchInput(){
    situation = document.getElementById("siteCheck").value;
    skillScore = document.getElementById("skillScore").value;
    dye = document.getElementById("dye").value;

    
    
}

function generateMessage(){
    let modifier = getModifier(skillScore);

    let successLimit = getSucessLimit(skillScore, modifier);

    let dice = setDye(dye);

    let success = getSucessRate(modifier,successLimit, dice);
}

function getModifier(skillScore){
    if (skillScore >= 17){
        return 5;
    }else if (skillScore >= 12 || skillScore <= 16){
        return 4;
    }else if (skillScore >= 9 || skillScore < 12){
        return 3;
    }else if(skillScore >= 5 || skillScore < 9){
        return 2;
    }else if(skillScore > 2 || skillScore <5){
        return 1;
    }else{
        return 0;
    }
}

function getSucessRate(modifier, successLimit, dice){
    let diceRoll = dice[Math.floor(Math.random()*dice.length)];

    if(diceRoll >= successLimit){

    }else{
        
    }
}

function getSucessLimit(){
/*Roll a D20 to see what sucesslimit the player have beat to suceed with their quest */
    return  Math.floor(Math.random()*20);
}

function setDye(dye){
    let diceSize = dye;
    let dice = [];

    for(let i= 1; i <= diceSize; i++){
        dice.push(i);
    }

    return dice;
}

