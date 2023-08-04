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

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
