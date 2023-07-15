/* eslint-disable no-undef */
/* eslint-disable no-console */

'use strict';

//Функция взятия рандомного мин, макс значения)
const quantity = (arr) => {
  return _.random(arr.MIN, arr.MAX);
};

//  Функия рамдомного элемента массива
const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

// Функция для взятия рандомного количества рандомных элементов массива и удаления дублей
const randomMassiveElements = (arr, randomCount) => {
  const amount = quantity(randomCount);
  const createArray = [];
  const uniqueArray = [];

  for (let i = 0; i < amount; i++) {
    createArray.push(getRandomArrayElement(arr));
  }

  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(createArray[i]) === -1) {
      uniqueArray.push(createArray[i]);
    }
  }
  return uniqueArray.filter((item) => item !== undefined);
};

export { getRandomArrayElement, randomMassiveElements };
