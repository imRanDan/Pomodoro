var seconds = 00;
var tens = 00;
var appendTens = document.getElementById('tens');
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var interval; //to store timer values!

//this function runs as soon as you click start!

function startTimer(){
    tens++;

    if(tens < 9){
        appendTens.innerHTML = "0" + tens;
    }
    if (tens)
}
