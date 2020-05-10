import React from 'react';
import styles from '../styles/chatListHeaderStyles.module.css';
import Boundary from './Boundary.js';
import { ReactComponent as MenuButtonSvg } from '../assets/icons/menu.svg';
import { ReactComponent as SearchButtonSvg } from '../assets/icons/search.svg';

export default function ChatListHeader(props) {
	return (
		<Boundary>
			<div className={styles.chatListHeader}>
				<MenuButton />
				<ChatListTitle />
				<SearchButton />
			</div>
		</Boundary>
	);
}

function MenuButton(props) {
	return (
		<Boundary>
			<button type='button' className={styles.headerButton}>
				<MenuButtonSvg className={styles.buttonSvg} />
			</button>
		</Boundary>
	);
}

function ChatListTitle(props) {
	return (
		<Boundary>
			<p className={styles.chatListTitle}>Messenger</p>
		</Boundary>
	);
}

function SearchButton(props) {
	return (
		<Boundary>
			<button type='button' className={styles.headerButton}>
				<SearchButtonSvg className={styles.buttonSvg} />
			</button>
		</Boundary>
	);
}

export { MenuButton, ChatListTitle, SearchButton };
