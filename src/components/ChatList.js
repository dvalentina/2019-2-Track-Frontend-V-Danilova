import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/chatListStyles.module.css';
import { ReactComponent as CreateChatButtonSvg } from '../assets/pencil.svg';
import ChatBlock from './ChatBlock.js';

export default function ChatList({ handleOpenChat }) {
	const [chats, setChats] = useState(initChats());

	function initChats() {
		const chatHistory = JSON.parse(localStorage.getItem('chats')) || [];
		const initialChats = [];
		for (let i = 0; i < chatHistory.length; i += 1) {
			const newChat = chatHistory[i];

			newChat.name = chatHistory[i].name;
			const chatMessages = chatHistory[i].messages;
			const lastMessageNumber = chatMessages.length - 1;
			if (lastMessageNumber >= 0) {
				newChat.lastMessage = chatMessages[lastMessageNumber].content;
				newChat.time = chatMessages[lastMessageNumber].time;
			} else {
				newChat.lastMessage = 'No messages yet';
				newChat.time = '';
			}
			newChat.key = chatHistory[i].key;
			newChat.id = chatHistory[i].id;

			initialChats.push(
				<ChatBlock 
					name={newChat.name}
					lastMessage={newChat.lastMessage}
					time={newChat.time}
					id={newChat.id}
					key={newChat.key}
					handleOpenChat={handleOpenChat}
				/>
			);
		}
		return initialChats;
	}

	function handleCreateChatClick(event) {
		const newChat = {
			name: `User Name #${chats.length}`,
			lastMessage: 'No messages yet',
			time: '',
			key: chats.length,
			id: chats.length,
			messages: [],
		};
		setChats(
			chats.concat(
				<ChatBlock
					name={newChat.name}
					lastMessage={newChat.lastMessage}
					time={newChat.time}
					key={newChat.key}
					id={newChat.id}
					handleOpenChat={handleOpenChat}
				/>
			)
		);
		addChatToLocalStorage(newChat);
	}

	function addChatToLocalStorage(newChat) {
		let chatHistory = JSON.parse(localStorage.getItem('chats')) || [];
		if (chatHistory === '') {
			chatHistory = [];
		}
		chatHistory.push(newChat);  
		localStorage.setItem('chats', JSON.stringify(chatHistory));
	}

	function reverseArray(array) {
		const newArray = [];
		const length = array.length;
		for (let i = 0; i < length; i += 1) {
			newArray[i] = array[length - i - 1];
		}
		return newArray;
	}

	const reversedChats = reverseArray(chats);
	return (
		<div>
			<div className={styles.chatListSpace}>
				{reversedChats}
			</div>
			<button
				className={styles.createChatButton}
				onClick={handleCreateChatClick}
			>
				<CreateChatButtonSvg className={styles.createChatButtonSvg} />
			</button>
		</div>
	);
}

ChatList.propTypes = {
	handleOpenChat: PropTypes.func.isRequired,
};
