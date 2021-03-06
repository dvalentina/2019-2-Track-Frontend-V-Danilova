import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Peer from 'peerjs';
import Header from './Header.js';
import TrashChatHeader from './TrashChatHeader.js';
import MessageForm from './MessageForm.js';
import TrashMessageForm from './TrashMessageForm.js';
import ChatList from './ChatList.js';
import EditProfile from './EditProfile.js';
import WebRTCChatHeader from './WebRTC/WebRTCChatHeader.js';
import MessagesContainer from './WebRTC/MessagesContainer.js';
import WebRTCInputID from './WebRTC/WebRTCInputID.js';
import CentrifugoChatHeader from './Centrifugo/CentrifugoChatHeader.js';
import CentrifugoMessageForm from './Centrifugo/CentrifugoMessageForm.js';
import Boundary from './Boundary.js';
import { CREATE_USER_URL } from '../constants.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		// создание уникального идентификатра для вкладки и создание пользователя
		window.name = new Date().toTimeString().slice(0, 8);
		const nameUser = `User N${window.name.slice(0, 2)}${window.name.slice(3, 5)}${window.name.slice(6, 8)}`;
		let userID;
		const userData = new FormData();
		userData.append('username', nameUser);
		(async () => {
			await fetch(CREATE_USER_URL, {
				method: 'POST',
				body: userData,
			})
				.then((resp) => resp.json())
				.then((data) => {
					// console.log(data);
					this.setState({ userID: data.id });
				});
		})();

		// для работы peer webrtc
		const peer = new Peer();
		peer.on('open', (id) => {
			this.setState(() => ({ myPeerID: id }));
		});
		peer.on('connection', (conn) => {
			this.setState(() => ({foreignPeerConn: conn}));
		});

		this.state = {
			nameUser,
			userID,
			peer,
			foreignInputValue: '',
			webRTCMessages: [],
		};

		this.handleForeignIDSubmit = this.handleForeignIDSubmit.bind(this);
		this.handleForeignIDInputChange = this.handleForeignIDInputChange.bind(this);
		this.handleWebRTCMessagesChange = this.handleWebRTCMessagesChange.bind(this);
	}

	// handleForeignIDInputChange, handleForeignIDSubmit, handleWebRTCMessagesChange для работы webrtc чата

	handleForeignIDInputChange(event) {
		this.setState({ foreignInputValue: event.target.value });
	}

	handleForeignIDSubmit(event) {
		const {
			peer,
			foreignInputValue,
		} = this.state;
		event.preventDefault();
		this.setState(() => ({ foreignPeerID: foreignInputValue }));
		this.setState(() => ({ myPeerConn: peer.connect(foreignInputValue) }));
		this.setState(() => ({ foreignInputValue: '' }));
	}

	handleWebRTCMessagesChange(newMessage) {
		const { webRTCMessages } = this.state;
		this.setState({ webRTCMessages: webRTCMessages.concat(newMessage)});
	}

	render() {
		const {
			nameUser,
			userID,
			myPeerID,
			foreignPeerConn,
			foreignPeerID,
			myPeerConn,
			foreignInputValue,
		} = this.state;

		return (
			<Boundary>
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
					<Route exact path="/webrtc">
						<WebRTCChatHeader myPeerID={myPeerID} />
						<WebRTCInputID
							handleForeignIDSubmit={this.handleForeignIDSubmit}
							foreignPeerID={foreignPeerID}
							foreignInputValue={foreignInputValue}
							handleForeignIDInputChange={this.handleForeignIDInputChange}
						/>
						<MessagesContainer
							myPeerID={myPeerID}
							myPeerConn={myPeerConn}
							foreignPeerConn={foreignPeerConn}
						/>
					</Route>
					<Route exact path="/centrifugo">
						<CentrifugoChatHeader userID={userID} />
						<CentrifugoMessageForm userName={nameUser} userID={userID} />
					</Route>
				</HashRouter>
			</Boundary>
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
	return null;
}

MessengerScreen.propTypes = {
	screen: PropTypes.string.isRequired,
};
