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
  // Включить отображение и возможность взаимодействия с элементами сайта после загрузки карты.
  .on('load', () => {
    adForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('ad-form--disabled');

    fieldsets.forEach((fieldset) => {
      fieldset.removeAttribute('disabled');
    });
    selects.forEach((select) => {
      select.removeAttribute('disabled');
    });
  })
  .setView(
    {
      lat: 35.69325,
      lng: 139.76969,
    },
    10
  );

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
}).addTo(map);

//Добавление меток

const mainPinIcon = L.icon({
  iconUrl: '/img/leaflet/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.693257187714124,
    lng: 139.76969549897262,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

mainPinMarker.addTo(map);

// Евент передвижения

const inputAdress = document.querySelector('#address');
inputAdress.value = '35.69325, 139.76969';
inputAdress.setAttribute('disabled', true);

mainPinMarker.on('move', (evt) => {
  const marker = evt.target;
  const position = marker.getLatLng();
  inputAdress.value = `${position.lat.toFixed(5)}, ${position.lng.toFixed(5)}`;
});
