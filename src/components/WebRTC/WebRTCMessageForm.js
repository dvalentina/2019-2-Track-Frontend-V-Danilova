/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */

import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/webRTCMessageFormStyles.module.css';
import FormInput from '../FormInput.js';
import WebRTCMessageBlock from './WebRTCMessageBlock.js';

let mediaRecorder = null;

export default function WebRTCMessageForm({
	myPeerConn,
	myPeerID,
	foreignPeerConn,
	messages,
	setMessages,
}) {
	const [inputValue, setInputValue] = useState('');
	const [isAttachPressed, setIsPressed] = useState(false);
	const [isRecording, setIsRecording] = useState(false);
	const [isEmojiButtonPressed, setIsEmojiButtonPressed] = useState(false);


	function handleChange(event) {
		setInputValue(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (inputValue === '') {
			return;
		}
		const newMessage = createMessage(inputValue, 'text');
		addMessage(newMessage);
		myPeerConn.send(newMessage);
		setInputValue('');
		setIsEmojiButtonPressed(false);
		setIsPressed(false);
		setIsRecording(false);
	}

	function createMessage(content, type) {
		const submitTime = new Date().toTimeString().slice(0, 5);
		const message = {
			authorName: myPeerID,
			content,
			time: submitTime,
			type,
		};
		return message;
	}

	const addMessage = useCallback((newMessage) => {
		const messagesSave = messages;
		const { length } = messagesSave.length;
		const messageBlock = <WebRTCMessageBlock
			myPeerID={myPeerID}
			authorName={newMessage.authorName}
			content={newMessage.content}
			time={newMessage.time}
			id={length}
			key={length}
			type={newMessage.type}
		/>;
		messagesSave.push(messageBlock);
		setMessages(messagesSave);
	}, [myPeerID, setMessages, messages]);

	function handleAttach() {
		setIsPressed(true);
	}

	function handleEmojiButtonClicked() {
		if (!isEmojiButtonPressed) {
			setIsEmojiButtonPressed(true);
		} else {
			setIsEmojiButtonPressed(false);
		}
	}

	function handleEmojiClicked(name) {
		let input = inputValue;
		input += `:${name}:`;
		setInputValue(input);
	}

	function handleAttachGeolocation() {
		if ('geolocation' in navigator) {
			const geoSuccess = (position) => {
				const { latitude, longitude } = position.coords;
				const geoURL = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
				const newMessage = createMessage(geoURL, 'text');
				addMessage(newMessage);
			};
			const geoError = (error) => {
				// console.log(error.message);
			};
			const geoOptions = {
				enableHighAccuracy: true,
				maximumAge: 30000,
				timeout: 27000,
			};
			navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
			setIsPressed(false);
		} else {
			// alert('Geolocation is not available');
		}
	}

	function handleAttachImage(event, files = event.target.files) {
		if (files.length) {
			const newMessage = createMessage(window.URL.createObjectURL(files[0]), 'image');
			addMessage(newMessage);
			const data = new FormData();
			data.append('image', files[0]);
			fetch('https://tt-front.now.sh/upload', {
				method: 'POST',
				body: data,
			});
			setIsPressed(false);
		}
	}

	function stopDrop(event) {
		event.stopPropagation();
		event.preventDefault();
		const ev = event.dataTransfer;
		ev.dropEffect = 'copy';
	}

	function drop(event) {
		stopDrop(event);
		const { files } = event.dataTransfer;
		handleAttachImage(event, files);
	}

	function handleAttachAudio() {
		function recordAudio(stream) {
			if (isRecording) {
				mediaRecorder.stop();
				setIsRecording(false);
			} else {
				mediaRecorder = new MediaRecorder(stream);
				mediaRecorder.start();
				setIsRecording(true);

				let chunks = [];
				mediaRecorder.addEventListener('dataavailable', (event) => {
					chunks.push(event.data);
				});
				mediaRecorder.addEventListener('stop', () => {
					const blob = new Blob(chunks, { type: mediaRecorder.mimeType });
					chunks = [];
					const audioURL = URL.createObjectURL(blob);
					const newMessage = createMessage(audioURL, 'audio');
					addMessage(newMessage);

					const data = new FormData();
					data.append('audio', blob);
					fetch('https://tt-front.now.sh/upload', {
						method: 'POST',
						body: data,
					});
				});
			}
		}

		async function getMedia() {
			let stream = null;
			try {
				const constraints = { audio: true };
				stream = await navigator.mediaDevices.getUserMedia(constraints);
				recordAudio(stream);
			} catch (error) {
				// console.log(error.message);
			}
		}
		getMedia();
	}

	function reverseArray(array) {
		const newArray = [];
		const { length } = array;
		for (let i = 0; i < length; i += 1) {
			newArray[i] = array[length - i - 1];
		}
		return newArray;
	}

	useEffect(() => {
		if (foreignPeerConn) {
			foreignPeerConn.on('open', () => {
				foreignPeerConn.on('data', (message) => {
					addMessage(message);
				});
			});
		}
	}, [foreignPeerConn, addMessage, messages]);

	const reversedMessages = reverseArray(messages);

	return (
		<div>
			<div className={styles.chatBox} onDragEnter={stopDrop} onDragOver={stopDrop} onDrop={drop}>
				{reversedMessages}
			</div>
			<FormInput
				value={inputValue}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				handleAttachGeolocation={handleAttachGeolocation}
				handleAttachAudio={handleAttachAudio}
				handleAttachImage={handleAttachImage}
				isAttachPressed={isAttachPressed}
				handleAttach={handleAttach}
				isRecording={isRecording}
				isEmojiButtonPressed={isEmojiButtonPressed}
				handleEmojiButtonClicked={handleEmojiButtonClicked}
				handleEmojiClicked={handleEmojiClicked}
			/>
		</div>
	);
}

WebRTCMessageForm.propTypes = {
	myPeerID: PropTypes.string.isRequired,
	messages: PropTypes.array.isRequired,
	setMessages: PropTypes.func.isRequired,
};
