const newYears = '08 June 2021';
let countDays = document.getElementById('days');
let countHours = document.getElementById('hours');
let countMins = document.getElementById('mins');
let countSeconds = document.getElementById('seconds');

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  countDays.textContent = formatTime(days);
  countHours.textContent = formatTime(hours);
  countMins.textContent = formatTime(mins);
  countSeconds.textContent = formatTime(seconds);

  
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//initial call
countdown();
setInterval(countdown, 1000);
