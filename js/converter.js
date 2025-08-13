// ここからコードを書いてください
console.log("converter.jsの処理が動きました。");
const setupConverter = () => {
  const convertForm = document.querySelector(".converter-form");
  const inputValue = document.querySelector(".converter-input");
  const selectFrom = document.querySelector(".converter-from");
  const selectTo = document.querySelector(".converter-to");
  const resultText = document.querySelector(".converter-result");

  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];

  lengthUnit.forEach((unit) => {
    const optionFrom = document.createElement("option");
    optionFrom.value = unit.base;
    optionFrom.textContent = unit.name;
    selectFrom.appendChild(optionFrom);
    const optionTo = document.createElement("option");
    optionTo.value = unit.base;
    optionTo.textContent = unit.name;
    selectTo.appendChild(optionTo);
  });

  const convert = () => {
    if (isNaN(parseFloat(inputValue.value)) === true) {
      resultText.textContent = "Please enter a valid number";
      return;
    }
    const baseFrom = selectFrom.value;
    const baseTo = selectTo.value;
    const convertedValue = (inputValue.value * baseFrom) / baseTo;
    const resultValue = convertedValue.toFixed(3);
    const unitFrom = selectFrom.options[selectFrom.selectedIndex].textContent;
    const unitTo = selectTo.options[selectTo.selectedIndex].textContent;
    resultText.textContent = `${inputValue.value} ${unitFrom} = ${resultValue} ${unitTo}`;
  };

  selectFrom.selectedIndex = 0;
  selectTo.selectedIndex = 1;
  convert();

  convertForm.addEventListener("input", convert);
};

export { setupConverter };
