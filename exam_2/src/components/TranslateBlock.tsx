import React, { useState } from 'react'
import TranslateBlockHeader from './TranslateBlockHeader'
import TranslateBlockBody from './TranslateBlockBody'
import styles from '../styles/TranslateBlock.module.css'

export default function TranslateBlock() {
	const [inputLanguage, setInputLanguage] = useState('ENGLISH')
	const [resultLanguage, setResultLanguage] = useState('RUSSIAN')

	function handleInputLanguageChange(language: string) {
		setInputLanguage(language)
	}

	function handleResultLanguageChange(language: string) {
		setResultLanguage(language)
	}

	return (
		<div className={styles.div}>
			<TranslateBlockHeader
				handleInputLanguageChange={handleInputLanguageChange}
				handleResultLanguageChange={handleResultLanguageChange}
				inputLanguage={inputLanguage}
				resultLanguage={resultLanguage}
			/>
			<TranslateBlockBody />
		</div>
	)
}