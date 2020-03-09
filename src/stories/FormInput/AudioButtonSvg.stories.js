import React from 'react';
import { AudioButtonSvg } from '../../components/FormInput.js';

export default {
	title: 'Form input audio button svg',
	component: AudioButtonSvg,
};

export const Recording = () => <AudioButtonSvg isRecording />;

export const NotRecording = () => <AudioButtonSvg isRecording = {false} />;
