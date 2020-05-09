import React, { useState, useEffect } from 'react'
import LanguageBlock from './LanguageBlock'
import LanguageListButton from './LanguageListButton'
import * as T from '../types/LanguageLine.types'
import styles from '../styles/LanguageLine.module.css'

export default function LanguageLine(props: T.IProps) {
	const [buttonsPressedState, setButtonsPressedState] = useState([false, false, false])
	const [detectLanguageState, setDetectLanguageState] = useState(false)
	const [shownLanguages, setShownLanguages] = useState(['ENGLISH', 'RUSSIAN', 'GERMAN'])
	let detectLanguage = null
	let languages: Array<any> = []

	function handleClick(name: string) {
		props.handleLanguageChange(name)
		changeButtonsState(name)
	}

	for (let i = 0; i < 3; i += 1) {
		languages.push(<LanguageBlock
			name={shownLanguages[i]}
			isPressed={buttonsPressedState[i]}
			handleClick={handleClick}
		/>)
	}

	function handleNewLanguageBlock(language: string) {
		const shown: Array<string> = shownLanguages
		shown.pop()
		shown.unshift(language)
		setShownLanguages(shown)
		languages.pop()
		languages.unshift(<LanguageBlock
			name={shownLanguages[0]}
			isPressed={buttonsPressedState[0]}
			handleClick={handleClick}
		/>)
	}

	function changeButtonsState(name: string) {
		if (name === 'DETECT LANGUAGE') {
			setDetectLanguageState(true)
			setButtonsPressedState([false, false, false])
		} else {
			setDetectLanguageState(false)
			const languageIndex: number = shownLanguages.indexOf(name)
			let buttonsStateNew: Array<boolean> = [false, false, false]
			buttonsStateNew[languageIndex] = true
			setButtonsPressedState(buttonsStateNew)
		}
	}

	if (props.type === 'input') {
		detectLanguage = <LanguageBlock
			name='DETECT LANGUAGE'
			isPressed={detectLanguageState}
			handleClick={handleClick}
		/>
	}

	useEffect(() => {
		changeButtonsState(props.chosenLanguage)
	}, [props.chosenLanguage])

	return (
		<div className={styles.div} >
			{detectLanguage}
			{languages}
			<LanguageListButton
				handleNewLanguageBlock={handleNewLanguageBlock}
				languageCodes={props.languageCodes}
				handleLanguageChange={props.handleLanguageChange}
			/>
		</div>
	)
}