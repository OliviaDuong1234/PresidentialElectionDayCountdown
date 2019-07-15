var endDate= new Date ("Nov 3, 2020 11:30:00") .getTime();
var timer = setInterval (function() {

let now =new Date("Nov 3, 2020").getTime("11:30:00");
let t = endDate - now;


if (t >= 0) {

    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours= Math.floor((t % (1000 * 60 * 60 * 24)) / (100 * 60 * 60));
    let minutes= Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds= Math.floor((t % (1000 * 60)) / 1000);

        document.getElementById("timer-days").innerHTML = 476 +
        "<span class='label'>DAY(S)</span>";

        document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) +
        "<span class='label'>HR(S)</span>";

        document.getElementById("timer-minutes").innerHTML = ("0"+minutes).slice(-2) +
        "<span class='label'>MIN(S)</span>";

        document.getElementById("timer-seconds").innerHTML = ("0"+seconds).slice(-2) +
        "<span class='label'>SEC(S)</span>";

    } else {

        document.getElementById("timer").innerHTML = "The countdown is over!";

    }

}, 1000);
