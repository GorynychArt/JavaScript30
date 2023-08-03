// select element
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.second-hand');

// get current time

// get hour

// get minutes

// get seconds

// rotate element
setInterval(() => {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  console.log(`${hours}:${minutes}:${seconds}`);
  secHand.style.transform = `rotate(${seconds * 6 + 90}deg)`;
  minHand.style.transform = `rotate(${minutes * 6 + 90}deg)`;
  hourHand.style.transform = `rotate(${hours * 30 + 90}deg)`;
}, 1000);
// document.addEventListener(
//   'click',
//   () => (secHand.style.transform = 'rotate(90deg)')
// );
