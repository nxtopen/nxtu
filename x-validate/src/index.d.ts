declare module 'x-validate' {
    type Rule = string;
    type RuleName = string;
    type Text = string;

    export function test(ruleName: RuleName, text: Text): boolean;
}