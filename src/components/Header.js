import React from 'react';
import PropTypes from 'prop-types';
import ChatListHeader from './ChatListHeader.js';
import ChatHeader from './ChatHeader.js';

export default function Header(props) {
	const screen = props.screen;
	if (screen === 'chat') {
		return (
			<ChatHeader
				openedChatId={props.openedChatId}
				handleReturn={props.handleReturn}
			/>
		);
	} else if (screen === 'chat list') {
		return (
			<ChatListHeader />
		);
	}
}

Header.propTypes = {
	openedChatId: PropTypes.number.isRequired,
	handleReturn: PropTypes.func.isRequired,
};
