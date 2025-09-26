function getNextDec4(referenceDate){
  let year = referenceDate.getFullYear();
  let candidate = new Date(year, 11, 4, 0, 0, 0, 0);
  if (candidate <= referenceDate) candidate = new Date(year + 1, 11, 4, 0, 0, 0, 0);
  return candidate;
}

function pad(n){return String(n).padStart(2,'0');}

const daysEl = document.getElementById('days');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

let target = getNextDec4(new Date());

function update(){
  const now = new Date();
  if (now > target) target = getNextDec4(now);

  let diff = target - now;
  if (diff < 0) diff = 0;

  const msInDay = 24*60*60*1000;
  const msInMinute = 60*1000;
  const msInSecond = 1000;

  const days = Math.floor(diff / msInDay);
  let rem = diff % msInDay;
  const minutes = Math.floor(rem / msInMinute);
  rem = rem % msInMinute;
  const seconds = Math.floor(rem / msInSecond);

  daysEl.textContent = days;
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
}

update();
setInterval(update, 1000);
