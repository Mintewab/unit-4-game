
var jewels = new Array();
var jewelValues = new Array();
var jewelshow = new Array();

var goalTotal = 0;
var playerTotal = 0;

var wins = 0;
var loses = 0;

var i = 0, i7 = 0;
var t = "X";

var A = new Array();


function gameStart() {
    jewels = document.getElementsByTagName("button");

    playerTotal = 0;

    for (i = 0; i < 4; i++) {
        //pick a random # from 1 to 12, 
        jewelValues[i] = Math.floor(Math.random() * 12) + 1;

        jewelshow[i] = 0;
    }
    goalTotal = Math.floor(Math.random() * 102) + 19;

    $("#displayGoalTotal").text("Goal Total = " + goalTotal);
    $("#displayPlayerTotal").text("Your Total = " + playerTotal);


    for (i = 0; i < 4; i++) {
        if (jewelshow[i] > 0) { jewels[i].innerHTML = jewelValues[i] }
        //else { jewels[i].innerHTML = "?" }
    }
    $("#winsDisplay").text("Wins: " + wins);
    $("#losesDisplay").text("Loses: " + loses);

}
function JewelClick(i7) {
    jewelshow[i7] = 1;
    playerTotal += jewelValues[i7];

    $("#displayPlayerTotal").text("Your Total = " + playerTotal);


    for (i = 0; i < 4; i++) {
        if (jewelshow[i] > 0) { jewels[i].innerHTML = jewelValues[i] }
        //else { jewels[i].innerHTML = "?" }
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
    if (playerTotal == goalTotal || playerTotal > goalTotal) { gameStart() }
}
