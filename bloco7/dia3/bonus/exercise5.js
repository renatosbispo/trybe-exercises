const assert = require('assert');

const validPassword = 'abcD1fg4';
const errorMessages = {
  length: 'Password must be at least 8 characters long.',
  empty: 'No password was specified.',
  noUpperCase: 'Password must have at least one uppercase letter.',
  noLowerCase: 'Password must have at least one lowercase letter.',
  noNumber: 'Password must have at least one number.',
};
const successMessage = `'${validPassword}' is a valid password!`;

function getErrorRegex(errorMessage) {
  return new RegExp(`^Error: ${errorMessage}$`);
}

function verifyPassword(password) {
  if (!password) throw new Error(errorMessages.empty);

  if (password.length < 8) throw new Error(errorMessages.length);

  if (!password.split('').some((char) => char !== char.toLowerCase())) {
    throw new Error(errorMessages.noUpperCase);
  }

  if (!password.split('').some((char) => char !== char.toUpperCase())) {
    throw new Error(errorMessages.noLowerCase);
  }

  if (password.split('').every((char) => isNaN(char))) {
    throw new Error(errorMessages.noNumber);
  }

  return successMessage;
}

assert.throws(() => verifyPassword('12345'), getErrorRegex(errorMessages.length));
assert.throws(() => verifyPassword(), getErrorRegex(errorMessages.empty));
assert.throws(() => verifyPassword(''), getErrorRegex(errorMessages.empty));
assert.throws(() => verifyPassword(null), getErrorRegex(errorMessages.empty));
assert.throws(() => verifyPassword('abcd1234'), getErrorRegex(errorMessages.noUpperCase));
assert.throws(() => verifyPassword('ABCD1234'), getErrorRegex(errorMessages.noLowerCase));
assert.throws(() => verifyPassword('aBcdefgh'), getErrorRegex(errorMessages.noNumber));
assert.strictEqual(verifyPassword(validPassword), successMessage);