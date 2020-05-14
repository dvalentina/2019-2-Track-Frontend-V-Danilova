import React from 'react'
import styles from '../styles/LanguageList.module.css'
import * as T from '../types/LanguageList.types'

export default function LanguageList(props: T.IProps) {
	if (!props.isPressed) {
		return null
	}
	let languageList: Array<any> = []
	props.languageCodes.forEach(function(key, value) {
		languageList.push(
			<button
				className={styles.languageRow}
				onClick={() => props.handleLanguageClick(value)}
			>
				{value}
			</button>
		)
	})

	return(
		<div className={styles.languageList}>
			{languageList}
		</div>
	)
}