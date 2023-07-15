const ALLERT_SHOW_TIME = 3000;

const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      response.json().then((data) => onSuccess(data));
    })
    .catch((err) => {
      const alertContainer = document.createElement('div');
      alertContainer.style.zIndex = '9999';
      alertContainer.style.position = 'absolute';
      alertContainer.style.left = '0';
      alertContainer.style.right = '0';
      alertContainer.style.top = '0';
      alertContainer.style.fontSize = '20px';
      alertContainer.style.color = 'red';
      alertContainer.style.textAlign = 'center';
      alertContainer.style.backgroundColor = 'white';
      alertContainer.textContent = `Ошибка соединения с сервером: ${err}`;
      document.body.appendChild(alertContainer);

      setTimeout(() => {
        alertContainer.remove();
      }, ALLERT_SHOW_TIME);
    });
};

export { getData };
