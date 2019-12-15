import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/messageFormStyles.module.css';
import FormInput from './FormInput.js';
import MessageBlock from './MessageBlock.js';

export default function MessageForm(props) {
	const { chatId } = useParams();
	const [messages, setMessages] = useState(initMessages());
	const [inputValue, setInputValue] = useState('');

	function handleChange(event) {
		setInputValue(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (inputValue === '') {
			return;
		}
		const submitTime = new Date().toTimeString().slice(0, 5);
		const { length } = messages;
		const newMessage = {
			authorName: 'Me',
			content: inputValue,
			time: submitTime,
			id: length,
			key: length,
		};
		setMessages(
			messages.concat(
				<MessageBlock 
					authorName={newMessage.authorName}
					content={newMessage.content}
					time={newMessage.time}
					id={newMessage.id}
					key={newMessage.key}
				/>
			)
		);
		addMessageToLocalStorage(newMessage);
		setInputValue('');
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
			<div className={styles.chatBox}>
				{reversedMessages}
			</div>
			<FormInput 
				value={inputValue}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
}
