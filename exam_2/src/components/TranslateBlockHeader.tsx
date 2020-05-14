import React from 'react'
import LanguageLine from './LanguageLine'
import * as T from '../types/TranslateBlockHeader.types'
import styles from '../styles/TranslateBlockHeader.module.css'

export default function TranslateBlockHeader(props: T.IProps) {
	return (
		<div className={styles.div}>
			<LanguageLine
				languageCodes={props.languageCodes}
				type='input'
				chosenLanguage={props.inputLanguage}
				handleLanguageChange={props.handleInputLanguageChange}
			/>
			<LanguageLine
				languageCodes={props.languageCodes}
				type='result'
				chosenLanguage={props.resultLanguage}
				handleLanguageChange={props.handleResultLanguageChange}
			/>
		</div>
	)
}