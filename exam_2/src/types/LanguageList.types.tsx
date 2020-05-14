export interface IProps {
    isPressed: boolean,
    languageCodes: Map<string, string>,
    handleLanguageClick(language: string): void,
}