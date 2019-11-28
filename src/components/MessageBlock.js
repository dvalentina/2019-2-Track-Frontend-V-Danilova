import React from 'react';
import styles from '../styles/messageBlockStyles.module.css';

function MessageBlock(props) {
	return (
		<div className={styles.messageBlock}>
			<div className={styles.result}>
				<MessageAuthor />
				<MessageContent />
				<MessageTime />
			</div>
		</div>
	);
}

function MessageAuthor(props) {
	return (
		<div className={styles.authorName}>Name</div>
	);
}

function MessageTime(props) {
	return (
		<div className={styles.time}>00:00</div>
	);
}

function MessageContent(props) {
	return (
		<div className={styles.content}>SomeText</div>
	);
}
