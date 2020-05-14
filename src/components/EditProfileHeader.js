import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/editProfileHeaderStyles.module.css';
import Boundary from './Boundary.js';
import { ReactComponent as ReturnButtonSvg } from '../assets/icons/return.svg';
import { ReactComponent as SaveButtonSvg } from '../assets/icons/tick.svg';

export default function EditProfileHeader(props) {
	return (
		<Boundary>
			<div className={styles.editProfileHeader}>
				<Link to='/' className={styles.headerButton}>
					<ReturnButtonSvg className={styles.buttonSvg} />
				</Link>
				<EditProfileTitle />
				<SaveButton />
			</div>
		</Boundary>
	);
}

function EditProfileTitle(props) {
	return (
		<Boundary>
			<p className={styles.editProfileTitle}>Edit Profile</p>
		</Boundary>
	);
}

function SaveButton(props) {
	return (
		<Boundary>
			<button
				type='button'
				className={styles.headerButton}
			>
				<SaveButtonSvg className={styles.buttonSvg} />
			</button>
		</Boundary>
	);
}

export { EditProfileTitle, SaveButton };
