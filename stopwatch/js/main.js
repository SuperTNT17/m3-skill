let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let interval;
seconds = "0" + seconds;
minutes = "0" + minutes;

let startButton = document.getElementById("js--start");
startButton.onclick = function () {
    startRoll();
    startButton.style.display = "none";
    stopButton.style.display = "inline";
    interval = setInterval(count, 10);
};

let stopButton = document.getElementById("js--stop");
stopButton.onclick = function () {
    loadImage();
    clearInterval(interval);
    startButton.style.display = "inline";
    stopButton.style.display = "none";
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
    if (milliseconds < 10) {
        milliseconds = "0" + milliseconds;
    };
    timer.innerHTML = `${minutes}:${seconds}:${milliseconds}`;
};

function addSecond() {
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

let slider = document.getElementById("js--slider");
slider.value = 2;

let body = document.getElementsByTagName("body")[0];
body.style.fontSize = slider.value + "rem";

let sliderValue = document.getElementById("js--sliderValue");
sliderValue.innerText = slider.value + "x";

slider.addEventListener("input", (e) => {
    sliderValue.innerText = slider.value + "x";
    body.style.fontSize = slider.value + "rem";
});

let image = document.getElementById("js--image");
function startRoll() {
    image.src = "https://media1.tenor.com/m/x8v1oNUOmg4AAAAd/rickroll-roll.gif";
}

loadImage();
function loadImage() {
    // data ophalen
    let data = fetch("data.json").then(
        function (nepData) {
            return nepData.json();
        }).then(
            function (echteData) {
                console.log(echteData.text);
                image.src = echteData.img;
                image.alt = echteData.text;
            }
        );
}