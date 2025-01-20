const targetDate = new Date("January 25, 2025 00:00:00").getTime();

const countdownTimer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;


    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("hour").innerText = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("hour").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        alert("Countdown finished!");
    }
}, 1000);