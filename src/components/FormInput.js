import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/formInputStyles.module.css';
import { ReactComponent as AttachmentButtonSvg } from '../assets/icons/attachment.svg';
import { ReactComponent as GeoButtonSvg } from '../assets/icons/placeholder.svg';
import { ReactComponent as ImageButtonSvg } from '../assets/icons/picture.svg';
import { ReactComponent as StartRecordButtonSvg } from '../assets/icons/microphone.svg';
import { ReactComponent as StopRecordButtonSvg } from '../assets/icons/pause.svg';
import { ReactComponent as EmojiButtonSvg } from '../assets/icons/emoji.svg';
import EmojiKeyboard from './EmojiKeyboard.js';
import Boundary from './Boundary.js';

export default function FormInput({
	value,
	handleChange,
	handleSubmit,
	handleAttach,
	handleAttachImage,
	handleAttachAudio,
	handleAttachGeolocation,
	isAttachPressed,
	isRecording,
	isEmojiButtonPressed,
	handleEmojiButtonClicked,
	handleEmojiClicked,
}) {
	return (
		<Boundary>
			<form
				className={styles.formInput} 
				onSubmit={handleSubmit}
				id="send_message"
			>
				<input
					type="text"
					placeholder="Сообщение"
					value={value}
					onChange={handleChange}
					className={styles.inputMessage}
				/>
				<AttachmentButton
					isPressed={isAttachPressed}
					isRecording={isRecording}
					isEmojiButtonPressed={isEmojiButtonPressed}
					handleAttach={handleAttach}
					handleAttachImage={handleAttachImage}
					handleAttachAudio={handleAttachAudio}
					handleAttachGeolocation={handleAttachGeolocation}
					handleEmojiButtonClicked={handleEmojiButtonClicked}
					handleEmojiClicked={handleEmojiClicked}
				/>
			</form>
		</Boundary>
	);
}

FormInput.propTypes = {
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	handleAttach: PropTypes.func.isRequired,
	handleAttachImage: PropTypes.func.isRequired,
	handleAttachAudio: PropTypes.func.isRequired,
	handleAttachGeolocation: PropTypes.func.isRequired,
	isAttachPressed: PropTypes.bool.isRequired,
	isRecording: PropTypes.bool.isRequired,
	handleEmojiButtonClicked: PropTypes.func.isRequired,
	isEmojiButtonPressed: PropTypes.bool.isRequired,
	handleEmojiClicked: PropTypes.func.isRequired,
};

function AttachmentButton({
	isPressed,
	isRecording,
	isEmojiButtonPressed,
	handleAttach,
	handleAttachImage,
	handleAttachAudio,
	handleAttachGeolocation,
	handleEmojiButtonClicked,
	handleEmojiClicked,
}) {
	const imageInput = React.useRef(null);
	function handleImageInput() {
		if (imageInput.current) {
			imageInput.current.click();
		}
	}
	if (!isPressed) {
		return (
			<Boundary>
				<button
					onClick={handleAttach}
					type='button'
					className={styles.attachmentButton}
				>
					<AttachmentButtonSvg className={styles.attachmentButtonSvg} />
				</button>
			</Boundary>
		);
	}
	return (
		<Boundary>
			<div className={styles.attachmentButtonsWrap}>
				<EmojiKeyboard
					isPressed={isEmojiButtonPressed}
					handleEmojiClicked={handleEmojiClicked}
				/>
				<button
					onClick={handleEmojiButtonClicked}
					type='button'
					className={styles.attachmentButton}
				>
					<EmojiButtonSvg className={styles.attachmentButtonSvg} />
				</button>
				<button
					onClick={handleImageInput}
					type='button'
					className={styles.attachmentButton}
				>
					<ImageButtonSvg className={styles.attachmentButtonSvg} />
				</button>
				<input
					id='image'
					type='file'
					multiple
					accept='image/*'
					onChange={handleAttachImage}
					ref={imageInput}
					style={{ display: 'none' }}
				/>
				<button
					onClick={handleAttachAudio}
					type='button'
					className={styles.attachmentButton}
				>
					<AudioButtonSvg isRecording={isRecording} />
				</button>
				<button
					onClick={handleAttachGeolocation}
					type='button'
					className={styles.attachmentButton}
				>
					<GeoButtonSvg className={styles.attachmentButtonSvg} />
				</button>
			</div>
		</Boundary>
	);
}

AttachmentButton.propTypes = {
	handleAttach: PropTypes.func.isRequired,
	handleAttachImage: PropTypes.func.isRequired,
	handleAttachAudio: PropTypes.func.isRequired,
	handleAttachGeolocation: PropTypes.func.isRequired,
	isPressed: PropTypes.bool.isRequired,
	isRecording: PropTypes.bool.isRequired,
	handleEmojiButtonClicked: PropTypes.func.isRequired,
	isEmojiButtonPressed: PropTypes.bool.isRequired,
	handleEmojiClicked: PropTypes.func.isRequired,
};

function AudioButtonSvg({ isRecording }) {
	if (isRecording) {
		return (
			<Boundary>
				<StopRecordButtonSvg className={styles.attachmentButtonSvg} />
			</Boundary>
		);
	};
	return (
		<Boundary>
			<StartRecordButtonSvg className={styles.attachmentButtonSvg} />
		</Boundary>
	);
}

AudioButtonSvg.propTypes = {
	isRecording: PropTypes.bool.isRequired,
};

export { AudioButtonSvg };
