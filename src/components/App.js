import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Header.js';
import TrashChatHeader from './TrashChatHeader.js';
import MessageForm from './MessageForm.js';
import TrashMessageForm from './TrashMessageForm.js';
import ChatList from './ChatList.js';
import EditProfile from './EditProfile.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		window.name = new Date().toTimeString().slice(0, 8);
		const nameUser = `User N${window.name.slice(0, 2)}${window.name.slice(3, 5)}${window.name.slice(6, 8)}`;
		let userID;
		const userData = new FormData();
		userData.append('username', nameUser);
		(async () => {
			await fetch('http://localhost:8000/users/create/', {
				method: 'POST',
				body: userData,
			})
				.then((resp) => resp.json())
				.then((data) => {
					console.log(data);
					this.setState({ userID: data.id });
				});
		})();
		this.state = {
			nameUser,
			userID,
		};
	}

	render() {
		const { nameUser, userID } = this.state;
		console.log(nameUser);
		console.log(userID);
		return (
			<HashRouter>
				<Route exact path="/">
					<Header screen="chat list" />
					<MessengerScreen screen="chat list" />
				</Route>
				<Route path="/edit_profile">
					<Header screen="edit profile" />
					<MessengerScreen screen="edit profile" />
				</Route>
				<Route path="/chat/:chatId">
					<Header screen="chat" />
					<MessengerScreen screen="chat" />
				</Route>
				<Route exact path="/trash_chat">
					<TrashChatHeader />
					<TrashMessageForm userName={nameUser} userID={userID} />
				</Route>
			</HashRouter>
		);
	}
}

function MessengerScreen({ screen }) {
	if (screen === 'chat') {
		return <MessageForm />;
	}
	if (screen === 'chat list') {
		return <ChatList />;
	}
	if (screen === 'edit profile') {
		return <EditProfile />;
	}
}
