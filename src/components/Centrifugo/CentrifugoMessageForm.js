import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/messageFormStyles.module.css';
import FormInput from '../FormInput.js';
import CentrifugoMessageBlock from './CentrifugoMessageBlock.js';
import {
	CENTRIFUGO_CHAT_ID,
	CENTRIFUGO_WEBSOCKET_URL,
	SEND_MESSAGE_URL,
	CENTRIFUGO_MESSAGES_URL,
} from '../../constants.js';

const Centrifuge = require('centrifuge');

let mediaRecorder = null;

export default function CentrifugoMessageForm({ userName, userID }) {
	const [messages, setMessages] = useState([]);
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
		postMessage(newMessage);
		setInputValue('');
		setIsEmojiButtonPressed(false);
		setIsPressed(false);
		setIsRecording(false);
	}

	function createMessage(content, type) {
		const submitTime = new Date().toTimeString().slice(0, 5);
		const { length } = messages;
		const message = {
			authorName: userName,
			content,
			time: submitTime,
			id: length,
			key: length,
			type,
		};
		return message;
	}

	function addMessage(newMessage) {
		setMessages(
			messages.concat(
				<CentrifugoMessageBlock
					userID={userID}
					authorName={newMessage.authorName}
					content={newMessage.content}
					time={newMessage.time}
					id={newMessage.id}
					key={newMessage.key}
					type={newMessage.type}
				/>,
			),
		);
	}

	function postMessage(newMessage) {
		const messageData = new FormData();
		messageData.append('user', Number(userID));
		messageData.append('chat', CENTRIFUGO_CHAT_ID);
		messageData.append('content', newMessage.content);
		fetch(SEND_MESSAGE_URL, {
			method: 'POST',
			body: messageData,
		})
			.then((resp) => resp.json())
			.then((data) => {
				// console.log(userID);
				// console.log(data);
			});
	}

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
				postMessage(newMessage);
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
		const centrifuge = new Centrifuge(CENTRIFUGO_WEBSOCKET_URL);
		centrifuge.subscribe('chats:centrifuge', (resp) => {
			if (resp.data.status === 'ok') {
				pollMessages();
			};
		});
		centrifuge.connect();
		const pollMessages = () => {
			fetch(`${CENTRIFUGO_MESSAGES_URL}`)
				.then(resp => resp.json())
				.then((data) => {
					const received = data.messages;
					received.reverse();
					const messagesArray = [];
					if (messages.length < received.length) {
						for (let i = messages.length; i < received.length; i += 1) {
							messagesArray.push(
								<CentrifugoMessageBlock
									userID={userID}
									authorName={received[i].user}
									content={received[i].content}
									time={received[i].added_at}
									id={i}
									key={i}
									type="text"
								/>
							);
						}
					}
					setMessages(messages.concat(messagesArray));
				});
		};
		pollMessages();
	}, [setMessages, messages, userID]);

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

CentrifugoMessageForm.propTypes = {
	userName: PropTypes.string.isRequired,
	userID: PropTypes.number.isRequired,
};
