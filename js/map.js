const adForm = document.querySelector('.ad-form');
const fieldsets = document.querySelectorAll('fieldset');

const mapFilters = document.querySelector('.map__filters-container');
const selects = document.querySelectorAll('select');

//Добавление атрибута dissabled на fieldset и select, а так же блоки с классами ad-form и map__filters-container.

adForm.classList.add('ad-form--disabled');
mapFilters.classList.add('ad-form--disabled');

fieldsets.forEach((fieldset) => {
  fieldset.setAttribute('disabled', true);
});

selects.forEach((select) => {
  select.setAttribute('disabled', true);
});

//Добавление карты

let map = L.map('map-canvas')
  .on('load', () => {
    console.log('map loaded');
  })
  .setView(
    {
      lat: 59.92749,
      lng: 30.31127,
    },
    10
  );

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
