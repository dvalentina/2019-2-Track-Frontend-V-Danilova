import React from 'react';
import PropTypes from 'prop-types';
import ChatListHeader from './ChatListHeader.js';
import ChatHeader from './ChatHeader.js';
import EditProfileHeader from './EditProfileHeader.js';
import Boundary from './Boundary.js';

export default function Header({ screen }) {
	if (screen === 'chat') {
		return(
			<Boundary>
				<ChatHeader />
			</Boundary>
		);
	}
	if (screen === 'chat list') {
		return(
			<Boundary>
				<ChatListHeader />
			</Boundary>
		);
	}
	if (screen === 'edit profile') {
		return(
			<Boundary>
				<EditProfileHeader />
			</Boundary>
		);
	}
	return null;
}

Header.propTypes = {
	screen: PropTypes.string.isRequired,
};
