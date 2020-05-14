import React, { useState } from 'react'
import LanguageList from './LanguageList'
import { ReactComponent as ArrowButtonSvg } from '../assets/arrow.svg'
import styles from '../styles/LanguageListButton.module.css'
import * as T from '../types/LanguageListButton.types'

export default function LanguageListButton(props: T.IProps) {
	const [isPressed, setIsPressed] = useState(false)

	function handleButtonClick() {
		setIsPressed(!isPressed)	
	}

	function handleLanguageClick(language: string) {
		setIsPressed(false)
		props.handleLanguageChange(language)
		props.handleNewLanguageBlock(language)
	}

	return(
		<div>
			<button
				onClick={handleButtonClick}
				type='button'
				className={styles.button}
			>
				<ArrowButtonSvg className={styles.svg} />
			</button>
			<LanguageList
				handleLanguageClick={handleLanguageClick}
				languageCodes={props.languageCodes}
				isPressed={isPressed}
			/>
		</div>
	)
}