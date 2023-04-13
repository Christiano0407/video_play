//** ============================ === Variables === ================================== */
const player = document.querySelector(`.player`);
const video = player.querySelector(`.viewer`);
const controls = document.querySelector(`.player__controls`);
const progress = document.querySelector(`.progress`);
const filledProgress = document.querySelector(`.progress__filled`);
const range = document.querySelectorAll(`.player__slider`);
const toggle = document.querySelector(`.toggle`);
const skip = document.querySelectorAll(`[data-skip]`);
/* let factor = range.attr(`max`);
let isPlaying = false; */

//** ============================ === Functions && Methods === ================================== */
function playerOn() {
  const playVideo = video.paused ? `play` : `pause`;
  video[playVideo]();
}

function controlPlay() {
  const ControlOn = this.paused ? '►' : '❚ ❚';
  toggle.textContent = ControlOn;
}

function skipData() {
  console.log(this.value);
  video.currentTime += parseFloat(this.dataset.skip);
}

function activeRange() {
  video[this.name] = this.value;
  //console.log(this.name);
  /*  this.value((video.currentTime / video.duration) * factor);
  if (isPlaying) requestAnimationFrame(activeRange); */
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  filledProgress.style.flexBasis = `${percent}%`;
}

function playProgress(e) {
  const lengthX = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = lengthX;
}

//** ============================ === Events === ================================== */
let mouseDown = false;
player.addEventListener(`click`, playerOn);
video.addEventListener(`play`, controlPlay);
video.addEventListener(`pause`, controlPlay);
video.addEventListener(`timeupdate`, handleProgress);
skip.forEach((data) => data.addEventListener(`click`, skipData));
range.forEach((value) => value.addEventListener(`change`, activeRange));
range.forEach((value) => value.addEventListener(`mousemove`, activeRange));
progress.addEventListener('click', playProgress);
//progress.addEventListener(`mousemove`, (e) => mouseDown && playProgress(e));
progress.addEventListener(`mousedown`, () => (mouseDown = true));
progress.addEventListener(`mouseup`, () => (mouseDown = true));
