export interface IProps {
	languageCodes: Map<string, string>,
    handleLanguageChange(language: string): void,
    handleNewLanguageBlock(language: string): void,
}