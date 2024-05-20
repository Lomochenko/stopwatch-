// variables

// btns
const startStop = document.getElementById('play');
const reset = document.getElementById('reset');
// pause
const pause = document.getElementById('pause');
// timer
let second = 0;
let minutes = 0;
let hours = 0;

// vaariables for leading zero
let leadingSecond = 0;
let leadingMinutes = 0;
let leadingHoures = 0;

//variable for set interval & timerStatus
let timerInterval = null;
let timerStatus = 'stopped'

// stop watch
function stopWatch() {

    second++
    if (second / 60 === 1) {
        second = 0;
        minutes++

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }

    }

    // leading time
    // second
    if (second < 10) {
        leadingSecond = "0" + second.toString();
    } else { leadingSecond = second }
    // minutes
    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else { leadingMinutes = minutes }
    // hours
    if (hours < 10) {
        leadingHoures = "0" + hours.toString();
    } else { leadingHoures = hours }

    let displayTime = document.getElementById('timer').innerHTML = leadingHoures + ":" + leadingMinutes + ":" + leadingSecond;
}

// window.setInterval(stopWatch,1000);
startStop.addEventListener('click', function () {
    if (timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('play').setAttribute('class', "bi bi-pause-circle");
        document.getElementById('play').setAttribute('id', "pause");
        timerStatus = "started";
    }
    else {
        window.clearInterval(timerInterval);
        document.getElementById('pause').setAttribute('class', "bi bi-play-circle");
        document.getElementById('pause').setAttribute('id', "play");
        timerStatus = 'stopped';
    }
})

// reset BTN
document.getElementById('reset').addEventListener('click', function () {
    window.clearInterval(timerInterval);
    second = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = "00:00:00";
    document.getElementById('pause').setAttribute('class', "bi bi-play-circle");
    document.getElementById('pause').setAttribute('id', "play");
    timerStatus = "stopped";
})