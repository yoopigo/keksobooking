/* eslint-disable no-undef */
/* eslint-disable no-console */

'use strict';

import './data.js';
import './scenarios.js';
import './map.js';
import './validation.js';
import './server.js';
import './filtration.js';
import './photo.js';

import { generation } from './map.js';
import { getData } from './server.js';
import { filterData } from './filtration.js';

const RERENDER_DELAY = 500;

const housingTypeSelect = document.querySelector('#housing-type');
const housingPriceSelect = document.querySelector('#housing-price');
const housingRoomSelect = document.querySelector('#housing-rooms');
const housingGuestSelect = document.querySelector('#housing-guests');
const housingFeatures = document.querySelector('#housing-features');

const filterChange = () => {
  const selectedType = housingTypeSelect.value;
  const selectedPrice = housingPriceSelect.value;
  const selectedRoom = housingRoomSelect.value;
  const selectedGuest = housingGuestSelect.value;
  const selectedFeatures = Array.from(
    document.querySelectorAll('input[name="features"]:checked')
  ).map((checkbox) => checkbox.value);
  const filteredData = filterData(
    data,
    selectedType,
    selectedPrice,
    selectedRoom,
    selectedFeatures,
    selectedGuest
  );
  generation(filteredData);
};

const debouncedFilterChange = _.debounce(filterChange, RERENDER_DELAY);

housingTypeSelect.addEventListener('change', debouncedFilterChange);
housingPriceSelect.addEventListener('change', debouncedFilterChange);
housingRoomSelect.addEventListener('change', debouncedFilterChange);
housingGuestSelect.addEventListener('change', debouncedFilterChange);
housingFeatures.addEventListener('change', debouncedFilterChange);

let data = [];

getData((responseData) => {
  data = responseData;
  generation(data);
});
