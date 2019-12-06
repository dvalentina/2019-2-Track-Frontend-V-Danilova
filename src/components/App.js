import React from 'react';
import Header from './Header.js';
import MessageForm from './MessageForm.js';
import ChatList from './ChatList.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			screen: 'chat list',
			openedChatId: 0,
		};
		this.handleOpenChat = this.handleOpenChat.bind(this);
		this.handleReturn = this.handleReturn.bind(this);
	}

	handleOpenChat(event) {
		this.setState({
			screen: 'chat',
			openedChatId: Number(event.currentTarget.dataset.id),
		});
	}

	handleReturn(event) {
		this.setState({
			screen: 'chat list',
		});
	}

	render() {
		const { screen, openedChatId } = this.state;
		
		return(
			<div>
				<Header
					screen={screen}
					openedChatId={openedChatId}
					handleReturn={this.handleReturn} 
				/>
				<MessengerScreen
					screen={screen}
					openedChatId={openedChatId}
					handleOpenChat={this.handleOpenChat}
				/>
			</div>
		);
	}
}

function MessengerScreen({ screen, openedChatId, handleOpenChat }) {
	if (screen === 'chat') {
		return (
			<MessageForm id={openedChatId} />
		);
	}
	if (screen === 'chat list') {
		return (
			<ChatList handleOpenChat={handleOpenChat} />
		);
	}
}
