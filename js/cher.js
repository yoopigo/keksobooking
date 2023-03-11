// Валидация для количества комнта и гостей

const roomNumberSelect = document.getElementById('room_number');
const capacitySelect = document.getElementById('capacity');

roomNumberSelect.addEventListener('change', () => {
  const roomNumber = parseInt(roomNumberSelect.value, 10);
  const capacityOptions = capacitySelect.querySelectorAll('option');

  // Скрываем все варианты выбора количества гостей
  capacityOptions.forEach((option) => {
    option.disabled = true;
    option.selected = false;
  });

  // Отображаем только допустимые варианты выбора количества гостей
  if (roomNumber === 1) {
    capacitySelect.value = '1';
    capacitySelect.querySelector('option[value="1"]').disabled = false;
  } else if (roomNumber === 2) {
    capacitySelect.value = '2';
    capacitySelect.querySelector('option[value="1"]').disabled = false;
    capacitySelect.querySelector('option[value="2"]').disabled = false;
  } else if (roomNumber === 3) {
    capacitySelect.value = '3';
    capacitySelect.querySelector('option[value="1"]').disabled = false;
    capacitySelect.querySelector('option[value="2"]').disabled = false;
    capacitySelect.querySelector('option[value="3"]').disabled = false;
  } else if (roomNumber === 100) {
    capacitySelect.value = '0';
    capacitySelect.querySelector('option[value="0"]').disabled = false;
  }
});
