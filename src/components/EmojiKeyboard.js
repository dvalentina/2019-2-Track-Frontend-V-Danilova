import React from 'react';
import PropTypes from 'prop-types';
import Boundary from './Boundary.js';
import styles from '../styles/emojiStyles.module.css';

export default function EmojiKeyboard({
	isPressed,
	handleEmojiClicked,
}) {
	if (!isPressed) {
		return null;
	};
	const emojiNamesArray = [
		'angry',
		'anguished',
		'eyebrow',
		'hand',
		'ok',
		'pensive',
		'rolling',
		'sadrelieved',
		'savoring',
		'smiling',
		'smilingeyes',
		'thinking',
		'thumbsup',
		'upsidedown',
		'worried',
	];
	const emojiComponentsArray = [];
	for (let i = 0; i < emojiNamesArray.length; i += 1) {
		emojiComponentsArray.push(
			<Emoji
				name={emojiNamesArray[i]}
				handleEmojiClicked={handleEmojiClicked}
			/>
		);
	};
	return (
		<Boundary>
			<div>
				<div className={styles.emojis}>
					{emojiComponentsArray}
				</div>
			</div>
		</Boundary>
	);
}

EmojiKeyboard.propTypes = {
	isPressed: PropTypes.bool.isRequired,
	handleEmojiClicked: PropTypes.func.isRequired,
};

function Emoji({
	name,
	handleEmojiClicked,
}) {
	const className = `${styles.emoji} ${styles[name]}`;
	return (
		<Boundary>
			<div
				className={className}
				onClick={() => handleEmojiClicked(name)}
				onKeyDown={() => handleEmojiClicked(name)}
				role='button'
				tabIndex={name}
				aria-label={name}
			/>
		</Boundary>
	);
}

Emoji.propTypes = {
	name: PropTypes.string.isRequired,
	handleEmojiClicked: PropTypes.func.isRequired,
};
