import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../../styles/chatHeaderStyles.module.css';
import { OptionsButton, SearchButton, UserAvatar } from '../ChatHeader.js';
import { ReactComponent as ReturnButtonSvg } from '../../assets/icons/return.svg';
import Boundary from '../Boundary';

export default function WebRTCChatHeader({ myPeerID }) {
	return (
		<Boundary>
			<div className={styles.chatHeader}>
				<Link to="/" className={styles.headerButton}>
					<ReturnButtonSvg className={styles.buttonSvg} />
				</Link>
				<UserAvatar />
				<ChatTitle myPeerID={myPeerID} />
				<SearchButton />
				<OptionsButton />
			</div>
		</Boundary>
	);
}

WebRTCChatHeader.propTypes = {
	myPeerID: PropTypes.string.isRequired,
};

function ChatTitle({ myPeerID }) {
	const userStatus = `Your peer ID: ${myPeerID}`;
	return (
		<Boundary>
			<div className={styles.userInfo}>
				<p className={styles.userName}>WebRTC Chat</p>
				<p className={styles.userStatus}>{userStatus}</p>
			</div>
		</Boundary>
	);
}

ChatTitle.propTypes = {
	myPeerID: PropTypes.string.isRequired,
};
