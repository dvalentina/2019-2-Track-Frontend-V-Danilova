import React from 'react';
import { action } from '@storybook/addon-actions';
import { OptionsButton } from '../../components/ChatHeader.js';

export default {
	title: 'Chat header options button',
	component: OptionsButton,
};

export const Simple = () => <OptionsButton onClick={action('clicked')} />;
