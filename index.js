document.getElementById("startButton").addEventListener("click", function () {
    const targetDateInput = document.getElementById("targetDate").value;
    const targetDate = new Date(targetDateInput).getTime();
  
    if (isNaN(targetDate)) {
      alert("Please enter a valid date and time.");
      return;
    }
  
    const countdownInterval = setInterval(() => {
      const currentDate = new Date().getTime();
      const timeLeft = targetDate - currentDate;
  
      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("timer").innerHTML = "Countdown expired!";
        return;
      }
  
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;
    }, 1000);
  });
  