function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    alert('ERROR: divide by zero');
    return null;
  }
  return a / b;
}

function displayCalculation() {
  const displaycalc = document.querySelector('.displaycalc');
  const numberbuttons = document.querySelectorAll('.number');
  const operatorbuttons = document.querySelectorAll('.operator');
  const clearbutton = document.querySelector('.clear');
  const clearentrybutton = document.querySelector('.clearentry');
  numberbuttons.forEach((numberbutton) => {
    numberbutton.addEventListener('click', () => {
      displaycalc.textContent += `${numberbutton.textContent}`;
      operateWhenTwoOperators();
    });
  });
  operatorbuttons.forEach((operatorbutton) => {
    operatorbutton.addEventListener('click', () => {
      if (displaycalc.textContent.includes('+')) {
        displaycalc.textContent.slice(0,-3);
      }
      displaycalc.textContent += ` ${operatorbutton.textContent} `;
      operateWhenTwoOperators();
    });
  });
  clearbutton.addEventListener('click', () => {
    displaycalc.textContent = '';
    operateWhenTwoOperators();
  });
  clearentrybutton.addEventListener('click', () => {
    displaycalc.textContent = displaycalc.textContent.slice(0,-1);
    operateWhenTwoOperators();
  });
}

function displayCalculationHotKeys() {
  //hotkey for numbers
  document.addEventListener('keydown', getNumberFromKeyEvent);
  //hotkey for operators
  document.addEventListener('keydown', getOperatorFromKeyEvent);
  //hotkey for backspace
  document.addEventListener('keydown', clearLastEntryKeyEvent);
  //hotkey for enter
  document.addEventListener('keydown', operateButtonKeyEvent);
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

function getOperatorFromKeyEvent(event) {
  const displaycalc = document.querySelector('.displaycalc');
  if (event.keyCode === 61 || event.keyCode === 107) {
    displaycalc.textContent += ' + ';
  }
  if (event.keyCode === 88 || event.keyCode === 106) {
    displaycalc.textContent += ' x ';
  }
  if (event.keyCode === 173 || event.keyCode === 109) {
    displaycalc.textContent += ' − ';
  }
  if (event.keyCode === 191 || event.keyCode === 111) {
    displaycalc.textContent += ' ÷ ';
  }
  operateWhenTwoOperators();
}

function clearLastEntryKeyEvent(event) {
  const displaycalc = document.querySelector('.displaycalc');
  if (event.keyCode === 8) {
    displaycalc.textContent = displaycalc.textContent.slice(0,-1);
  }
  return null;
}

function operate() {
  const displaycalc = document.querySelector('.displaycalc');
  const displayArray = displaycalc.textContent.split(' ');
  if (displayArray.includes('+')) {
    displaycalc.textContent = add(+displayArray[0], +displayArray[2]);
  } else if (displayArray.includes('−')) {
    displaycalc.textContent = subtract(+displayArray[0], +displayArray[2]);
  } else if (displayArray.includes('x')) {
    displaycalc.textContent = multiply(+displayArray[0], +displayArray[2]);
  } else if (displayArray.includes('÷')) {
    displaycalc.textContent = divide(+displayArray[0], +displayArray[2]);
  }
  return null;
}

function operateButtonClick() {
  const operatebutton = document.querySelector('.equals'); 
  operatebutton.addEventListener('click', operate);
}

function operateButtonKeyEvent(event) {
  if (event.keyCode === 13) {
    operate();
  }
}

function operateWhenTwoOperators() {
  const displaycalc = document.querySelector('.displaycalc');
  if ((displaycalc.textContent.match(/.*([0-9]).*(\+|−|÷|x).*([0-9]).*(\+|−|÷|x)/) || []).length) {
    operate();
  }
}

displayCalculationHotKeys();
displayCalculation();
operateButtonClick();