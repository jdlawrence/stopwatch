document.addEventListener("DOMContentLoaded", () => {
  let timeStarted = false;
  let timeAccumulated = 0;
  let timerInterval = null;
  let displayTime = 0;

  let display = document.getElementsByClassName('stopwatch__display').item(0);
  let startStop = document.getElementsByClassName('stopwatch__start-stop').item(0);
  let reset = document.getElementsByClassName('stopwatch__reset').item(0);
  let record = document.getElementsByClassName('stopwatch__record').item(0);
  let pastTimes = document.getElementsByClassName('stopwatch__past-times').item(0);

  display.innerHTML = '0';

  startStop.addEventListener('click', () => {
    if (!timeStarted) {
      timeStarted = true;

      timerInterval = setInterval(() => {
        timeAccumulated += 10;
        displayTime = parseFloat(timeAccumulated / 1000).toFixed(2);
        display.innerHTML = displayTime;
      }, 10);
    } else {
      clearInterval(timerInterval);
      timeStarted = false;
    }
  });

  reset.addEventListener('click', () => {
    clearInterval(timerInterval);
    timeStarted = false;
    timeAccumulated = 0;
    display.innerHTML = '0';
    pastTimes.innerHTML = 'Past Times';
  });

  record.addEventListener('click', () => {
    displayTime = parseFloat(timeAccumulated / 1000).toFixed(2);
    pastTimes.innerHTML += `<div class="stopwatch__single-time">${ displayTime}</div>`;
  });


});