import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/editProfileHeaderStyles.module.css';
import { ReactComponent as ReturnButtonSvg } from '../assets/return.svg';
import { ReactComponent as SaveButtonSvg } from '../assets/tick.svg';

export default function EditProfileHeader(props) {
	return (
		<div className={styles.editProfileHeader}>
			<Link to='/' className={styles.headerButton}>
				<ReturnButtonSvg className={styles.buttonSvg} />
			</Link>
			<EditProfileTitle />
			<SaveButton />
		</div>
	);
}

function EditProfileTitle(props) {
	return (
		<p className={styles.editProfileTitle}>Edit Profile</p>
	);
}

function SaveButton(props) {
	return (
		<button
			type='button'
			className={styles.headerButton}
		>
			<SaveButtonSvg className={styles.buttonSvg} />
		</button>
	);
}

export { EditProfileTitle, SaveButton };
