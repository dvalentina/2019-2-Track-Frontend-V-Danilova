import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../styles/chatHeaderStyles.module.css';
import Boundary from './Boundary.js';
import { ReactComponent as UserAvatarSvg } from '../assets/icons/user.svg';
import { ReactComponent as ReturnButtonSvg } from '../assets/icons/return.svg';
import { ReactComponent as SearchButtonSvg } from '../assets/icons/search.svg';
import { ReactComponent as OptionsButtonSvg } from '../assets/icons/options.svg';

export default function ChatHeader(props) {
	return (
		<div className={styles.chatHeader}>
			<Link to="/" className={styles.headerButton}>
				<ReturnButtonSvg className={styles.buttonSvg} />
			</Link>
			<UserAvatar />
			<ChatTitle />
			<SearchButton />
			<OptionsButton />
		</div>
	);
}

function UserAvatar(props) {
	return (
		<div className={styles.userAvatar}>
			<UserAvatarSvg className={styles.userAvatarSvg} />
		</div>
	);
}

function SearchButton(props) {
	return (
		<button type="button" className={styles.headerButton}>
			<SearchButtonSvg className={styles.buttonSvg} />
		</button>
	);
}

function OptionsButton(props) {
	return (
		<button type="button" className={styles.headerButton}>
			<OptionsButtonSvg className={styles.buttonSvg} />
		</button>
	);
}

function ChatTitle(props) {
	const { chatId } = useParams();
	let userName = 'User Name';
	const chatHistory = JSON.parse(localStorage.getItem('chats')) || [];
	if (chatHistory !== null) {
		const currentChat = chatHistory[chatId];
		userName = currentChat.name;
	}
	const userStatus = 'был(а) 2 часа назад';
	return (
		<Boundary>
			<div className={styles.userInfo}>
				<p className={styles.userName}>{userName}</p>
				<p className={styles.userStatus}>{userStatus}</p>
			</div>
		</Boundary>
	);
}

export { OptionsButton, SearchButton, UserAvatar };
