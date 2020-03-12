import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../styles/chatHeaderStyles.module.css';
import { ReactComponent as UserAvatarSvg } from '../assets/user.svg';
import { ReactComponent as ReturnButtonSvg } from '../assets/return.svg';
import { ReactComponent as SearchButtonSvg } from '../assets/search.svg';
import { ReactComponent as OptionsButtonSvg } from '../assets/options.svg';

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
		<div className={styles.userInfo}>
			<p className={styles.userName}>{userName}</p>
			<p className={styles.userStatus}>{userStatus}</p>
		</div>
	);
}

export { OptionsButton, SearchButton, UserAvatar };
