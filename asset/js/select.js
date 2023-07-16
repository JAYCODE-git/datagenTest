const selectBox = document.querySelector("#datagen-input .select-wrap");
const selectBtn = document.querySelector("#datagen-input .selected");
const selectList = document.querySelector("#select-box");
const option = document.querySelectorAll(".option");
const selected = document.querySelector(".selected-value");

selectBox.addEventListener("click", () => {
  // selectList.classList.toggle("active");
  // selectBtn.classList.toggle("active");
  selectBox.classList.toggle("active");
});

option.forEach((optionElement) => {
  optionElement.addEventListener("click", () => {
    selectOption(optionElement);
  });
});

function selectOption(optionElement) {
  const selectBox = optionElement.closest(".select-wrap");
  const selectedElement = selectBox.querySelector(".selected-value");
  selectedElement.textContent = optionElement.textContent;
}
