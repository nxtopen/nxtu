declare module 'nxtu' {
    type Rule = string;
    type RuleName = string;
    type Text = string;

    export function validate(ruleName: RuleName, text: Text): boolean;
}