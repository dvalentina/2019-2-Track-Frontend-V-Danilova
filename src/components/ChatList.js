import React, { useState } from 'react';
import styles from '../styles/chatListStyles.module.css';
import { ReactComponent as CreateChatButtonSvg } from '../assets/icons/pencil.svg';
import ChatBlock from './ChatBlock.js';
import TrashChatBlock from './TrashChatBlock.js';
import WebRTCChatBlock from './WebRTC/WebRTCChatBlock.js';
import CentrifugoChatBlock from './Centrifugo/CentrifugoChatBlock.js';

export default function ChatList(props) {
	const [chats, setChats] = useState(initChats());

	const trashChatBlock = <TrashChatBlock
		name='Trash Chat'
		lastMessage='last message'
		time='00:00'
	/>;
	const webRTCChatBlock = <WebRTCChatBlock
		name='WebRTC Chat'
		lastMessage='last message'
		time='00:00'
	/>;
	const centrifugoChatBlock = <CentrifugoChatBlock 
		name='Centrifugo Chat'
		lastMessage='last message'
		time='00:00'
	/>;

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
				/>,
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
				/>,
			),
		);
		addChatToLocalStorage(newChat);
	};

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
		const { length } = array;
		for (let i = 0; i < length; i += 1) {
			newArray[i] = array[length - i - 1];
		}
		return newArray;
	}

	const reversedChats = reverseArray(chats);
	return (
		<div>
			<div className={styles.chatListSpace}>
				{trashChatBlock}
				{webRTCChatBlock}
				{centrifugoChatBlock}
				{reversedChats}
			</div>
			<button type="button" id="create_chat" className={styles.createChatButton} onClick={handleCreateChatClick}>
				<CreateChatButtonSvg className={styles.createChatButtonSvg} />
			</button>
		</div>
	);
}
