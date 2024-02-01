document.addEventListener("DOMContentLoaded", function() {
    const examTimerBtn = document.getElementById("examTimerBtn");
    const timerDisplay = document.getElementById("timerDisplay");
    const timeLeftSpan = document.getElementById("timeLeft");

    // Set the exam duration (in seconds)
    let duration = 7200; // Example: 2 hours

    examTimerBtn.addEventListener("click", function() {
        this.disabled = true; // Disable the button after clicking
        timerDisplay.style.display = "block"; // Show the timer display

        const endTime = Date.now() + duration * 1000;

        const timer = setInterval(function() {
            const now = Date.now();
            const diff = endTime - now;

            if (diff <= 0) {
                clearInterval(timer);
                timeLeftSpan.textContent = "00:00:00";
                alert("Time is up!");
                // Perform any action after the timer ends
            } else {
                const hours = Math.floor(diff / 3600000).toString().padStart(2, '0');
                const minutes = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
                const seconds = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
                timeLeftSpan.textContent = `${hours}:${minutes}:${seconds}`;
            }
        }, 1000);
    });
});
