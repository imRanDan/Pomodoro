var hours = 0;
var mins = 0;
var seconds = 0;

$('#start').click(function()){
    startTimer();
});

$('#stop').click(function()){
    clearTimeout(timex);
});

$('#reset').click(function(){
    hours = 0;  mins = 0;    seconds = 0;
    $('#hours','#mins').html('00');
    $('#seconds').html('00');
});

function startTimer(){
    timex = setTimeout(function(){
        seconds++;
        if(seconds >59){seconds=0;mins++;
            if(mins>59){
                mins=0;hours++;
                if(hours <10)
    {$("#hours").text('0'+hours+':')} else
    $("#hours").text(hours+':');
            }}
}
