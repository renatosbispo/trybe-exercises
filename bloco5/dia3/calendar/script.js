function createDaysOfTheWeek() {
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercise 1
function createDaysOfTheMonth() {
  const dezDaysList = [28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let daysList = document.getElementById('days');
  let daysListItem;

  for (let day of dezDaysList) {
    daysListItem = document.createElement('li');
    daysListItem.innerText = day;
    daysListItem.classList.add('day');

    if (day === 24 || day === 25 || day === 31) {
      daysListItem.classList.add('holiday');
    }

    if ((day - 3) % 7 === 0) {
      daysListItem.classList.add('friday');
    }

    daysList.appendChild(daysListItem);
  }
}

createDaysOfTheMonth();

// Exercise 2
function createHolidayButton(buttonText) {
  let holidayButton = document.createElement('button');

  holidayButton.innerText = buttonText;
  holidayButton.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(holidayButton);
}

createHolidayButton('Feriados');

// Exercise 3
function setElementsStyle(elements, property, value) {
  for (let element of elements) {
    element.style[property] = value;
  }
}

function addHolidayButtonFunctionality() {
  let holidayButton = document.querySelector('#btn-holiday');

  holidayButton.addEventListener('click', () => {
    let holidays = document.getElementsByClassName('holiday');
    let holidaysCurrentColor = holidays[0].style.color;

    if (holidaysCurrentColor === 'white') {
      setElementsStyle(holidays, 'color', 'rgb(102, 102, 102');
      setElementsStyle(holidays, 'backgroundColor', 'rgb(238,238,238)');
    } else {
      setElementsStyle(holidays, 'color', 'white');
      setElementsStyle(holidays, 'backgroundColor', 'rgb(217, 86, 63)');
    }
  });
}

addHolidayButtonFunctionality();

// Exercise 4
function createFridayButton(buttonText) {
  let fridayButton = document.createElement('button');

  fridayButton.id = 'btn-friday';
  fridayButton.innerText = buttonText;
  document.querySelector('.buttons-container').appendChild(fridayButton);
}

createFridayButton('Sexta-feira');

// Exercise 5
function  setElementsInnerTextWithString(elements, innerText) {
  for (let index = 0; index < elements.length; index += 1) {
    elements[index].innerText = innerText;
  }
}

function  setElementsInnerTextWithArray(elements, innerTexts) {
  for (let index = 0; index < elements.length; index += 1) {
    elements[index].innerText = innerTexts[index];
  }
}

function addFridayButtonFunctionality() {
  let fridayButton = document.getElementById('btn-friday');

  fridayButton.addEventListener('click', () => {
    let fridays = document.getElementsByClassName('friday');
    let fridaysMonthDays = [];

    for (let friday of fridays) {
      fridaysMonthDays.push(parseInt(friday.previousSibling.innerText) + 1);
    }

    if (fridays[0].innerText !== '🎉') {
      setElementsInnerTextWithString(fridays, '🎉');
    } else {
      setElementsInnerTextWithArray(fridays, fridaysMonthDays);
    }
  });
}

addFridayButtonFunctionality();

// Exercise 6