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
