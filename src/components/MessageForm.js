import React from 'react';
import styles from '../styles/messageFormStyles.module.css';
import FormInput from './FormInput.js';

export default function MessageForm(props) {
	return (
		<form>
			<ChatBox />
			<FormInput name="message-text" placeholder="Message" />
		</form>
	);
}

function ChatBox(props) {
	return (
		<div className={styles.chatBox} />
	);
}
