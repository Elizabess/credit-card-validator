import { isValidCardNumber, getCardType } from '../src/validator';

test('Valid Visa card number', () => {
    expect(isValidCardNumber('4111111111111111')).toBe(true);
    expect(getCardType('4111111111111111')).toBe('Visa');
});

test('Invalid card number', () => {
    expect(isValidCardNumber('1234567890123456')).toBe(false);
    expect(getCardType('1234567890123456')).toBe('Unknown');
});
   
