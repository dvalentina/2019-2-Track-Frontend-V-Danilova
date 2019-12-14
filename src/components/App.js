import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Header.js';
import MessageForm from './MessageForm.js';
import ChatList from './ChatList.js';
import EditProfile from './EditProfile.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return(
			<HashRouter>
				<Route exact path='/'>
					<Header screen='chat list' />
					<MessengerScreen screen='chat list' />
				</Route>
				<Route path='/edit_profile'>
					<Header screen='edit profile' />
					<MessengerScreen screen='edit profile' />
				</Route>
				<Route path='/chat/:chatId'>
					<Header screen='chat' />
					<MessengerScreen screen='chat' />
				</Route>
			</HashRouter>
		);
	}
}

function MessengerScreen({ screen }) {
	if (screen === 'chat') {
		return (
			<MessageForm />
		);
	}
	if (screen === 'chat list') {
		return (
			<ChatList />
		);
	}
	if (screen === 'edit profile') {
		return (
			<EditProfile />
		);
	}
}
