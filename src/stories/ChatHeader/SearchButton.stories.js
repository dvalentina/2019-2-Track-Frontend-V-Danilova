import React from 'react';
import { action } from '@storybook/addon-actions';
import { SearchButton } from '../../components/ChatHeader.js';

export default {
	title: 'Chat header search button',
	component: SearchButton,
};

export const Simple = () => <SearchButton onClick={action('clicked')} />;
