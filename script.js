const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
  'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
  'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

function stripArticle(band) {
  return band.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => {
  const bandA = stripArticle(a).toLowerCase();
  const bandB = stripArticle(b).toLowerCase();
  return bandA.localeCompare(bandB);
});

const ul = document.getElementById('band');
ul.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');//your JS code here. If required.
const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
  'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
  'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

function stripArticle(band) {
  return band.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => {
  const bandA = stripArticle(a).toLowerCase();
  const bandB = stripArticle(b).toLowerCase();
  return bandA.localeCompare(bandB);
});

const ul = document.getElementById('band');
ul.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');