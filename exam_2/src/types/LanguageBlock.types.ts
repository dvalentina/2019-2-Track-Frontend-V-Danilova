export interface ILanguageBlockProps {
    name: string,
    isPressed: boolean,
    handleClick(name: string): void,
}