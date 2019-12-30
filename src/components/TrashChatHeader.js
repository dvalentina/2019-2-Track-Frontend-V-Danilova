import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/chatHeaderStyles.module.css';
import { ReactComponent as UserAvatarSvg } from '../assets/user.svg';
import { ReactComponent as ReturnButtonSvg } from '../assets/return.svg';
import { ReactComponent as SearchButtonSvg } from '../assets/search.svg';
import { ReactComponent as OptionsButtonSvg } from '../assets/options.svg';

export default function TrashChatHeader(props) {
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
	return (
		<div className={styles.userInfo}>
			<p className={styles.userName}>Trash Chat</p>
			<p className={styles.userStatus}>trash chat status</p>
		</div>
	);
}
