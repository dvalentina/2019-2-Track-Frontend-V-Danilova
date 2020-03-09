import React from 'react';
import renderer from 'react-test-renderer';

import { AudioButtonSvg } from '../FormInput.js';

it('audio button svg with prop isRecording=true renders correctly', () => {
	const audioIsRecording = renderer
		.create(<AudioButtonSvg isRecording />)
		.toJSON();
	expect(audioIsRecording).toMatchSnapshot();
});

it('audio button svg with prop isRecording=false renders correctly', () => {
	const audioIsNotRecording = renderer
		.create(<AudioButtonSvg isRecording={false} />)
		.toJSON();
	expect(audioIsNotRecording).toMatchSnapshot();
});
