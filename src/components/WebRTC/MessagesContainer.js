/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WebRTCMessageForm from './WebRTCMessageForm.js';

export default function MessagesContainer({
	myPeerConn,
	myPeerID,
	foreignPeerConn,
}) {
	const [messages, setMessages] = useState([]);
	
	return (
		<WebRTCMessageForm
			myPeerID={myPeerID}
			myPeerConn={myPeerConn}
			foreignPeerConn={foreignPeerConn}
			messages={messages}
			setMessages={setMessages}
		/>
	);
}

MessagesContainer.propTypes = {
	myPeerID: PropTypes.string.isRequired,
};
