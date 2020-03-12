import React from 'react';
import { action } from '@storybook/addon-actions';
import { SaveButton } from '../../components/EditProfileHeader.js';

export default {
	title: 'Edit profile header save button',
	component: SaveButton,
};

export const Simple = () => <SaveButton onClick={action('clicked')} />;
