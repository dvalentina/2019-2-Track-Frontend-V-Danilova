import React from 'react'
import TranslateBlock from './TranslateBlock'
import styles from '../styles/Translate.module.css'

export default function Translate() {
	return (
		<div className={styles.div} >
			<p className={styles.p} >TechnoTrack Translate</p>
			<TranslateBlock />
		</div>
	)
}
