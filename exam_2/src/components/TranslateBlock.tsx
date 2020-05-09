import React, { useState, useEffect } from 'react'
import TranslateBlockHeader from './TranslateBlockHeader'
import TranslateBlockBody from './TranslateBlockBody'
import styles from '../styles/TranslateBlock.module.css'
import TranslateUtils from '../utils/TranslateUtils'
import { ITranslateParams } from '../utils/TranslateUtils/types'

export default function TranslateBlock() {
	const [inputLanguage, setInputLanguage] = useState('ENGLISH')
	const [resultLanguage, setResultLanguage] = useState('RUSSIAN')
	const [translation, setTranslation] = useState('')
	const [value, setValue] = useState('')

	function handleChange(event: any) {
		setValue(event.target.value)
	}

	const languageCodes: Map<string, string> = new Map([
		['RUSSIAN', 'ru'],
		['ENGLISH', 'en'],
		['GERMAN', 'de'],
	])

	function handleInputLanguageChange(language: string) {
		setInputLanguage(language)
	}

	function handleResultLanguageChange(language: string) {
		setResultLanguage(language)
	}

	async function translate() {
		let inputCode
		let resultCode
		let lang: string
		if (languageCodes.has(resultLanguage)) {
			resultCode = languageCodes.get(resultLanguage)
		}
		
		if (inputLanguage === 'DETECT LANGUAGE') {
			lang = `${resultCode}`
		} else {
			if (languageCodes.has(inputLanguage)) {
				inputCode = languageCodes.get(inputLanguage)
			}
			lang = `${inputCode}-${resultCode}`
		}
		
		const params: ITranslateParams = {
		    lang: lang,
		    text: value,
		}
		const result = await TranslateUtils.translateText(params)
		setTranslation(result.text)
	}

	useEffect(() => {
		translate()
	})

	return (
		<div className={styles.div}>
			<TranslateBlockHeader
				handleInputLanguageChange={handleInputLanguageChange}
				handleResultLanguageChange={handleResultLanguageChange}
				inputLanguage={inputLanguage}
				resultLanguage={resultLanguage}
			/>
			<TranslateBlockBody
				translation={translation}
				value={value}
				handleChange={handleChange}
			/>
		</div>
	)
}