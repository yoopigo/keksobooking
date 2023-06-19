import { getData } from './server.js';

const filtrationData = (data) => {
  const housingTupe = document.querySelector(`[name='housing-type']`);

  let rank = 0;

  if (offer.type === housingTupe.value) {
    rank += 5;
  }
  return rank;
};

filtrationData(data);

export { filtrationData };
