import React from 'react';
import renderer from 'react-test-renderer';

import { EditProfileTitle, SaveButton } from '../EditProfileHeader.js';

it('edit profile title renders correctly', () => {
	const editProfileTitle = renderer
		.create(<EditProfileTitle />)
		.toJSON();
	expect(editProfileTitle).toMatchSnapshot();
});

it('save button renders correctly', () => {
	const saveButton = renderer
		.create(<SaveButton />)
		.toJSON();
	expect(saveButton).toMatchSnapshot();
});
