import React from 'react';
import renderer from 'react-test-renderer';

import { MenuButton, ChatListTitle, SearchButton } from '../ChatListHeader.js';

it('menu button renders correctly', () => {
	const menuButton = renderer
		.create(<MenuButton />)
		.toJSON();
	expect(menuButton).toMatchSnapshot();
});

it('title renders correctly', () => {
	const title = renderer
		.create(<ChatListTitle />)
		.toJSON();
	expect(title).toMatchSnapshot();
});

it('search button renders correctly', () => {
	const searchButton = renderer
		.create(<SearchButton />)
		.toJSON();
	expect(searchButton).toMatchSnapshot();
});
