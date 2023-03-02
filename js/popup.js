/* eslint-disable no-undef */
/* eslint-disable no-console */

'use strict';

import { createProfile, similarProfile } from './data.js';

const windowMap = document.querySelector('.map__canvas');

const templateCard = document
  .querySelector('#card')
  .content.querySelector('.popup');

createProfile();

// Создание элементов букинга

similarProfile.forEach((element) => {
  const newElement = templateCard.cloneNode(true);

  newElement.querySelector('.popup__title').textContent = element.offer.title;

  newElement.querySelector('.popup__text--address').textContent =
    element.offer.address;

  newElement.querySelector(
    '.popup__text--price'
  ).textContent = `${element.offer.price} ₽/ночь`;

  if (element.offer.type == 'flat') {
    newElement.querySelector('.popup__type').textContent = 'Квартира';
  } else if (element.offer.type == 'bungalo') {
    newElement.querySelector('.popup__type').textContent = 'Бунгало';
  } else if (element.offer.type == 'house') {
    newElement.querySelector('.popup__type').textContent = 'Дом';
  } else {
    newElement.querySelector('.popup__type').textContent = 'Дворец';
  }

  newElement.querySelector(
    '.popup__text--capacity'
  ).textContent = `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`;

  newElement.querySelector(
    '.popup__text--time'
  ).textContent = `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`;

  newElement.querySelector('.popup__features').textContent =
    element.offer.features;

  newElement.querySelector('.popup__description').textContent =
    element.offer.description;

  for (let i = 0; i < element.offer.photos.length; i++) {
    let img = document.createElement('img');
    img.src = element.offer.photos[i];
    img.width = '45';
    img.height = '40';
    img.classList.add('popup__photo');
    img.alt = element.offer.title;
    newElement.querySelector('.popup__photos').appendChild(img);
  }

  newElement.querySelector('.popup__avatar').src = element.author.avatar;

  windowMap.appendChild(newElement);
});
