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
		return(
			<div>
				<Header
					screen={this.state.screen}
					openedChatId={this.state.openedChatId}
					handleReturn={this.handleReturn} 
				/>
				<MessengerScreen
					screen={this.state.screen}
					openedChatId={this.state.openedChatId}
					handleOpenChat={this.handleOpenChat}
				/>
			</div>
		);
	}
}

function MessengerScreen(props) {
	const screen = props.screen;
	if (screen === 'chat') {
		return (
			<MessageForm id={props.openedChatId} />
		);
	} else if (screen === 'chat list') {
		return (
			<ChatList handleOpenChat={props.handleOpenChat} />
		);
	}
}
