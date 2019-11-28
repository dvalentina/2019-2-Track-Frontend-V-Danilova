import React from 'react';
import styles from '../styles/clatBlockStyles.module.css';
import chatAvatarSvg from '../assets/user.svg';
import deliveryIndicator from '../assets/tick.svg';

function ChatBlock(props) {
	return (
		<div className={styles.chatBlock}>
			<ChatAvatar />
			<ChatBlockCenter />
			<ChatBlockRight />
		</div>
	);
}

function ChatAvatar(props) {
	return (
		<div className={styles.chatAvatar}>
			<img src={chatAvatarSvg} className={styles.chatAvatarSvg} alt="" />
		</div>
	);
}

function ChatBlockCenter(props) {
	return (
		<div className={styles.chatBlockCenterColumn}>
			<ChatName />
			<ChatLastMessage />
		</div>
	);
}

function ChatBlockRight(props) {
	return (
		<div className={styles.chatBlockRightColumn}>
			<ChatTime />
			<ChatDeliveryIndicator />
		</div>
	);
}

function ChatName(props) {
	return (
		<div className={styles.chatName}>Name</div>
	);
}

function ChatLastMessage(props) {
	return (
		<div className={styles.chatLastMessage}>Last Message</div>
	);
}

function ChatTime(props) {
	return (
		<div className={styles.chatTime}>00:00</div>
	);
}

function ChatDeliveryIndicator(props) {
	return (
		<div className={styles.chatDeliveryIndicator}>
			<img src={deliveryIndicator} alt="" />
		</div>
	);
}
