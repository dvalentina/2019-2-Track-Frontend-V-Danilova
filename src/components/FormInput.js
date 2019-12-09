import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/formInputStyles.module.css';
import { ReactComponent as AttachmentButtonSvg } from '../assets/attachment.svg';

export default function FormInput({ value, handleChange, handleSubmit }) {
	return (
		<form
			className={styles.formInput} 
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				placeholder="Сообщение"
				value={value}
				onChange={handleChange}
				className={styles.inputMessage}
			/>
			<AttachmentButton />
		</form>
	);
}

FormInput.propTypes = {
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

function AttachmentButton(props) {
	return (
		<button type='button' className={styles.attachmentButton}>
			<AttachmentButtonSvg className={styles.attachmentButtonSvg} />
		</button>
	);
}
