import L from 'leaflet';

const adForm = document.querySelector('.ad-form');
const fieldsets = document.querySelectorAll('fieldset');

const mapFilters = document.querySelector('.map__filters');
const selects = document.querySelectorAll('select');

//Добавление атрибута dissabled на fieldset и select, а так же блоки с классами ad-form и map__filters-container.

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
    12.5
  );

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
}).addTo(map);

//Добавление меток

const mainPinIcon = L.icon({
  iconUrl: '../img/leaflet/main-pin.svg',
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
inputAdress.setAttribute('readonly', true);

const balloonPosition = document.querySelector('#balloonPosition');

mainPinMarker.on('move', (evt) => {
  const marker = evt.target;
  const position = marker.getLatLng();
  inputAdress.value = `${position.lat.toFixed(5)}, ${position.lng.toFixed(5)}`;
});

// Добавление остальных меток и балунов к ним

let markers = [];

let generation = (data) => {
  markers.forEach((marker) => {
    marker.remove();
  });
  markers = [];
  const templateCard = document
    .querySelector('#card')
    .content.querySelector('.popup');

  data.slice(0, 10).forEach(({ location, offer, author }) => {
    const newElement = templateCard.cloneNode(true);

    newElement.querySelector('.popup__title').textContent = offer.title;
    if (!offer.title || offer.title === 0) {
      newElement.querySelector('.popup__title').classList.add('hidden');
    }

    newElement.querySelector(
      '.popup__text--address'
    ).textContent = `${location.lat.toFixed(5)}, ${location.lng.toFixed(5)}`;

    newElement.querySelector(
      '.popup__text--price'
    ).textContent = `${offer.price} ₽/ночь`;
    if (!offer.price || offer.price === 0) {
      newElement.querySelector('.popup__text--price').classList.add('hidden');
    }

    if (offer.type == 'flat') {
      newElement.querySelector('.popup__type').textContent = 'Квартира';
    } else if (offer.type == 'bungalo') {
      newElement.querySelector('.popup__type').textContent = 'Бунгало';
    } else if (offer.type == 'house') {
      newElement.querySelector('.popup__type').textContent = 'Дом';
    } else if (offer.type == 'palace') {
      newElement.querySelector('.popup__type').textContent = 'Дворец';
    } else !offer.type || offer.type.length === 0;
    newElement.querySelector('.popup__type').classList.add('hidden');

    newElement.querySelector(
      '.popup__text--capacity'
    ).textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    if (!offer.rooms || offer.rooms === 0) {
      newElement
        .querySelector('.popup__text--capacity')
        .classList.add('hidden');
    }

    newElement.querySelector(
      '.popup__text--time'
    ).textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    if (!offer.checkin || offer.checkin === 0) {
      newElement.querySelector('.popup__text--time').classList.add('hidden');
    }

    if (offer.features) {
      const featuresList = newElement.querySelector('.popup__features');
      const featuresItems = featuresList.querySelectorAll('.popup__feature');
      for (const featureItem of featuresItems) {
        const featureName = featureItem.classList[1].split('--')[1];
        if (offer.features.includes(featureName)) {
          featureItem.classList.add('hidden');
        }
      }
    }

    newElement.querySelector('.popup__description').textContent =
      offer.description;
    if (!offer.description || offer.description === 0) {
      newElement.querySelector('.popup__description').classList.add('hidden');
    }

    if (!offer.photos || offer.photos.length === 0) {
      newElement.querySelector('.popup__photos').classList.add('hidden');
    } else {
      for (let i = 0; i < offer.photos.length; i++) {
        let img = document.createElement('img');
        img.src = offer.photos[i];
        img.width = '45';
        img.height = '40';
        img.classList.add('popup__photo');
        img.alt = offer.title;
        newElement.querySelector('.popup__photos').appendChild(img);
      }
    }

    if (
      !author.avatar ||
      author.avatar.length === 0 ||
      author.avatar === 'img/avatars/user10.png' ||
      author.avatar === 'img/avatars/user11.png' ||
      author.avatar === 'img/avatars/user12.png'
    ) {
      newElement.querySelector('.popup__avatar').src =
        'img/avatars/default.png';
    } else {
      newElement.querySelector('.popup__avatar').src = author.avatar;
    }

    const icon = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker(
      {
        lng: location.lng,
        lat: location.lat,
      },
      {
        icon,
      }
    );
    marker.addTo(map).bindPopup(newElement);
    markers.push(marker);
  });
};

export { generation };
