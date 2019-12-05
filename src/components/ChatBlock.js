import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/chatBlockStyles.module.css';
import { ReactComponent as ChatAvatarSvg } from '../assets/user.svg';
import { ReactComponent as DeliveryIndicatorSvg } from '../assets/tick.svg';

export default function ChatBlock(props) {
	return (
		<div>
			<div
				data-id={props.id}
				tabIndex={props.id}
				role='button'
				onClick={props.handleOpenChat}
				className={styles.chatBlock}
			>
				<ChatAvatar />
				<ChatBlockCenter
					name={props.name}
					lastMessage={props.lastMessage}
				/>
				<ChatBlockRight time={props.time} />
			</div>
			<hr />
		</div>
	);
}

ChatBlock.propTypes = {
	name: PropTypes.string.isRequired,
	lastMessage: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	handleOpenChat: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired,
};

function ChatAvatar(props) {
	return (
		<div className={styles.chatAvatar}>
			<ChatAvatarSvg className={styles.chatAvatarSvg} />
		</div>
	);
}

function ChatBlockCenter(props) {
	return (
		<div className={styles.chatBlockCenterColumn}>
			<div className={styles.chatName}>
				{props.name}
			</div>
			<div className={styles.chatLastMessage}>
				{props.lastMessage}
			</div>
		</div>
	);
}

ChatBlockCenter.propTypes = {
	name: PropTypes.string.isRequired,
	lastMessage: PropTypes.string.isRequired,
};

function ChatBlockRight(props) {
	return (
		<div className={styles.chatBlockRightColumn}>
			<div className={styles.chatTime}>
				{props.time}
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
		<div className={styles.chatDeliveryIndicator}>
			<DeliveryIndicatorSvg className={styles.chatDeliveryIndicatorSvg} />
		</div>
	);
}
