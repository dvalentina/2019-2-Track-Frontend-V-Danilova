import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/messageBlockStyles.module.css';
import emojiStyles from '../styles/emojiStyles.module.css';

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
		const regExp = /:.*?:/;
		if (!regExp.test(content)) {
			return(
				<div className={styles.textContent}>{content}</div>
			);
		}
		const message = [];
		let text = content;
		while (regExp.test(text)) {
			const emoji = text.match(regExp);
			const index = text.indexOf(emoji[0]);
			text = text.replace(regExp, ' ');
			const firstPart = text.slice(0, index);
			const secondPart = text.slice(index);
			const emojiName = emoji[0].slice(1, -1);
			message.push(
				<p>{firstPart}</p>
			);
			const className = `${emojiStyles.emojiImg} ${emojiStyles[emojiName]}`;
			message.push(
				<div className={className} />
			);
			text = secondPart;
		}
		message.push(
			<p>{text}</p>
		);
		return(
			<div className={styles.textContent}>{message}</div>
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

export { Content };
