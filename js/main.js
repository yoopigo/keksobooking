/* eslint-disable no-undef */
/* eslint-disable no-console */

'use strict';

import './data.js';
import './scenarios.js';
import './map.js';
import './validation.js';
import './server.js';
import './filtration.js';
import { generation } from './map.js';
import { getData } from './server.js';
import { filterData } from './filtration.js';

const housingTypeSelect = document.querySelector('#housing-type');
const housingPriceSelect = document.querySelector('#housing-price');
const housingRoomSelect = document.querySelector('#housing-rooms');
const housingGuestSelect = document.querySelector('#housing-guests');

const filterChange = () => {
  const selectedType = housingTypeSelect.value;
  const selectedPrice = housingPriceSelect.value;
  const selectedRoom = housingRoomSelect.value;
  const selectedGuest = housingGuestSelect.value;
  const filteredData = filterData(
    data,
    selectedType,
    selectedPrice,
    selectedRoom,
    selectedGuest
  );
  generation(filteredData);
};

housingTypeSelect.addEventListener('change', filterChange);
housingPriceSelect.addEventListener('change', filterChange);
housingRoomSelect.addEventListener('change', filterChange);
housingGuestSelect.addEventListener('change', filterChange);

let data = [];

getData((responseData) => {
  data = responseData;
  generation(data);
});
