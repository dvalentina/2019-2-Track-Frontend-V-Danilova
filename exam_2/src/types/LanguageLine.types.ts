export interface IProps {
    type: string,
    chosenLanguage: string,
    handleLanguageChange(language: string): void,
}