export function isValidCardNumber(cardNumber) {
    const digits = cardNumber.split('').reverse().map(Number);
    const sum = digits.reduce((acc, digit, index) => {
        if (index % 2 !== 0) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        return acc + digit;
    }, 0);
    return sum % 10 === 0;
}

export function getCardType(cardNumber) {
    const cardTypes = {
        'Visa': /^4[0-9]{12}(?:[0-9]{3})?$/,
        'MasterCard': /^5[1-5][0-9]{14}$/,
        'Mir': /^220[0-4][0-9]{12}$/,

    };

    for (const [type, regex] of Object.entries(cardTypes)) {
        if (regex.test(cardNumber)) {
            return type;
        }
    }
    return 'Unknown';
}

