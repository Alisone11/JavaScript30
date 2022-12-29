/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method](); // 觸發 video 的 play / pause事件，等同 video.play() 因綁定變數所以用[]寫法
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚'; // this 指向 <video>，暫停時屬性 paused=true
  toggle.textContent = icon;
}

function skip() {
 video.currentTime += parseFloat(this.dataset.skip); // 屬性 currentTime，parseFloat() 將字串轉為數字
//  console.log(this.dataset.skip, parseFloat(this.dataset.skip))
}

function handleRangeUpdate(e) {
  video[this.name] = this.value; // 若調整屬性 volumn，則 video.volumn = volumn 值
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100; //播放進度條的呈現
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration; //播放進度條對應 video 播放進度
  video.currentTime = scrubTime;
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton); // video 事件
video.addEventListener('pause', updateButton);  // video 事件
toggle.addEventListener('click', togglePlay);


skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate)); // volumn 和 playbackRate 的控制條
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

video.addEventListener('timeupdate', handleProgress);  // video 事件：属性 currentTime 指定的时间发生变化
let mousedown = false; //為了觸發mousemove 事件時，判斷是否有按住滑鼠
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));  //只有 mousedown = true，才接著執行scrub(e)
progress.addEventListener('mousedown', () => mousedown = true); 
progress.addEventListener('mouseup', () => mousedown = false);
