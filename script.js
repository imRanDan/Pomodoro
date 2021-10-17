const pomodoroTimer = document.querySelector('#pomodoro__timer');

const startButton = document.querySelector('#pomo__start');
const pauseButton = document.querySelector('#pomo__pause');
const stopButton = document.querySelector('#pomo__stop');

//Start stuff
startButton.addEventListener('click', () => {
    toggleClock();
})

//Pause Button stuff
pauseButton.addEventListener('click', () => {
    toggleClock();
})

//Stop button stuff
startButton.addEventListener('click', () => {
    toggleClock(true);
})

let isClockRunning = false;

// seconds = 25 mins
let workSessionPeriod = 1500;
let currentTimeLeftInPeriod = 1500;

//in seconds = 5 mins
let breakPeriodDuration = 300;

const toggleClock = (reset) => {
    if(reset) {
        //Stopping the timer
    } else {
        if(isClockRunning == true) {
            //Pausing the timer
            isClockRunning = false;
        } else {
            //Starting the timer
        } isClockRunning = true;
    }
}
 