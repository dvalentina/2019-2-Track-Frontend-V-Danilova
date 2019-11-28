import React from 'react';
import styles from '../styles/chatListStyles.module.css';
import { ReactComponent as CreateChatButtonSvg } from '../assets/pencil.svg';

export default function ChatList(props) {
	return (
		<div>
			<ChatListSpace />
			<CreateChatButton />
		</div>
	);
}

function ChatListSpace(props) {
	return (
		<div className={styles.chatListSpace} />
	);
}

function CreateChatButton(props) {
	return (
		<button className={styles.createChatButton}>
			<CreateChatButtonSvg className={styles.createChatButtonSvg} />
		</button>
	);
}
