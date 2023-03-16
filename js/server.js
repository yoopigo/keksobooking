import { generation } from './map.js';

const adCounter = 100;

fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((data) => {
    generation(data.slice(0, adCounter));
  });
