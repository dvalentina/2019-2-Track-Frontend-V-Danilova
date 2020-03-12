import React from 'react';
import { action } from '@storybook/addon-actions';
import { SearchButton } from '../../components/ChatListHeader.js';

export default {
	title: 'Chat list header search button',
	component: SearchButton,
};

export const Simple = () => <SearchButton onClick={action('clicked')} />;
