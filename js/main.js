/* eslint-disable no-undef */
/* eslint-disable no-console */

'use strict';

const adCounter = 10;

import './data.js';
import './scenarios.js';
import './map.js';
import './validation.js';
import './server.js';
import './filtration.js';
import { generation } from './map.js';
import { getData } from './server.js';

let data = [];

getData((responseData) => {
  data = responseData;
  generation(data);
});

const housingTypeSelect = document.querySelector('#housing-type');

const typeFilterChange = housingTypeSelect.addEventListener('change', () => {
  const selectedType = housingTypeSelect.value;
  let filteredData = data;
  if (selectedType !== 'any') {
    filteredData = data.filter((item) => item.offer.type === selectedType);
  }
  generation(filteredData);
});
