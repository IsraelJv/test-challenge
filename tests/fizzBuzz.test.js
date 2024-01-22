const { default: expect } = require('expect');
const fizzBuzz = require('../fizzBuzz');

describe('Test function fizzBuzz', () => {
    test('should return a string FizzBuzz if number is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    test('should return a string Fizz if number is divisible by 3', () => {
        expect(fizzBuzz(12)).toBe('Fizz');
    });

    test('should return a string Buzz if number is divisible by 5', () => {
        expect(fizzBuzz(20)).toBe('Buzz');
    });

    test('should return a number if number is not divisible by 3 or 5', () => {
        expect(fizzBuzz(22)).toBe(22);
    });
});