const { test } = require('regexpro');

const isCreditCard = test('CREDIT_CARD', '5555555555554444');
if (isCreditCard) {
    console.log('Valid credit card number');
} else {
    console.log('Invalid credit card number');
}