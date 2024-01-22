
const factorial = number => (number === 1) ? 1 : factorial(number - 1) * number;

module.exports = factorial;
