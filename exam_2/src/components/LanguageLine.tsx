import React, { useState } from 'react'
import LanguageBlock from './LanguageBlock'
import * as T from '../types/LanguageLine.types'
import styles from '../styles/LanguageLine.module.css'

export default function LanguageLine(props: T.IProps) {
	const [buttonsPressedState, setButtonsPressedState] = useState([false, false, false])
	const shownLanguages: Array<string> = ['ENGLISH', 'RUSSIAN', 'GERMAN']
	let detectLanguage = null
	let languages: Array<any> = []

	function handleClick(name: string) {
		props.handleLanguageChange(name)
		const languageIndex: number = shownLanguages.indexOf(name)
		let buttonsStateNew: Array<boolean> = [false, false, false]
		buttonsStateNew[languageIndex] = true
		setButtonsPressedState(buttonsStateNew)
	}

	for (let i = 0; i < 3; i += 1) {
		languages.push(<LanguageBlock
			name={shownLanguages[i]}
			isPressed={buttonsPressedState[i]}
			handleClick={handleClick}
		/>)
	}

	if (props.type === 'input') {
		detectLanguage = <LanguageBlock
			name='DETECT LANGUAGE'
			isPressed={false}
			handleClick={handleClick}
		/>
	}

	return (
		<div className={styles.div} >
			{detectLanguage}
			{languages}
		</div>
	)
}