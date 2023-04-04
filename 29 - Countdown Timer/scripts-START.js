let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000
  // 顯示開始倒數計時的當下
  displayTimeLeft(seconds)
  displayEndTime(then)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)
     // check if we should stop it!
    if(secondsLeft < 0) {
      clearInterval(countdown)
      return
    }
    displayTimeLeft(secondsLeft)
  }, 1000)
}

function displayTimeLeft(seconds){
  const minutes = Math.floor(seconds / 60)
  const remainSeconds = seconds % 60
  // 調整秒數格式，小於 10 秒時，5 顯示為 05
  const display = `${minutes}: ${remainSeconds < 10 ? '0': ''}${remainSeconds}`
  document.title = display;
  timerDisplay.textContent = display
}

function displayEndTime(timestamp){
  const end = new Date(timestamp)
  const hour = end.getHours()
  // const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes()
  endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? '0' : ''}${minutes}`
}

function startTimer() {
  const seconds = parseInt(this.dataset.time)
  timer(seconds)
}

buttons.forEach(button => button.addEventListener('click', startTimer))
// 不能用箭頭函式，會改變 this 的指向為 window
document.customForm.addEventListener('submit', function(e){
  e.preventDefault();
  console.log(this)
  const mins = this.minutes.value
  console.log(mins)
  timer(mins * 60)
  this.reset()
})