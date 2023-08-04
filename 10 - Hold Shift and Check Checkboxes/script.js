const holder = document.querySelector('.inbox');

let lastChecked;

const handleCheck = e => {
  lastChecked = e.target.closest('input[type="checkbox"]');
  if (!lastChecked) return;

  if (e.shiftKey && lastChecked.checked) {
    console.log('shift event');
    let flag = false;
    const boxes = document.querySelectorAll('input[type="checkbox"]');
    boxes.forEach(box => {
      // debugger;
      if (box.checked) flag = !flag;
      if (flag) box.checked = 'true';

      // console.log(box.checked);
    });
  }
  console.log(lastChecked);
};

holder.addEventListener('click', handleCheck.bind(this));
