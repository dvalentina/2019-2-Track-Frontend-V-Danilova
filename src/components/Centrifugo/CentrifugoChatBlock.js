import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../../styles/chatBlockStyles.module.css';
import {
	ChatAvatar,
	ChatBlockRight,
	ChatBlockCenter,
} from '../ChatBlock.js';

export default function CentrifugoChatBlock({ 
	lastMessage, name, time 
}) {
	return (
		<div>
			<Link to="/centrifugo" className={styles.link}>
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

CentrifugoChatBlock.propTypes = {
	name: PropTypes.string.isRequired,
	lastMessage: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
};
