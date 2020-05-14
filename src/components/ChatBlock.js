import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles/chatBlockStyles.module.css';
import Boundary from './Boundary.js';
import { ReactComponent as ChatAvatarSvg } from '../assets/icons/user.svg';
import { ReactComponent as DeliveryIndicatorSvg } from '../assets/icons/tick.svg';

export default function ChatBlock({ 
	id, lastMessage, name, time 
}) {
	return (
		<div>
			<Link to={`/chat/${id}`} className={styles.link}>
				<div
					data-id={id}
					tabIndex={id}
					role='button'
					className={styles.chatBlock}
				>
					<ChatAvatar />
					<ChatBlockCenter
						name={name}
						lastMessage={lastMessage}
					/>
					<ChatBlockRight time={time} />
				</div>
			</Link>
			<hr />
		</div>
	);
}

ChatBlock.propTypes = {
	name: PropTypes.string.isRequired,
	lastMessage: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};

function ChatAvatar(props) {
	return (
		<div className={styles.chatAvatar}>
			<ChatAvatarSvg className={styles.chatAvatarSvg} />
		</div>
	);
}

function ChatBlockCenter({ name, lastMessage }) {
	return (
		<div className={styles.chatBlockCenterColumn}>
			<div className={styles.chatName}>
				{name}
			</div>
			<div className={styles.chatLastMessage}>
				{lastMessage}
			</div>
		</div>
	);
}

ChatBlockCenter.propTypes = {
	name: PropTypes.string.isRequired,
	lastMessage: PropTypes.string.isRequired,
};

function ChatBlockRight({ time }) {
	return (
		<div className={styles.chatBlockRightColumn}>
			<div className={styles.chatTime}>
				{time}
			</div>
			<ChatDeliveryIndicator />
		</div>
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

export {
	ChatDeliveryIndicator,
	ChatAvatar,
	ChatBlockRight,
	ChatBlockCenter,
};
