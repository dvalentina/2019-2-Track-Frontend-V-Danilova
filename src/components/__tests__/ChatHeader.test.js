import React from 'react';
import renderer from 'react-test-renderer';

import { OptionsButton, SearchButton, UserAvatar } from '../ChatHeader.js';

it('options button renders correctly', () => {
	const optionsButton = renderer
		.create(<OptionsButton />)
		.toJSON();
	expect(optionsButton).toMatchSnapshot();
});

it('search button renders correctly', () => {
	const searchButton = renderer
		.create(<SearchButton />)
		.toJSON();
	expect(searchButton).toMatchSnapshot();
});

it('menu button renders correctly', () => {
	const avatar = renderer
		.create(<UserAvatar />)
		.toJSON();
	expect(avatar).toMatchSnapshot();
});
