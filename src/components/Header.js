import React from 'react';
import PropTypes from 'prop-types';
import ChatListHeader from './ChatListHeader.js';
import ChatHeader from './ChatHeader.js';
import EditProfileHeader from './EditProfileHeader.js';

export default function Header({ screen }) {
	if (screen === 'chat') {
		return (
			<ChatHeader />
		);
	}
	if (screen === 'chat list') {
		return (
			<ChatListHeader />
		);
	}
	if (screen === 'edit profile') {
		return(
			<EditProfileHeader />
		);
	}
}

Header.propTypes = {
	screen: PropTypes.string.isRequired,
};
