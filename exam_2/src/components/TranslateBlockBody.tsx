import React from 'react'
import InputBlock from './InputBlock'
import ResultBlock from './ResultBlock'
import styles from '../styles/TranslateBlockBody.module.css'
import * as T from '../types/TranslateBlockBody.types'

export default function TranslateBlockBody(props: T.IProps) {
	return(
		<div className={styles.div} >
			<InputBlock
				handleChange={props.handleChange}
				value={props.value}
			/>
			<ResultBlock translation={props.translation} />
		</div>
	)
}