function clear() {
  const displaycalc = document.querySelector('.displaycalc');
  const clearbutton = document.querySelector('.container .clear');
  clearbutton.addEventListener('click', () => {
    displaycalc.textContent = '';
  });
}

function operate(operator, a, b) {
  
}

function displayCalculation() {
  const displaycalc = document.querySelector('.displaycalc');
  const numberbuttons = document.querySelectorAll('.container .number');
  numberbuttons.forEach((numberbutton) => {
    numberbutton.addEventListener('click', () => {
      displaycalc.textContent += numberbutton.textContent;
    });
  });
}

function displayCalculationHotKeys() {
  document.addEventListener('keydown', getNumberFromKeyEvent);
}

function getNumberFromKeyEvent(event) {
  const displaycalc = document.querySelector('.displaycalc');
  //numpad number keys 0-9
  if (event.keyCode >= 96 && event.keyCode <= 105) {
    displaycalc.textContent += event.keyCode - 96;
    //normal number keys 0-9
  } else if (event.keyCode >= 48 && event.keyCode <= 57) {
    displaycalc.textContent += event.keyCode - 48;
  }
  return null;
}

displayCalculationHotKeys();
displayCalculation();
clear();