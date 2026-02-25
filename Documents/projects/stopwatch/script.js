let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;

const display = document.getElementById("display");
const lapBtn = document.getElementById("lap");
const lapsList = document.getElementById("laps");
let laps = [];

function updateDisplay() {
    display.textContent = formatTime();
}

function formatTime() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    return `${h}:${m}:${s}`;
}

function renderLaps() {
    lapsList.innerHTML = "";
    for (let i = laps.length - 1; i >= 0; i--) {
        const li = document.createElement("li");
        const num = document.createElement("span");
        num.className = "lap-number";
        num.textContent = `Lap ${i + 1}`;

        const time = document.createElement("span");
        time.className = "lap-time";
        time.textContent = laps[i];

        li.appendChild(num);
        li.appendChild(time);
        lapsList.appendChild(li);
    }
}

function recordLap() {
   
    if (hours === 0 && minutes === 0 && seconds === 0) return;
    laps.push(formatTime());
    renderLaps();
}

function startTimer() {
    if (timer !== null) return;

    timer = setInterval(() => {
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    laps = [];
    renderLaps();
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
lapBtn.addEventListener("click", recordLap);