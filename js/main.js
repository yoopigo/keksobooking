/* eslint-disable no-undef */
/* eslint-disable no-console */
'use strict';

const COUNT = 10;

const TYPE = ['palace', 'flat', 'house', 'bungalow'];

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

let features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator'];

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
  MAX: 35.7,
};

const LOCATIONY = {
  MIN: 139.7,
  MAX: 139.8,
};

const FEATURESCOUNT = {
  MIN: 1,
  MAX: 5,
};

const similarProfile = [];

//  Взятие рамдомного элемента массива
const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

// Функция создания рандомного профиля
const createProfile = () => {
  for (let i = 1; i <= COUNT; i++) {
    let avatarCount = 'img/avatars/user0';
    if (i >= 10) {
      avatarCount = 'img/avatars/user';
    }

    similarProfile.push({
      author: { avatar: avatarCount + i },
      offer: {
        title: 'Лучший номер ' + i,
        address: _.random(1.1, 9.9) + ', ' + _.random(1.2, 9.9),
        price: _.random(PRICE.MIN, PRICE.MAX),
        type: getRandomArrayElement(TYPE),
        rooms: _.random(ROOMS.MIN, ROOMS.MAX),
        guests: _.random(GUESTS.MIN, GUESTS.MAX),
        checkin: getRandomArrayElement(CHECKIN),
        checkout: getRandomArrayElement(CHECKIN),
        description: getRandomArrayElement(DESCRIPTION),
        features: [
          getRandomArrayElement(features),
          getRandomArrayElement(features),
        ],
      },
      location: {
        x: _.random(LOCATIONX.MIN, LOCATIONX.MAX),
        y: _.random(LOCATIONY.MIN, LOCATIONY.MAX),
      },
    });
  }
};

createProfile();

console.log(similarProfile);
