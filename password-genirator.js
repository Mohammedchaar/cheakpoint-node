const generatePassword = require('password-generator');
const password = generatePassword.generate({
    length: 10,
    numbers: true
});
console.log(password);