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

getData((data) => {
  generation(data.slice(0, adCounter));
});
