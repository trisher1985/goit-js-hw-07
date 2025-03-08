// Напиши скрипт, який під час набору тексту в
// інпуті input#name-input (подія input)
// підставляє його поточне значення в span#name-output
// як ім’я для привітання.
// Обов’язково очищай значення в інпуті по краях від пробілів .
// Якщо інпут порожній або містить лише пробіли,
// то замість імені у спан має підставлятися рядок "Anonymous".

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", function (e) {
  const inputValue = nameInput.value.trim();
  if (inputValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
});
