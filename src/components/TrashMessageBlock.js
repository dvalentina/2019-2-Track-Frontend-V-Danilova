import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/twoMessageBlockStyles.module.css';

export default function TrashMessageBlock({ userID, authorName, content, time, type }) {
	if (userID === authorName) {
		return (
			<div className={styles.myMessageBlock}>
				<div className={styles.myResult}>
					<div className={styles.authorName}>User #{authorName}</div>
					<Content type={type} content={content} />
					<div className={styles.time}>{time.slice(11, 19)}</div>
				</div>
			</div>
		);
	}
	return (
		<div className={styles.otherMessageBlock}>
			<div className={styles.otherResult}>
				<div className={styles.authorName}>User #{authorName}</div>
				<Content type={type} content={content} />
				<div className={styles.time}>{time.slice(11, 19)}</div>
			</div>
		</div>
	);
}

TrashMessageBlock.propTypes = {
	userID: PropTypes.number.isRequired,
	authorName: PropTypes.number.isRequired,
	content: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

function Content({ type, content }) {
	if (type === 'text') {
		return <div className={styles.textContent}>{content}</div>;
	}
	if (type === 'image') {
		return (
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
		return (
			<audio
				controls
				src={content}
				className={styles.audioContent}
				onLoad={() => {
					window.URL.revokeObjectURL(content);
				}}
			>
				<track default kind="captions" srcLang="ru" src={content} />
			</audio>
		);
	}
	return null;
}

Content.propTypes = {
	type: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};
