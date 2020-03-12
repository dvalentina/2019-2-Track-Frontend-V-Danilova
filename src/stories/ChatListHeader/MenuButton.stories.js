import React from 'react';
import { action } from '@storybook/addon-actions';
import { MenuButton } from '../../components/ChatListHeader.js';

export default {
	title: 'Chat list header menu button',
	component: MenuButton,
};

export const Simple = () => <MenuButton onClick={action('clicked')} />;
