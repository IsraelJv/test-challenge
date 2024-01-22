const { default: expect } = require('expect');
const processDNA = require('../dna');

describe('Test function processDNA', () => {
    test('If the DNA string is empty, return an empty string', () => {
        expect(processDNA('')).toBe('');
    });

    test('The function should remove any non-canonical DNA bases (anything other than "C", "T", "A", "G")', () => {
        expect(processDNA('CTAGLPNMO')).toBe('CTAG');
    });

    test('The function should be case sensitive (keep "C" but remove "c")', () => {
        expect(processDNA('CTAGctag')).toBe('CTAG');
    });

});