/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
const togglePlay = () => {
  video.paused ? video.play() : video.pause();
};

// const updateButton = () => {
//   const icon = this.paused ? '►' : '❚ ❚';
//   console.log(this.paused, icon);
//   toggle.textContent = icon;
// };

function updateButton() {
  toggle.textContent = this.paused ? '►' : '❚ ❚';
}

const skip = function () {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
};

const handleRangeUpdate = function () {
  video[this.name] = this.value;
};

const handleProgress = function () {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
};

const scrub = function (e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
};

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => {
  button.addEventListener('click', skip);
});
ranges.forEach(range => {
  range.addEventListener('change', handleRangeUpdate);
});
ranges.forEach(range => {
  range.addEventListener('mousemove', handleRangeUpdate);
});

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', e => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
