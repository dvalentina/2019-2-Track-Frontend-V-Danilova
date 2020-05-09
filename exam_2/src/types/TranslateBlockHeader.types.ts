export interface IProps {
    handleInputLanguageChange(language: string): void,
    handleResultLanguageChange(language: string): void,
    inputLanguage: string,
    resultLanguage: string,
	languageCodes: Map<string, string>,
}
