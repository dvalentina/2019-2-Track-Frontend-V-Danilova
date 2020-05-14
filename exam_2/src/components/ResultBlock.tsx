import React from 'react'
import styles from '../styles/ResultBlock.module.css'
import * as T from '../types/ResultBlock.types'

export default function ResultBlock(props: T.IProps) {
	return (
		<div className={styles.div} >
			{props.translation}
		</div>
	)
}