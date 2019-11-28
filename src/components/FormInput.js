import React from 'react';
import styles from '../styles/formInputStyles.module.css';
import attachmentButtonSvg from '../assets/attachment.svg';

export default function FormInput(props) {
	return (
		<div className={styles.formImput}>
			<InputMessage />
			<AttachmentButton />
		</div>
	);
}

function InputMessage(props) {
	return (
		<input type="text" className={styles.inputMessage} />
	);
}

function AttachmentButton(props) {
	return (
		<button className={styles.attachmentButton}>
			<img className={styles.attachmentButtonSvg} src={attachmentButtonSvg} alt="Attach file" />
		</button>
	);
}
