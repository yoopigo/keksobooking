const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const fileChooser = document.querySelector('.ad-form__upload input[type=file]');
const fileChooserMap = document.querySelector(
  '.ad-form__field input[type=file]'
);
const preview = document.querySelector('.ad-form__photo-img');
const previewMap = document.querySelector('.map_photo');

const handleFileChange = (fileChooser, preview) => {
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
};

fileChooser.addEventListener('change', () => {
  handleFileChange(fileChooser, preview);
});

fileChooserMap.addEventListener('change', () => {
  handleFileChange(fileChooserMap, previewMap);
});
