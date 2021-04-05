function styleElements(elementsToBeStyled, propertyName, propertyValue) {
  for (let element of elementsToBeStyled) {
    element.style[propertyName] = propertyValue;
  }
}

function styleTaskBoxesBackgroundColor(className, backgroundColor) {
  let taskSection = document.querySelector(`.${className}`);
  let taskBoxes = taskSection.getElementsByTagName('div');

  styleElements(taskBoxes, 'backgroundColor', backgroundColor);
}

function styleTaskHeadersBackgroundColor(className, backgroundColor) {
  let taskSection = document.querySelector(`.${className}`);
  let taskHeaders = taskSection.getElementsByTagName('h3');

  styleElements(taskHeaders, 'backgroundColor', backgroundColor);
}

// Change the background color of the header container.
let header = document.getElementById('header-container');
header.style.backgroundColor = '#00B069';


// Change the background color of the urgent tasks boxes and headers.
styleTaskBoxesBackgroundColor('emergency-tasks', '#FF9F84');
styleTaskHeadersBackgroundColor('emergency-tasks', '#A500F3');


// Change the background color of the non-urgent tasks boxes and headers.
styleTaskBoxesBackgroundColor('no-emergency-tasks', '#F9DB5E');
styleTaskHeadersBackgroundColor('no-emergency-tasks', 'black');

// Change the background color of the footer container.
let footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#003533';