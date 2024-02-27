import { rules } from './rules';

export function validate(ruleName: string, text: string): boolean {
    const validationRule = rules[ruleName];
    if (!validationRule) {
        throw new Error(`Rule "${ruleName}" not found`);
    }
    const regex = new RegExp(validationRule);
    return regex.test(text);
}