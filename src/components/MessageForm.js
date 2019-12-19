import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/messageFormStyles.module.css';
import FormInput from './FormInput.js';
import MessageBlock from './MessageBlock.js';

let mediaRecorder = null;

export default function MessageForm(props) {
	const { chatId } = useParams();
	const [messages, setMessages] = useState(initMessages());
	const [inputValue, setInputValue] = useState('');
	const [isAttachPressed, setIsPressed] = useState(false);
	const [isRecording, setIsRecording] = useState(false);

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
		addMessageToLocalStorage(newMessage);
		setInputValue('');
	}

	function createMessage(content, type) {
		const submitTime = new Date().toTimeString().slice(0, 5);
		const { length } = messages;
		const message = {
			authorName: 'Me',
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
				<MessageBlock 
					authorName={newMessage.authorName}
					content={newMessage.content}
					time={newMessage.time}
					id={newMessage.id}
					key={newMessage.key}
					type={newMessage.type}
				/>
			)
		);
	}

	function initMessages() {
		const chatHistory = JSON.parse(localStorage.getItem('chats')) || [];
		const currentChat = chatHistory[chatId];
		const messagesFromStorage = currentChat.messages;
		const initialMessages = [];
		for (let i = 0; i < messagesFromStorage.length; i += 1) {
			const newMessage = messagesFromStorage[i];
			initialMessages.push(
				<MessageBlock 
					authorName={newMessage.authorName}
					content={newMessage.content}
					time={newMessage.time}
					id={newMessage.id}
					key={newMessage.key}
					type={newMessage.type}
				/>
			);
		}
		return initialMessages;
	}

	function addMessageToLocalStorage(newMessage) {
		const chatHistory = JSON.parse(localStorage.getItem('chats')) || [];
		const currentChat = chatHistory[chatId];
		if (currentChat.messages === '') {
			currentChat.messages = [];
		}
		currentChat.messages.push(newMessage);
		localStorage.setItem('chats', JSON.stringify(chatHistory));
	}

	function handleAttach() {
		setIsPressed(true);
	}

	function handleAttachGeolocation() {
		if ('geolocation' in navigator) {
			const geoSuccess = (position) => {
				const { latitude, longitude } = position.coords;
				const geoURL = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
				const newMessage = createMessage(geoURL, 'text');
				addMessage(newMessage);
				addMessageToLocalStorage(newMessage);
			};
			const geoError = (error) => {
				console.log(error.message);
			};
			const geoOptions = {
				enableHighAccuracy: true,
				maximumAge: 30000,
				timeout: 27000,
			};
			navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
			setIsPressed(false);
		} else {
			alert('Geolocation is not available');
		}
	}

	function handleAttachImage(event, files = event.target.files) {
		if (files.length) {
			const newMessage = createMessage(window.URL.createObjectURL(files[0]), 'image');
			addMessage(newMessage);
			const data = new FormData();
			data.append('image', files[0]);
			fetch(
				'https://tt-front.now.sh/upload',
				{
					method: 'POST',
					body: data,
				},
			);
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
					fetch(
						'https://tt-front.now.sh/upload',
						{
							method: 'POST',
							body: data,
						},
					);
				});
			};
		}

		async function getMedia() {
			let stream = null;
			try {
				const constraints = { audio: true };
				stream = await navigator.mediaDevices.getUserMedia(constraints);
				recordAudio(stream);
			} catch (error) {
				console.log(error.message);
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

	const reversedMessages = reverseArray(messages);

	return (
		<div>
			<div
				className={styles.chatBox}
				onDragEnter={stopDrop}
				onDragOver={stopDrop}
				onDrop={drop}
			>
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
			/>
		</div>
	);
}
