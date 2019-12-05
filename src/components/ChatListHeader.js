import React from 'react';
import styles from '../styles/chatListHeaderStyles.module.css';
import { ReactComponent as MenuButtonSvg } from '../assets/menu.svg';
import { ReactComponent as SearchButtonSvg } from '../assets/search.svg';

export default function ChatListHeader(props) {
	return (
		<div className={styles.chatListHeader}>
			<MenuButton />
			<ChatListTitle />
			<SearchButton />
		</div>
	);
}

function MenuButton(props) {
	return (
		<button className={styles.headerButton}>
			<MenuButtonSvg className={styles.buttonSvg} />
		</button>
	);
}
function ChatListTitle(props) {
	return (
		<p className={styles.chatListTitle}>Messenger</p>
	);
}

function SearchButton(props) {
	return (
		<button className={styles.headerButton}>
			<SearchButtonSvg className={styles.buttonSvg} />
		</button>
	);
}