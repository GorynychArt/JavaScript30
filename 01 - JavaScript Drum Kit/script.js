// const keyA = document.querySelector('[data-key="65"]');
// const keyS = document.querySelector('[data-key="83"]');
// const keyD = document.querySelector('[data-key="68"]');
// const keyF = document.querySelector('[data-key="70"]');
// const keyG = document.querySelector('[data-key="71"]');
// const keyH = document.querySelector('[data-key="72"]');
// const keyJ = document.querySelector('[data-key="74"]');
// const keyK = document.querySelector('[data-key="75"]');
// const keyL = document.querySelector('[data-key="76"]');

// const box = document.querySelector('.keys');

// document.addEventListener('keydown', e => {
//   // console.log(e.code.slice(-1));
//   // const keyCode = e.code.slice(-1).charCodeAt();
//   // console.log(keyCode);
//   // const $key = document.querySelector(`[data-key="${keyCode}"]`);
//   // $key.classList.toggle('playing');
//   keyHighligt($key);
// });

const keyHighlight = function (e) {
  const keyCode = e.code.slice(-1).charCodeAt();
  // console.log(keyCode);
  const $key = document.querySelector(`[data-key="${keyCode}"]`);
  // console.log($key);
  if (!$key) return;
  $key.classList.toggle('playing');
  setTimeout(() => {
    $key.classList.toggle('playing');
  }, 120);
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  // console.log(audio);
  audio.pause();
  audio.currentTime = 0;
  audio.play();
};

document.addEventListener('keydown', keyHighlight);
