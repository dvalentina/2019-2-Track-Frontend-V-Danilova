import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/messageBlockStyles.module.css';

export default function MessageBlock(props) {
	return (
		<div className={styles.messageBlock}>
			<div className={styles.result}>
				<div className={styles.authorName}>{props.authorName}</div>
				<div className={styles.content}>{props.content}</div>
				<div className={styles.time}>{props.time}</div>
			</div>
		</div>
	);
}

MessageBlock.propTypes = {
	authorName: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
};
