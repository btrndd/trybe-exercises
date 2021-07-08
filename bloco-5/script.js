function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

function createDaysList() {
  const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const dezDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDays.length; index += 1) {
    const days = dezDays[index];    
    const daysListItem = document.createElement('li');
      if (days === 24 || days === 25 || days === 31) {
        daysListItem.classList.add('day');
        daysListItem.classList.add('holiday');        
      }
      if (days === 4 || days === 11 || days === 18 || days === 25) {
        daysListItem.classList.add('day');
        daysListItem.classList.add('friday');        
      } else {
        daysListItem.classList.add('day');    
      }
    daysListItem.innerHTML = days;
    
    dezDaysList.appendChild(daysListItem);
  }
}

function createHolidayBtn(string) {
  const listButton = document.querySelector('.buttons-container');
  const itemButton = document.createElement('button');
  itemButton.setAttribute('id','btn-holiday');
  itemButton.innerHTML = string;
  listButton.appendChild(itemButton);
}

function holidayButtonClick() {
  let clickButton = document.querySelector('#btn-holiday');
  clickButton.addEventListener("click", changeHolidayColor);
}

function changeHolidayColor() {
  const listHolidayItem = document.querySelector('.holiday');
  listHolidayItem.style.backgroundColor = '#00008B';
}

createDaysOfTheWeek();
createDaysList();
createHolidayBtn('Feriados');
holidayButtonClick();

// Escreva seu código abaixo.