import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/chatHeaderStyles.module.css';
import { ReactComponent as UserAvatarSvg } from '../assets/user.svg';
import { ReactComponent as ReturnButtonSvg } from '../assets/return.svg';
import { ReactComponent as SearchButtonSvg } from '../assets/search.svg';
import { ReactComponent as OptionsButtonSvg } from '../assets/options.svg';

export default function ChatHeader({ openedChatId, handleReturn }) {
	return (
		<div className={styles.chatHeader}>
			<ReturnButton handleReturn={handleReturn} />
			<UserAvatar />
			<ChatTitle openedChatId={openedChatId} />
			<SearchButton />
			<OptionsButton />
		</div>
	);
}

ChatHeader.propTypes = {
	openedChatId: PropTypes.number.isRequired, 
	handleReturn: PropTypes.func.isRequired,
};

function UserAvatar(props) {
	return (
		<div className={styles.userAvatar}>
			<UserAvatarSvg className={styles.userAvatarSvg} />
		</div>
	);
}

function ReturnButton({ handleReturn }) {
	return (
		<button
			type='button'
			className={styles.headerButton}
			onClick={handleReturn}
		>
			<ReturnButtonSvg className={styles.buttonSvg} />
		</button>
	);
}

ReturnButton.propTypes = {
	handleReturn: PropTypes.func.isRequired,
};

function SearchButton(props) {
	return (
		<button type='button' className={styles.headerButton}>
			<SearchButtonSvg className={styles.buttonSvg} />
		</button>
	);
}

function OptionsButton(props) {
	return (
		<button type='button' className={styles.headerButton}>
			<OptionsButtonSvg className={styles.buttonSvg} />
		</button>
	);
}

function ChatTitle({ openedChatId }) {
	const chatHistory = JSON.parse(localStorage.getItem('chats')) || [];
	const currentChat = chatHistory[openedChatId];
	const userName = currentChat.name;
	return (
		<div className={styles.userInfo}>
			<p className={styles.userName}>{userName}</p>
			<p className={styles.userStatus}>был(а) 2 часа назад</p>
		</div>
	);
}

ChatTitle.propTypes = {
	openedChatId: PropTypes.number.isRequired,
};
