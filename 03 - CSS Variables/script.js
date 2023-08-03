const img = document.getElementById('img');
const imgBG = document.getElementById('imgBG');
const blurHand = document.getElementById('blur');
const spacingHand = document.getElementById('spacing');
const colorHand = document.getElementById('base');

console.log(blurHand.value);

blurHand.addEventListener('input', () => {
  img.style.filter = `blur(${blurHand.value}px)`;
});

spacingHand.addEventListener('input', () => {
  img.style.top = `${spacingHand.value}px`;
  img.style.left = `${spacingHand.value}px`;
});

colorHand.addEventListener('input', () => {
  console.log(colorHand.value);
  imgBG.style.background = `${colorHand.value}`;
});
