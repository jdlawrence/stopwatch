document.addEventListener("DOMContentLoaded", () => {
  let timeStarted = false;
  let startTime = 0;
  let timerInterval = null;

  let display = document.getElementsByClassName('stopwatch__display').item(0);
  let startStop = document.getElementsByClassName('stopwatch__start-stop').item(0);
  let reset = document.getElementsByClassName('stopwatch__reset').item(0);
  let record = document.getElementsByClassName('stopwatch__record').item(0);

  display.innerHTML = '0';

  startStop.addEventListener('click', () => {
    // If the time isn't started
    // Make an interval of 10 ms
    // Replace the innerHTML of display
    if (!timeStarted) {
      timeStarted = true;
      if (startTime === 0) {
        startTime = Date.now();
      }

      timerInterval = setInterval(() => {
        let temp = Date.now();
        let current = parseFloat(Math.round((temp - startTime) / 10) / 100).toFixed(2);
        display.innerHTML = current;
      }, 10);
    }
  });

  reset.addEventListener('click', () => {
    clearInterval(timerInterval);
    timeStarted = false;
    startTime = 0;
    display.innerHTML = '0';
  });


});