$(document).ready(function () {
    var duration = 5 * 60; // Example duration: 5 minutes in seconds
    var timer;

    $('#examTimerBtn').click(function() {
        if (!timer) { // Prevent multiple timers
            $(this).prop('disabled', true); // Disable button after starting
            $('#timerDisplay').show(); // Show the timer display
            timer = setInterval(function() {
                var minutes = parseInt(duration / 60, 10);
                var seconds = parseInt(duration % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                $('#timeLeft').text(minutes + ":" + seconds);

                if (--duration < 0) {
                    clearInterval(timer);
                    $('#timerDisplay').hide();
                    $('#examTimerBtn').prop('disabled', false); // Re-enable button
                }
            }, 1000);
        }
    });
});
