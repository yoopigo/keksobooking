/* eslint-disable no-undef */
/* eslint-disable no-console */

'use strict';

import { getRandomArrayElement, randomMassiveElements } from './util.js';

const COUNT = 10;

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const CHECKIN = ['12:00', '13:00', '14:00'];

const DESCRIPTION = [
  'Номер высшей категории с большой кроватью',
  'Представительский люкс',
  'Стандартный номер с большой кроватью',
  'Стандартный номер с двуспальной кроватью',
  'Семейный номер с большой кроватью',
  'Стандарный номер с двумя односпальными кроватями',
  'Улучшенный номер с большой кровью',
  'Номер для людей с ограниченными возможностями',
  'Экономный номер с двумя кроватями',
  'Экономный номер с одной кроватью',
];

let FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const ROOMS = {
  MIN: 1,
  MAX: 5,
};

const GUESTS = {
  MIN: 1,
  MAX: 5,
};

const PRICE = {
  MIN: 1000,
  MAX: 10000,
};

const LOCATIONX = {
  MIN: 35.65,
  MAX: 35.72,
};

const LOCATIONY = {
  MIN: 139.7,
  MAX: 139.8,
};

const FEATURES_COUNT = {
  MIN: 3,
  MAX: 8,
};

const PHOTOS_COUNT = {
  MIN: 1,
  MAX: 4,
};

const similarProfile = [];

// Функция создания рандомного профиля
const createProfile = () => {
  for (let i = 1; i <= COUNT; i++) {
    let avatarCount = 'img/avatars/user0';
    if (i >= 10) {
      avatarCount = 'img/avatars/user';
    }

    similarProfile.push({
      author: { avatar: avatarCount + i },
      location: {
        x: _.random(LOCATIONX.MIN, LOCATIONX.MAX),
        y: _.random(LOCATIONY.MIN, LOCATIONY.MAX),
      },
      offer: {
        title: 'Лучший номер ' + i,
        price: _.random(PRICE.MIN, PRICE.MAX),
        type: getRandomArrayElement(TYPE),
        rooms: _.random(ROOMS.MIN, ROOMS.MAX),
        guests: _.random(GUESTS.MIN, GUESTS.MAX),
        checkin: getRandomArrayElement(CHECKIN),
        checkout: getRandomArrayElement(CHECKIN),
        description: getRandomArrayElement(DESCRIPTION),
        features: randomMassiveElements(FEATURES, FEATURES_COUNT),
        photos: randomMassiveElements(PHOTOS, PHOTOS_COUNT),
      },
    });
  }
};

createProfile();

export { createProfile, similarProfile };
