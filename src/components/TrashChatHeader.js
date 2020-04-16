import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/chatHeaderStyles.module.css';
import { ReactComponent as UserAvatarSvg } from '../assets/icons/user.svg';
import { ReactComponent as ReturnButtonSvg } from '../assets/icons/return.svg';
import { ReactComponent as SearchButtonSvg } from '../assets/icons/search.svg';
import { ReactComponent as OptionsButtonSvg } from '../assets/icons/options.svg';

export default function TrashChatHeader(props) {
	return (
		<div className={styles.chatHeader}>
			<Link to="/" className={styles.headerButton}>
				<ReturnButtonSvg id='return' className={styles.buttonSvg} />
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

export { ChatTitle, OptionsButton, SearchButton, UserAvatar };
