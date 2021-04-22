const resumeForm = document.getElementById('resume-form');
const startDateField = document.getElementById('start-date');
const lastJobFieldSet = document.getElementById('last-job');
const requiredMessage = "Esse campo é obrigatório.";

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
  const states = {
    "ac": "Acre",
    "al": "Alagoas",
    "ap": "Amapá",
    "am": "Amazonas",
    "ba": "Bahia",
    "ce": "Ceará",
    "df": "Distrito Federal",
    "es": "Espírito Santo",
    "go": "Goiás",
    "ma": "Maranhão",
    "mt": "Mato Grosso",
    "ms": "Mato Grosso do Sul",
    "mg": "Minas Gerais",
    "pa": "Pará",
    "pb": "Paraíba",
    "pr": "Paraná",
    "pe": "Pernambuco",
    "pi": "Piauí",
    "rj": "Rio de Janeiro",
    "rn": "Rio Grande do Norte",
    "rs": "Rio Grande do Sul",
    "ro": "Rondônia",
    "rr": "Roraima",
    "sc": "Santa Catarina",
    "sp": "São Paulo",
    "se": "Sergipe",
    "to": "Tocantins"
  }
  const initials = Object.keys(states);

  for (let index = 0; index < initials.length; index += 1) {
    const stateSelect = document.getElementById('state-selection');
    const option = document.createElement('option');

    option.value = initials[index];
    option.innerText = states[initials[index]];
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

function createSubmittedDataBox(data) {
  const submittedDataBox = document.createElement('div');
  const dataBoxHeading = document.createElement('h2');

  submittedDataBox.id = 'submitted-form-data';
  dataBoxHeading.innerText = 'Dados Enviados';
  dataBoxHeading.classList.add('section-heading');
  submittedDataBox.appendChild(dataBoxHeading);
  for (let key of Object.keys(data)) {
    let value = data[key];
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

new window.JustValidate('#resume-form', {
  rules: {
    name: {
      required: true,
      maxLength: 40,
    },
    email: {
      required: true,
      email: true,
      maxLength: 50,
    },
    cpf: {
      required: true,
      maxLength: 14,
    },
  },
  messages: {
    name: {
      required: requiredMessage,
    },
    email: {
      required: requiredMessage,
      email: 'Insira um e-mail válido.'
    },
    cpf: {
      required: requiredMessage,
    }
  },
  submitHandler: function (form, values, ajax) {
    const currentSubmittedDataBox = document.getElementById('submitted-form-data');

    if (currentSubmittedDataBox) {
      currentSubmittedDataBox.remove();
    }

    createSubmittedDataBox(values);
  },
  focusWrongField: true,
});

window.onload = () => {
  const cpfField = document.getElementById('cpf');
  const clearAllButton = document.getElementById('clear-all');

  cpfField.addEventListener('input', formatCpf);
  //resumeForm.addEventListener('submit', formSubmitHandler);
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