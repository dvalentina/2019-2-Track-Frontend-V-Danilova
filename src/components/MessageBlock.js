import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/messageBlockStyles.module.css';

export default function MessageBlock({ authorName, content, time }) {
	return (
		<div className={styles.messageBlock}>
			<div className={styles.result}>
				<div className={styles.authorName}>{authorName}</div>
				<div className={styles.content}>{content}</div>
				<div className={styles.time}>{time}</div>
			</div>
		</div>
	);
}

MessageBlock.propTypes = {
	authorName: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
};
