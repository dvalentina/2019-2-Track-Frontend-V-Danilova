import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Boundary from './Boundary.js';
import styles from '../styles/chatBlockStyles.module.css';
import { ReactComponent as ChatAvatarSvg } from '../assets/icons/user.svg';
import { ReactComponent as DeliveryIndicatorSvg } from '../assets/icons/tick.svg';

export default function TrashChatBlock({ lastMessage, name, time }) {
	return (
		<Boundary>
			<div>
				<Link to="/trash_chat" className={styles.link}>
					<div className={styles.chatBlock}>
						<ChatAvatar />
						<ChatBlockCenter name={name} lastMessage={lastMessage} />
						<ChatBlockRight time={time} />
					</div>
				</Link>
				<hr />
			</div>
		</Boundary>
	);
}

TrashChatBlock.propTypes = {
	name: PropTypes.string.isRequired,
	lastMessage: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
};

function ChatAvatar(props) {
	return (
		<Boundary>
			<div className={styles.chatAvatar}>
				<ChatAvatarSvg className={styles.chatAvatarSvg} />
			</div>
		</Boundary>
	);
}

function ChatBlockCenter({ name, lastMessage }) {
	return (
		<Boundary>
			<div className={styles.chatBlockCenterColumn}>
				<div className={styles.chatName}>{name}</div>
				<div className={styles.chatLastMessage}>{lastMessage}</div>
			</div>
		</Boundary>
	);
}

ChatBlockCenter.propTypes = {
	name: PropTypes.string.isRequired,
	lastMessage: PropTypes.string.isRequired,
};

function ChatBlockRight({ time }) {
	return (
		<Boundary>
			<div className={styles.chatBlockRightColumn}>
				<div className={styles.chatTime}>{time}</div>
				<ChatDeliveryIndicator />
			</div>
		</Boundary>
	);
}

ChatBlockRight.propTypes = {
	time: PropTypes.string.isRequired,
};

function ChatDeliveryIndicator(props) {
	return (
		<Boundary>
			<div className={styles.chatDeliveryIndicator}>
				<DeliveryIndicatorSvg className={styles.chatDeliveryIndicatorSvg} />
			</div>
		</Boundary>
	);
}

export { ChatDeliveryIndicator, ChatAvatar };
