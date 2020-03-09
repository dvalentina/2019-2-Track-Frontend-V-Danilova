import React from 'react';
import renderer from 'react-test-renderer';

import { ChatDeliveryIndicator, ChatAvatar } from '../ChatBlock.js';

it('chat delivery indicator renders correctly', () => {
	const indicator = renderer
		.create(<ChatDeliveryIndicator />)
		.toJSON();
	expect(indicator).toMatchSnapshot();
});

it('chat avatar renders correctly', () => {
	const avatar = renderer
		.create(<ChatAvatar />)
		.toJSON();
	expect(avatar).toMatchSnapshot();
});
