import React, { useState } from 'react'
import InputBlock from './InputBlock'
import ResultBlock from './ResultBlock'
import styles from '../styles/TranslateBlockBody.module.css'

export default function TranslateBlockBody() {
	const [value, setValue] = useState('')

	function handleChange(event: any) {
		setValue(event.target.value)
	}

	return(
		<div className={styles.div} >
			<InputBlock
				handleChange={handleChange}
				value={value}
			/>
			<ResultBlock />
		</div>
	)
}