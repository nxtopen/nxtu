# Pro Validations Using Regex, Just Test

## Install

```
npm i v-valid
```

## Usage

### Import

#### Javascript

```
const { test } = require('v-valid');
```

#### Typescript

```
import { test } from 'v-valid';
```

#### Example

```
const isCreditCard = test('CREDIT_CARD', '5555555555554444');
if (isCreditCard) {
    console.log('Valid credit card number');
} else {
    console.log('Invalid credit card number');
}
```

### List of Supported Rules

- **CREDIT_CARD**: Validates a 16-digit credit card number.
- **EMAIL**: Validates an email address.
- **PHONE_NUMBER**: Validates a phone number.
- **ZIP_CODE**: Validates a ZIP code.
- **DATE**: Validates a date in the format YYYY-MM-DD.
- **URL**: Validates a URL.
- **IP_ADDRESS**: Validates an IP address.
- **HTML_TAG**: Validates an HTML tag.
- **USERNAME**: Validates a username.
- **PASSWORD**: Validates a password with specific criteria (minimum 8 characters, at least one uppercase letter, one lowercase letter, and one digit).
- **ALPHANUMERIC**: Validates alphanumeric characters.
- **ALPHABET**: Validates alphabetic characters.
- **DIGITS**: Validates digits.
- **LOWERCASE**: Validates lowercase alphabetic characters.
- **UPPERCASE**: Validates uppercase alphabetic characters.
- **HEX_COLOR**: Validates a hexadecimal color code.
- **HTML_COLOR**: Validates an HTML color code.
- **UUID**: Validates a UUID (Universally Unique Identifier).
- **MAC_ADDRESS**: Validates a MAC address.
- **FILE_PATH**: Validates a file path.
- **CURRENCY**: Validates a currency format.
- **HTML_COMMENT**: Validates an HTML comment.
- **MD5**: Validates an MD5 hash.
- **SHA1**: Validates a SHA-1 hash.
- **SHA256**: Validates a SHA-256 hash.
- **SSN**: Validates a Social Security Number (SSN).
- **IMEI**: Validates an IMEI (International Mobile Equipment Identity) number.
- **ISBN**: Validates an ISBN (International Standard Book Number).
- **UUID4**: Validates a version 4 UUID.
- **BANK_ACCOUNT_NUMBER**: Validates a bank account number.


## Quality

This plugin is tested and is compatable with NextJS(Typescript) and NodeJS(Javascript)
Feel free to let us know if any issues on [Github Issues](https://github.com/nxtopen/v-valid/issues)

## Contribute

Intrested in contributing of new regex patterns? [Open A Ticket](https://github.com/nxtopen/v-valid/issues) with patters and more information. Intrested in updating any code of the plugin? Please feel free to fork the repo and add PR to us.