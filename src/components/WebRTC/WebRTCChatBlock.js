import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../../styles/chatBlockStyles.module.css';
import {
	ChatAvatar,
	ChatBlockRight,
	ChatBlockCenter,
} from '../ChatBlock.js';

export default function WebRTCChatBlock({ 
	lastMessage, name, time 
}) {
	return (
		<div>
			<Link to="/webrtc" className={styles.link}>
				<div className={styles.chatBlock}>
					<ChatAvatar />
					<ChatBlockCenter name={name} lastMessage={lastMessage} />
					<ChatBlockRight time={time} />
				</div>
			</Link>
			<hr />
		</div>
	);
}

WebRTCChatBlock.propTypes = {
	name: PropTypes.string.isRequired,
	lastMessage: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
};
