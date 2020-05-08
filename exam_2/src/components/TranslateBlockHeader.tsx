import React from 'react'
import LanguageLine from './LanguageLine'
import SwapLanguageButton from './SwapLanguageButton'
import * as T from '../types/TranslateBlockHeader.types'
import styles from '../styles/TranslateBlockHeader.module.css'

export default function TranslateBlockHeader(props: T.IProps) {
	return (
		<div className={styles.div}>
			<LanguageLine
				type='input'
				chosenLanguage={props.inputLanguage}
				handleLanguageChange={props.handleInputLanguageChange}
			/>
			<SwapLanguageButton />
			<LanguageLine
				type='result'
				chosenLanguage={props.resultLanguage}
				handleLanguageChange={props.handleResultLanguageChange}
			/>
		</div>
	)
}