const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const fileChooser = document.querySelector('.ad-form__upload input[type=file]');
const preview = document.querySelector('.ad-form__photo-img');

fileChooser.addEventListener('change', () => {
  const photoFile = fileChooser.files[0];
  const photoFileName = photoFile.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return photoFileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      preview.src = reader.result;
    });
    reader.readAsDataURL(photoFile);
  }
});
