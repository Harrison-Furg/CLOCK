let currentTime = ["0", "0", ":", "0", "0", ":", "0", "0", ""];
let ampm = true;

function time() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if (ampm) {
        if (hours > 12) {
            hours = hours - 12;
            currentTime[8] = " PM";
        } else {
            currentTime[8] = " AM";
        }
    } else {
        currentTime[8] = "";
    }
    
    if (hours < 10) {
        currentTime[0] = "0";
        currentTime[1] = hours.toString();
    } else {
        currentTime[0] = hours.toString()[0];
        currentTime[1] = hours.toString()[1];
    }

    if (minutes < 10) {
        currentTime[3] = "0";
        currentTime[4] = minutes.toString();
    } else {
        currentTime[3] = minutes.toString()[0];
        currentTime[4] = minutes.toString()[1];
    } 

    if (seconds < 10) {
        currentTime[6] = "0";
        currentTime[7] = seconds.toString();
    } else {
        currentTime[6] = seconds.toString()[0];
        currentTime[7] = seconds.toString()[1];
    }

    let element = document.getElementById("clock");
    element.innerHTML = currentTime.join("");
    reload();
}

function reload() {
    setTimeout(time, 1000);
}

window.onload = time;