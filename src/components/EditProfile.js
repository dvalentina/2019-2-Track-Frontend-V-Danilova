import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/editProfileStyles.module.css';
import Boundary from './Boundary.js';
import { ReactComponent as ChangeAvatarSvg } from '../assets/icons/camera.svg';

export default function EditProfile(props) {
	const [fullName, setFullName] = useState('');
	const [userName, setUserName] = useState('');
	const [bio, setBio] = useState('');

	function handleFullNameChange(event) {
		setFullName(event.target.value);
	}

	function handleUserNameChange(event) {
		setUserName(event.target.value);
	}

	function handleBioChange(event) {
		setBio(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<Boundary>
			<div className={styles.editProfileSpace}>
				<ChangeAvatar />
				<form onSubmit={handleSubmit} className={styles.formSpace}>
					<FullName
						handleFullNameChange={handleFullNameChange}
						handleSubmit={handleSubmit}
						fullName={fullName}
					/>
					<UserName
						handleUserNameChange={handleUserNameChange}
						handleSubmit={handleSubmit}
						userName={userName}
					/>
					<Bio
						handleBioChange={handleBioChange}
						handleSubmit={handleSubmit}
						bio={bio}
					/>
				</form>
			</div>
		</Boundary>
	);
}

function ChangeAvatar(props) {
	return (
		<button
			type="button"
			className={styles.changeAvatar}
		>
			<ChangeAvatarSvg className={styles.changeAvatarSvg} />
		</button>
	);
}

function FullName({ handleFullNameChange, fullName }) {
	return (
		<div className={`${styles.inputForm} ${styles.inputWrap}`}>
			<p className={styles.text}>Full name</p>
			<input
				type="text"
				className={styles.input}
				onChange={handleFullNameChange}
				value={fullName}
				placeholder='Name Surname'
			/>
		</div>
	);
}

FullName.propTypes = {
	handleFullNameChange: PropTypes.func.isRequired,
	fullName: PropTypes.string.isRequired,
};

function UserName({ handleUserNameChange, userName }) {
	return (
		<div className={styles.inputWrap}>
			<div className={styles.inputForm}>
				<p className={styles.text}>Username</p>
				<input
					type="text"
					className={styles.input}
					onChange={handleUserNameChange}
					value={userName}
					placeholder='@example'
				/>
			</div>
			<p className={styles.text}>Minimum length is 5 characters</p>
		</div>
	);
}

UserName.propTypes = {
	handleUserNameChange: PropTypes.func.isRequired,
	userName: PropTypes.string.isRequired,
};

function Bio({ handleBioChange, bio }) {
	return (
		<div className={styles.wrap}>
			<div className={styles.textAreaForm}>
				<p className={styles.text}>Bio</p>
				<textarea
					className={styles.textareaInput}
					onChange={handleBioChange}
					value={bio}
				/>
			</div>
			<p className={styles.text}>Any details about you</p>
		</div>
	);
}

Bio.propTypes = {
	handleBioChange: PropTypes.func.isRequired,
	bio: PropTypes.string.isRequired,
};

export { ChangeAvatar };
