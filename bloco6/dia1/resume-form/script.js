const resumeForm = document.getElementById('resume-form');
const startDateField = document.getElementById('start-date');
const errorBox = document.querySelector('.error-box');
const lastJobFieldSet = document.getElementById('last-job');

function markRequiredFieldLabels() {
  const inputLabels = document.getElementsByTagName('label');

  for (let index = 0; index < inputLabels.length; index += 1) {
    const inputId = inputLabels[index].htmlFor;
    const inputField = document.getElementById(inputId);

    if (inputField.type !== 'radio' && inputField.required) {
      inputLabels[index].innerHTML += "<span class='required-marker'>*</span>";
    }
  }
}

function addStateSelectOptions() {
  const states = [
    {
        "name": "Acre",
        "initials": "ac"
    },
    {
        "name": "Alagoas",
        "initials": "al"
    },
    {
        "name": "Amapá",
        "initials": "ap"
    },
    {
        "name": "Amazonas",
        "initials": "am"
    },
    {
        "name": "Bahia",
        "initials": "ba"
    },
    {
        "name": "Ceará",
        "initials": "ce"
    },
    {
        "name": "Espírito Santo",
        "initials": "es"
    },
    {
        "name": "Goiás",
        "initials": "go"
    },
    {
        "name": "Maranhão",
        "initials": "ma"
    },
    {
        "name": "Mato Grosso",
        "initials": "mt"
    },
    {
        "name": "Mato Grosso do Sul",
        "initials": "ms"
    },
    {
        "name": "Minas Gerais",
        "initials": "mg"
    },
    {
        "name": "Pará",
        "initials": "pa"
    },
    {
        "name": "Paraíba",
        "initials": "pb"
    },
    {
        "name": "Paraná",
        "initials": "pr"
    },
    {
        "name": "Pernambuco",
        "initials": "pe"
    },
    {
        "name": "Piauí",
        "initials": "pi"
    },
    {
        "name": "Rio de Janeiro",
        "initials": "rj"
    },
    {
        "name": "Rio Grande do Norte",
        "initials": "rn"
    },
    {
        "name": "Rio Grande do Sul",
        "initials": "rs"
    },
    {
        "name": "Rondônia",
        "initials": "ro"
    },
    {
        "name": "Roraima",
        "initials": "rr"
    },
    {
        "name": "Santa Catarina",
        "initials": "sc"
    },
    {
        "name": "São Paulo",
        "initials": "sp"
    },
    {
        "name": "Sergipe",
        "initials": "se"
    },
    {
        "name": "Tocantins",
        "initials": "to"
    },
    {
        "name": "Distrito Federal",
        "initials": "df"
    }
  ]

  for (let index = 0; index < states.length; index += 1) {
    const stateSelect = document.getElementById('state-selection');
    const stateInfo = states[index];
    const option = document.createElement('option');

    option.value = stateInfo.initials;
    option.innerText = stateInfo.name;
    stateSelect.appendChild(option);
  }
}

function isNumber(element) {
  if (element - (element - 1) === 1) {
    return true;
  }

  return false;
}

function getNumbersFromString(initialString) {
  let numbersOnlyString = '';
  let currentCharacter = '';

  for (let index = 0; index < initialString.length; index += 1) {
    currentCharacter = initialString[index];
    if(isNumber(currentCharacter)) {
      numbersOnlyString += currentCharacter;
    }
  }

  return numbersOnlyString;
}

function isValidDate(date) {
  let [day, month, year] = date.split('/');
  day = parseInt(day);
  month = parseInt(month);
  year = parseInt(year);

  if (day < 1 || month < 1 || year < 0) {
    return false;
  }

  if (day > 31 || month > 12) {
    return false;
  }

  return true;
}

function createSubmittedDataBox(data) {
  const submittedDataBox = document.createElement('div');
  const dataBoxHeading = document.createElement('h2');

  submittedDataBox.id = 'submitted-form-data';
  dataBoxHeading.innerText = 'Dados Enviados';
  dataBoxHeading.classList.add('section-heading');
  submittedDataBox.appendChild(dataBoxHeading);
  for (let [key, value] of data) {
    if (key === 'cpf') {
      value = value.replaceAll('.', '').replace('-', '');
    }
    const entryParagraph = document.createElement('p');

    entryParagraph.classList.add('entry-paragraph');
    entryParagraph.innerHTML = `<span class='entry-name'>${key}: </span>${value}`;
    submittedDataBox.appendChild(entryParagraph);
  }
  resumeForm.insertAdjacentElement('afterend', submittedDataBox);
  // The folowing line was taken from:
  // https://stackoverflow.com/questions/270612/scroll-to-bottom-of-div#comment117187453_26293764
  document.body.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function showErrorBox() {
  errorBox.style.display = 'block';
  errorBox.addEventListener('click', () => {
    errorBox.style.display = 'none';
  });
  lastJobFieldSet.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function formSubmitHandler(event) {
  const data = new FormData(resumeForm);
  const currentSubmittedDataBox = document.getElementById('submitted-form-data');

  if (!isValidDate(data.get('start-date'))) {
    showErrorBox();
    event.preventDefault();

    return;
  }

  if (currentSubmittedDataBox) {
    currentSubmittedDataBox.remove();
  }

  createSubmittedDataBox(data);
  errorBox.style.display = 'none';
  event.preventDefault();
}

function formatStartDate(event) {
  let currentValue = event.target.value;
  const currentValueNumbersOnly = getNumbersFromString(currentValue);

  if (event.inputType !== 'insertText') {
    return;
  }

  if (!isNumber(event.data)) {
    currentValue = currentValue.substring(0, currentValue.lastIndexOf(event.data));
    event.target.value = currentValue;
    return;
  }

  if (currentValueNumbersOnly.length === 2 || currentValueNumbersOnly.length === 4) {
    event.target.value += '/';
  }
}

function formatCpf(event) {
  let currentValue = event.target.value;
  const currentValueNumbersOnly = getNumbersFromString(currentValue);

  if (event.inputType !== 'insertText') {
    return;
  }

  if (!isNumber(event.data)) {
    currentValue = currentValue.substring(0, currentValue.lastIndexOf(event.data));
    event.target.value = currentValue;
    return;
  }

  if (currentValueNumbersOnly.length % 3 === 0 && currentValueNumbersOnly.length < 9) {
    event.target.value += '.';
  } else if (currentValueNumbersOnly.length === 9) {
    event.target.value += '-';
  }
}

window.onload = () => {
  const cpfField = document.getElementById('cpf');
  const clearAllButton = document.getElementById('clear-all');

  errorBox.style.display = 'none';
  cpfField.addEventListener('input', formatCpf);
  startDateField.addEventListener('input', formatStartDate);
  resumeForm.addEventListener('submit', formSubmitHandler);
  clearAllButton.addEventListener('click', () => {
    const currentSubmittedDataBox = document.getElementById('submitted-form-data');

    if (currentSubmittedDataBox) {
      currentSubmittedDataBox.remove();
    }

    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  addStateSelectOptions();
  markRequiredFieldLabels();
};