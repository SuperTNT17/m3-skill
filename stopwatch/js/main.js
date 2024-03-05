let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let interval;
seconds = "0" + seconds;
minutes = "0" + minutes;

let startButton = document.getElementById("js--start");
startButton.onclick = function () {
    startButton.disabled = true;
    stopButton.disabled = false;
    interval = setInterval(count, 1);
};

let stopButton = document.getElementById("js--stop");
stopButton.disabled = true;
stopButton.onclick = function () {
    clearInterval(interval);
    startButton.disabled = false;
    stopButton.disabled = true;
};

const resetButton = document.getElementById("js--reset");
resetButton.onclick = function () {
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    milliseconds = "0" + milliseconds;
    seconds = "0" + seconds;
    minutes = "0" + minutes;
    timer.innerHTML = `${minutes}:${seconds}:${milliseconds}`;
};

let timer = document.getElementById("js--timer");
function count() {
    milliseconds++;
    if (milliseconds == 100) {
        addSecond();
        milliseconds = 0;
    };
    timer.innerHTML = `${minutes}:${seconds}:${milliseconds}`;
};

function addSecond(){
    seconds++;
    if (seconds == 60) {
        addMinute();
        seconds = 0;
    };
    if (seconds < 10) {
        seconds = "0" + seconds;
    };
}

function addMinute() {
    minutes++;
    if (minutes < 10) {
        minutes = "0" + minutes;
    };
};