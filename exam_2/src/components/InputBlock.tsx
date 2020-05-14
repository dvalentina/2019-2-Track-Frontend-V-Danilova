import React from 'react'
import * as T from '../types/InputBlock.types'
import styles from '../styles/InputBlock.module.css'

export default function InputBlock(props: T.IInputBlockProps) {
    return(
        <div className={styles.div}>
            <form>
			    <textarea className={styles.textarea}
			    	placeholder='Введите текст для перевода'
			    	value={props.value}
			    	onChange={props.handleChange}
			    />
		    </form>
        </div>
    )
}