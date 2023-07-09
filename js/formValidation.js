const showSuccessMessage = () => {
  const successTemplate = document.querySelector('#success');
  const successContent = successTemplate.content.cloneNode(true);
  const successElement = document.createElement('div');
  successElement.appendChild(successContent);
  document.body.appendChild(successElement);

  setTimeout(() => {
    document.body.removeChild(successElement);
  }, 1000);
};

const showErrorMessage = () => {
  const errorTemplate = document.querySelector('#error');
  const errorContent = errorTemplate.content.cloneNode(true);
  const errorElement = document.createElement('div');
  errorElement.appendChild(errorContent);
  document.body.appendChild(errorElement);

  const closeButton = errorElement.querySelector('.error__button');
  closeButton.addEventListener('click', () => {
    document.body.removeChild(errorElement);
  });
};

const form = document.querySelector('.ad-form');

const handleFormSubmit = (evt) => {
  evt.preventDefault();

  const formData = new FormData(form);

  fetch('https://23.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        showSuccessMessage();
      } else {
        showErrorMessage();
      }
    })
    .catch((error) => {
      showErrorMessage();
    });
};

form.addEventListener('submit', handleFormSubmit);
