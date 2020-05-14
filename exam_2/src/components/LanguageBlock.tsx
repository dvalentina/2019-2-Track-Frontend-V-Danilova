import React from 'react'
import * as T from '../types/LanguageBlock.types'
import styles from '../styles/LanguageBlock.module.css'

export default function LanguageBlock(props: T.ILanguageBlockProps) {
	let styleName: any = styles.button
	if (props.isPressed === true) {
		styleName = styles.buttonPressed
	}
	return (
		<button
			className={styleName}
			onClick={() => props.handleClick(props.name)}
		>
			{props.name}
		</button>
	)
}
