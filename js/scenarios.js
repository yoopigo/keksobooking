//Синхронизация типа жилья с ценой

const priceInput = document.querySelector('#price');
const typeSelect = document.querySelector('#type');

typeSelect.addEventListener('change', (evt) => {
  const type = evt.target.value;
  let minPrice;

  switch (type) {
    case 'bungalow':
      minPrice = 0;
      break;
    case 'flat':
      minPrice = 1000;
      break;
    case 'hotel':
      minPrice = 3000;
      break;
    case 'house':
      minPrice = 5000;
      break;
    case 'palace':
      minPrice = 10000;
      break;
  }
  priceInput.min = minPrice;
  priceInput.placeholder = `Мин. цена ${minPrice}`;
});

//Синхронизация  времени выезда - отъезда

const syncTimeFields = () => {
  let timeIn = document.querySelector('#timein').value;
  let timeOut = document.querySelector('#timeout').value;

  if (timeIn !== timeOut) {
    document.getElementById('timeout').value = timeIn;
  }
};

document.getElementById('timein').addEventListener('change', syncTimeFields);

document.getElementById('timeout').addEventListener('change', () => {
  let timeIn = document.querySelector('#timein').value;
  let timeOut = document.querySelector('#timeout').value;

  if (timeIn !== timeOut) {
    document.getElementById('timein').value = timeOut;
  }
});
