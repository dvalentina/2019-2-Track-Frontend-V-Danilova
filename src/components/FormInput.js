import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/formInputStyles.module.css';
import { ReactComponent as AttachmentButtonSvg } from '../assets/attachment.svg';
import { ReactComponent as GeoButtonSvg } from '../assets/placeholder.svg';
import { ReactComponent as ImageButtonSvg } from '../assets/picture.svg';
import { ReactComponent as StartRecordButtonSvg } from '../assets/microphone.svg';
import { ReactComponent as StopRecordButtonSvg } from '../assets/pause.svg';

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
	handleStopRecordingClick,
}) {
	return (
		<form
			className={styles.formInput} 
			onSubmit={handleSubmit}
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
				handleAttach={handleAttach}
				handleAttachImage={handleAttachImage}
				handleAttachAudio={handleAttachAudio}
				handleAttachGeolocation={handleAttachGeolocation}
				handleStopRecordingClick={handleStopRecordingClick}
			/>
		</form>
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
	handleStopRecordingClick: PropTypes.func.isRequired,
};

function AttachmentButton({
	isPressed,
	isRecording,
	handleAttach,
	handleAttachImage,
	handleAttachAudio,
	handleAttachGeolocation,
	handleStopRecordingClick,
}) {
	const imageInput = React.useRef(null);
	function handleImageInput() {
		if (imageInput.current) {
			imageInput.current.click();
		}
	}
	if (!isPressed) {
		return (
			<button
				onClick={handleAttach}
				type='button'
				className={styles.attachmentButton}
			>
				<AttachmentButtonSvg className={styles.attachmentButtonSvg} />
			</button>
		);
	}
	return(
		<div className={styles.attachmentButtonsWrap}>
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
			<AudioButton
				handleStopRecordingClick={handleStopRecordingClick}
				handleAttachAudio={handleAttachAudio}
				isRecording={isRecording}
			/>
			<button
				onClick={handleAttachGeolocation}
				type='button'
				className={styles.attachmentButton}
			>
				<GeoButtonSvg className={styles.attachmentButtonSvg} />
			</button>
		</div>
	);
}

AttachmentButton.propTypes = {
	handleAttach: PropTypes.func.isRequired,
	handleAttachImage: PropTypes.func.isRequired,
	handleAttachAudio: PropTypes.func.isRequired,
	handleAttachGeolocation: PropTypes.func.isRequired,
	isPressed: PropTypes.bool.isRequired,
	isRecording: PropTypes.bool.isRequired,
	handleStopRecordingClick: PropTypes.func.isRequired,
};

function AudioButton({ isRecording, handleAttachAudio, handleStopRecordingClick }) {
	if (isRecording) {
		return(
			<button
				onClick={handleStopRecordingClick}
				type='button'
				className={styles.attachmentButton}
				id='stopRecording'
			>
				<StopRecordButtonSvg className={styles.attachmentButtonSvg} />
			</button>
		);
	};
	return(
		<button
			onClick={handleAttachAudio}
			type='button'
			className={styles.attachmentButton}
			id='startRecording'
		>
			<StartRecordButtonSvg className={styles.attachmentButtonSvg} />
		</button>
	);
}

AudioButton.propTypes = {
	isRecording: PropTypes.bool.isRequired,
	handleAttachAudio: PropTypes.func.isRequired,
	handleStopRecordingClick: PropTypes.func.isRequired,
};