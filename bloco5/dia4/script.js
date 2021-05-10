const reader = document.querySelector('.reader');
const resetPreferencesButton = document.getElementById('reset-preferences');

const fields = {
  color: document.getElementById('color'),
  backgroundColor: document.getElementById('background-color'),
  fontSize: document.getElementById('font-size'),
  lineHeight: document.getElementById('line-height'),
  fontFamily: document.getElementById('font-family'),
}

const defaultPreferences = {
  color: '#000000',
  backgroundColor: '#ffffff',
  fontSize: 16,
  lineHeight: 1.2,
  fontFamily: 'Roboto',
};

const currentPreferences = {};

function saveCurrentPreference(property, value) {
  const savedPreferences = JSON.parse(localStorage.getItem('preferences'));

  savedPreferences[property] = value;
  localStorage.setItem('preferences', JSON.stringify(savedPreferences));
}

function updateCurrentPreference(property, value) {
  currentPreferences[property] = value;
  saveCurrentPreference(property, value);
}

function updateAllCurrentPreferences(newPreferences) {
  Object
    .entries(newPreferences)
    .forEach(([property, value]) => updateCurrentPreference(property, value));
  Object
    .entries(fields)
    .forEach(([fieldName, field]) =>  {
      field.value = currentPreferences[fieldName];
    });
}

function updateStyle(property, value) {
  reader.style[property] = value + (property === 'fontSize' ? 'px' : '');
}

function updateReaderStyles() {
  Object
    .entries(currentPreferences)
    .forEach(([property, value]) =>
      updateStyle(property, value));
}

function handlePreferencesChanges({ target }) {
  updateStyle(target.name, target.value);
  updateCurrentPreference(target.name, target.value);
}

function initializePreferencesInterface() {
  Object
    .entries(fields)
    .forEach(([fieldName, field]) =>  {
      field.value = currentPreferences[fieldName];
      field.addEventListener('change', handlePreferencesChanges);
    });
}

function initializeCurrentPreferences() {
  Object.assign(currentPreferences, JSON.parse(localStorage.getItem('preferences')));
}

function initializeReader() {
  if (!localStorage.getItem('preferences')) {
    localStorage.setItem('preferences', JSON.stringify(defaultPreferences));
  }

  initializeCurrentPreferences();
  initializePreferencesInterface();
  updateReaderStyles();
}

window.onload = () => {
  initializeReader();
  resetPreferencesButton.addEventListener('click', () => {
    updateAllCurrentPreferences(defaultPreferences);
    updateReaderStyles();
  });
};