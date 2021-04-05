function styleElements(elementsToBeStyled, propertyName, propertyValue) {
  for (let element of elementsToBeStyled) {
    element.style[propertyName] = propertyValue;
  }
}

function styleSectionElements(sectionSelector, element, propertyName, propertyValue) {
  let elementsToBeStyled;

  if (element === null) {
    elementsToBeStyled = document.querySelectorAll(`${sectionSelector}`);
  } else {
    elementsToBeStyled = document.querySelectorAll(`${sectionSelector} ${element}`);
  }

  styleElements(elementsToBeStyled, propertyName, propertyValue);
}

// Change the background color of the header container.
styleSectionElements('#header-container', null, 'backgroundColor', 'rgb(0, 176, 105)');


// Change the background color of the urgent tasks boxes and headers.
styleSectionElements('.emergency-tasks', 'div', 'backgroundColor', 'rgb(255, 159, 132)');
styleSectionElements('.emergency-tasks', 'h3', 'backgroundColor', 'rgb(165, 0, 243)');


// Change the background color of the non-urgent tasks boxes and headers.
styleSectionElements('.no-emergency-tasks', 'div', 'backgroundColor', 'rgb(249, 219, 94)');
styleSectionElements('.no-emergency-tasks', 'h3', 'backgroundColor', 'black');


// Change the background color of the footer container.
styleSectionElements('#footer-container', null, 'backgroundColor', 'rgb(0, 53, 51)');
