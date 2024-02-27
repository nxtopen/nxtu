const { test } = require('v-valid');

const testResult = test('CREDIT_CARD', '5555555555554444');
console.log(testResult)