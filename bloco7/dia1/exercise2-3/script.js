window.onload = () => {
  let clickCount = 0;
  const counterDisplay = document.querySelector('.counter-display');
  const counterButton = document.querySelector('.counter-button');

  counterDisplay.innerHTML = clickCount.toString(10);
  counterButton.addEventListener('click', () => {
    clickCount === 99 ? clickCount = 0 : clickCount += 1;
    counterDisplay.innerHTML = clickCount.toString(10);
  });
};