import React from 'react';
import PropTypes from 'prop-types';
import ChatListHeader from './ChatListHeader.js';
import ChatHeader from './ChatHeader.js';

export default function Header({ screen, openedChatId, handleReturn }) {
	if (screen === 'chat') {
		return (
			<ChatHeader
				openedChatId={openedChatId}
				handleReturn={handleReturn}
			/>
		);
	} else if (screen === 'chat list') {
		return (
			<ChatListHeader />
		);
	}
}

Header.propTypes = {
	screen: PropTypes.string.isRequired,
	openedChatId: PropTypes.number.isRequired,
	handleReturn: PropTypes.func.isRequired,
};
