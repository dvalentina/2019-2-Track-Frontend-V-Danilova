import React from 'react';
import Header from './Header.js';
import MessageForm from './MessageForm.js';
import ChatList from './ChatList.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			screen: 'chat list',
		};
	}

	render() {
		return(
			<div>
				<Header screen={this.state.screen} />
				<MessengerScreen screen={this.state.screen} />
			</div>
		);
	}
}

function MessengerScreen(props) {
	const screen = props.screen;
	if (screen === 'chat') {
		return (
			<MessageForm />
		);
	} else if (screen === 'chat list') {
		return (
			<ChatList />
		);
	}
}
