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
  const stardDateField = document.getElementById('start-date');

  cpfField.addEventListener('input', formatCpf);
  stardDateField.addEventListener('input', formatStartDate);
  addStateSelectOptions();
  markRequiredFieldLabels();
};