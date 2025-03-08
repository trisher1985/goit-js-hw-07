function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Очищаємо попередні елементи

  let size = 30;
  for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.margin = '5px'; // Додаємо відступи між елементами
      boxesContainer.appendChild(box);
      size += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Очищаємо всі елементи
}

document.querySelector('[data-create]').addEventListener('click', () => {
  const input = document.querySelector('#controls input[type="number"]');
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = ''; // Очищаємо значення в інпуті
  } else {
      alert('Будь ласка, введіть число від 1 до 100.');
  }
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);