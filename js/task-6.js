function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Очищаємо попередні елементи

  const fragment = document.createDocumentFragment(); 
  // Створюємо DocumentFragment за допомогою document.createDocumentFragment().
  // Всі елементи div додаються до цього фрагменту, а не безпосередньо до DOM.
  // Після завершення циклу, весь фрагмент додається до boxesContainer одноразово, 
  // що значно зменшує кількість операцій з DOM.
  // Додавання елементів через DocumentFragment дозволяє уникнути багаторазового 
  // перемальовування сторінки, що покращує продуктивність, особливо при великій кількості елементів.
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px'; // Додаємо відступи між елементами
    fragment.appendChild(box); // Додаємо елемент до фрагменту
    size += 10;
  }

  boxesContainer.appendChild(fragment); // Додаємо всі елементи до DOM одноразово
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