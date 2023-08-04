const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const baseList = document.querySelector('.suggestions');
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search');

// fetch data
async function logData() {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}

// preprocess data
async function processData(keyword) {
  const srcData = await logData();

  // filter and sort for city
  const sortedArr = srcData
    .slice()
    .filter(
      el =>
        el.city.toLowerCase().includes(keyword.toLowerCase()) ||
        el.state.toLowerCase().includes(keyword.toLowerCase())
    )
    .sort((a, b) => b.population - a.population);

  return sortedArr;
}

// create markup
async function createMarkup(keyword) {
  if (!keyword)
    return `
      <li>Filter for a city</li>
      <li>or a state</li>
      `;

  const srcArr = await processData(keyword);

  const markup = srcArr.reduce(
    (acc, el) =>
      acc +
      ' ' +
      `<li> <span class="name"> ${el.city}, ${el.state} </span> <span class="population">${el.population}</span></li>`,
    ''
  );

  return markup;
}

// show in search bar all data
async function showInfo(keyword) {
  const markup = await createMarkup(keyword);
  baseList.innerHTML = '';
  baseList.insertAdjacentHTML('beforeend', markup);
  // searchInput.value = '';
}

// 'submit'
searchForm.addEventListener('input', e => {
  e.preventDefault();
  showInfo(searchInput.value);
});
