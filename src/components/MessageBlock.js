import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/messageBlockStyles.module.css';

export default function MessageBlock({ authorName, content, time, type }) {
	return (
		<div className={styles.messageBlock}>
			<div className={styles.result}>
				<div className={styles.authorName}>{authorName}</div>
				<Content
					type={type}
					content={content}
				/>
				<div className={styles.time}>{time}</div>
			</div>
		</div>
	);
}

MessageBlock.propTypes = {
	authorName: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

function Content({ type, content }) {
	if (type === 'text') {
		return(
			<div className={styles.textContent}>{content}</div>
		);
	}
	if (type === 'image') {
		return(
			<img
				className={styles.imageContent}
				src={content}
				alt={content}
				onLoad={() => {
					window.URL.revokeObjectURL(content);
				}}
			/>
		);
	}
	if (type === 'audio') {
		return(
			<audio
				controls
				src={content}
				className={styles.audioContent}
				onLoad={() => {
					window.URL.revokeObjectURL(content);
				}}
			>
				<track default kind='captions'
					srcLang='ru'
					src={content}
				/>
			</audio>
		);
	}
}
