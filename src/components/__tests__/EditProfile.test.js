import React from 'react';
import renderer from 'react-test-renderer';

import { ChangeAvatar } from '../EditProfile.js';

it('change avatar button renders correctly', () => {
	const changeAvatarButton = renderer
		.create(<ChangeAvatar />)
		.toJSON();
	expect(changeAvatarButton).toMatchSnapshot();
});
