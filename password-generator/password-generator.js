const generatePassword = require('generate-password');

// Define password generation options
const passwordOptions = {
  length: 12,            // Change this value to set the desired password length
  numbers: true,
  symbols: true,
  uppercase: true,
  excludeSimilarCharacters: true,
};

// Generate a random password
const password = generatePassword.generate(passwordOptions);

console.log('Generated Password:', password);
