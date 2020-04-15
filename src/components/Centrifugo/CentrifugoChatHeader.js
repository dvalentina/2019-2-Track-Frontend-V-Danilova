import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../../styles/chatHeaderStyles.module.css';
import { OptionsButton, SearchButton, UserAvatar } from '../ChatHeader.js';
import { ReactComponent as ReturnButtonSvg } from '../../assets/icons/return.svg';

export default function CentrifugoChatHeader({ userName }) {
	return (
		<div className={styles.chatHeader}>
			<Link to="/" className={styles.headerButton}>
				<ReturnButtonSvg className={styles.buttonSvg} />
			</Link>
			<UserAvatar />
			<ChatTitle userName={userName} />
			<SearchButton />
			<OptionsButton />
		</div>
	);
}

CentrifugoChatHeader.propTypes = {
	userName: PropTypes.string.isRequired,
};

function ChatTitle({ userName }) {
	const status = `Your username is "${userName}"`;
	return (
		<div className={styles.userInfo}>
			<p className={styles.userName}>Centrifugo Chat</p>
			<p className={styles.userStatus}>{status}</p>
		</div>
	);
}

ChatTitle.propTypes = {
	userName: PropTypes.string.isRequired,
};

