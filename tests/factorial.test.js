const { default: expect } = require('expect');
const factorial = require('../factorial');

describe('Test function factorial', () => {
    test('factorial function calculate the factorial of a number', () => {
        expect(factorial(5)).toBe(120);
    });
});
