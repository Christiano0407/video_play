//** ============================ === Variables === ================================== */
const player = document.querySelector(`.player`);
const video = player.querySelector(`.viewer`);
const controls = document.querySelector(`.player__controls`);
const progress = document.querySelector(`.progress`);
const filledProgress = document.querySelector(`.progress__Filled`);
const range = document.querySelectorAll(`.player__slider`);
const toggle = document.querySelector(`.toggle`);
const skip = document.querySelectorAll(`[data-skip]`);

//** ============================ === Functions && Methods === ================================== */
function playerOn() {
  console.log('video');

  const playVideo = video.paused ? `play` : `pause`;
  video[playVideo]();
}

function controlPlay() {
  const ControlOn = this.paused ? '►' : '❚ ❚';
  toggle.textContent = ControlOn;
}

function skipData() {
  console.log(this.value);
}

//** ============================ === Events === ================================== */
player.addEventListener(`click`, playerOn);
video.addEventListener(`play`, controlPlay);
video.addEventListener(`pause`, controlPlay);
skip.forEach((data) => data.addEventListener(`click`, skipData));
