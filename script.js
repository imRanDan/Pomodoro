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
