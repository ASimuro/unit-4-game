$(document).ready(function() {

//variables
var winCount=0;
var lossCount=0;
var userScore=0;
var gameNumber= Math.floor(Math.random()*120)+19;
var crystal1= Math.floor(Math.random()*12)+1;
var crystal2= Math.floor(Math.random()*12)+1;
var crystal3= Math.floor(Math.random()*12)+1;
var crystal4= Math.floor(Math.random()*12)+1;
//stats at start of game
$("#winScore").text("Wins: " + winCount);
$("#lossScore").text("Losses: " + lossCount);
$("#gameScore").text(gameNumber);
$("#totalScore").text(userScore);
console.log(gameScore);
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);

//winning game function
var gameWin = function(){
    winCount++;
    $("#winScore").text("Wins: " + winCount);
    reset();
}

//loss function
var gameLoss = function(){
    lossCount++;
    $("#lossScore").text("Losses: " + lossCount);
    reset();
}

//crystal1 function
$("#crystal1").click(function(){
userScore = userScore + crystal1;
$("#totalScore").text(userScore);
    if(userScore===gameNumber){
        gameWin();
    }
    else if(userScore>gameNumber){
        gameLoss();
    }
});

$("#crystal2").click(function(){
    userScore = userScore + crystal2;
    $("#totalScore").text(userScore);
        if(userScore===gameNumber){
            gameWin();
        }
        else if(userScore>gameNumber){
            gameLoss();
        }
    });

$("#crystal3").click(function(){
    userScore = userScore + crystal3;
    $("#totalScore").text(userScore);
        if(userScore===gameNumber){
            gameWin();
        }
        else if(userScore>gameNumber){
            gameLoss();
        }
    });

$("#crystal4").click(function(){
    userScore = userScore + crystal4;
    $("#totalScore").text(userScore);
        if(userScore===gameNumber){
            gameWin();
        }
        else if(userScore>gameNumber){
            gameLoss();
        }
    });

var reset = function(){
    userScore=0;
    var gameNumber=Math.floor(Math.random()*120)+19;
    crystal1=Math.floor(Math.random()*12)+1;
    crystal2=Math.floor(Math.random()*12)+1;
    crystal3=Math.floor(Math.random()*12)+1;
    crystal4=Math.floor(Math.random()*12)+1;
    $("#gameScore").text(gameNumber);
    $("#totalScore").text(userScore);
    console.log(gameNumber);
    console.log(userScore);
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);
};

});