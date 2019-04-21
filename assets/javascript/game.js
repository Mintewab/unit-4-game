
var Jewels = new Array();
var jewelValues = new Array();
var jewelShow = new Array();

var goalTotal = 0;
var playerTotal = 0;

var wins = 0;
var loses = 0;

var i = 0, i7 = 0;
var t = "X";

var A = new Array();


function GameStart() {
    Jewels = document.getElementsByTagName("button");

    playerTotal = 0;

    for (i = 0; i < 4; i++) {
        //pick a random # from 1 to 12, 
        jewelValues[i] = Math.floor(Math.random() * 12) + 1;

        jewelShow[i] = 0;
        //Jewels[i].innerHTML=jewelValues[i];
    }
    goalTotal = Math.floor(Math.random() * 102) + 19;
    //document.getElementById("Info3").innerHTML = "goal total = "+ goalTotal;
    document.getElementById("DisplayGoalTotal").innerHTML = "Goal Total = " + goalTotal;
    document.getElementById("DisplayPlayerTotal").innerHTML = "Your Total = " + playerTotal;

    for (i = 0; i < 4; i++) {
        if (jewelShow[i] > 0) { Jewels[i].innerHTML = jewelValues[i] }
        else { Jewels[i].innerHTML = "?" }
    }
    document.getElementById("WinsDisplay").innerHTML = "Wins: " + wins;
    document.getElementById("LosesDisplay").innerHTML = "Loses: " + loses;
}
function JewelClick(i7) {
    jewelShow[i7] = 1;
    playerTotal += jewelValues[i7];

    document.getElementById("DisplayPlayerTotal").innerHTML = "Your Total = " + playerTotal;

    for (i = 0; i < 4; i++) {
        if (jewelShow[i] > 0) { Jewels[i].innerHTML = jewelValues[i] }
        else { Jewels[i].innerHTML = "?" }
    }
    if (playerTotal == goalTotal) {
        //t = "You WIN!!!";
        wins++;
    }
    if (playerTotal > goalTotal) {
        //t = "You are a LOSER!!! ";
        loses++;
    }
    //document.getElementById("Info").innerHTML = t;
    if (playerTotal == goalTotal || playerTotal > goalTotal) { GameStart() }
}
