import React from 'react';
import styles from '../styles/headerStyles.module.css';
import { ReactComponent as UserAvatarSvg } from '../assets/user.svg';
import { ReactComponent as MenuButtonSvg } from '../assets/menu.svg';
import { ReactComponent as ReturnButtonSvg } from '../assets/return.svg';
import { ReactComponent as SearchButtonSvg } from '../assets/search.svg';
import { ReactComponent as OptionsButtonSvg } from '../assets/options.svg';

export default function Header(props) {
	const screen = props.screen;
	if (screen === 'chat') {
		return (
			<ChatHeader />
		);
	} else if (screen === 'chat list') {
		return (
			<ChatListHeader />
		);
	}
}

// Headers for different screens

function ChatHeader(props) {
	return (
		<div className={styles.chatHeader}>
			<ReturnButton />
			<UserAvatar />
			<Title screen="chat" />
			<SearchButton />
			<OptionsButton />
		</div>
	);
}

function ChatListHeader(props) {
	return (
		<div className={styles.chatListHeader}>
			<MenuButton />
			<Title screen="chat list" />
			<SearchButton />
		</div>
	);
}

// Headers content

function UserAvatar(props) {
	return (
		<div className={styles.userAvatar}>
			<UserAvatarSvg className={styles.userAvatarSvg} />
		</div>
	);
}

// Buttons

function MenuButton(props) {
	return (
		<button className={ styles.headerButton }>
			<MenuButtonSvg className={styles.buttonSvg} />
		</button>
	);
}

function ReturnButton(props) {
	return (
		<button className={styles.buttonReturn}>
			<ReturnButtonSvg className={styles.buttonSvg} />
		</button>
	);
}

function SearchButton(props) {
	return (
		<button className={styles.buttonSearch}>
			<SearchButtonSvg className={styles.buttonSvg} />
		</button>
	);
}

function OptionsButton(props) {
	return (
		<button className={styles.buttonOptions}>
			<OptionsButtonSvg className={styles.buttonSvg} />
		</button>
	);
}

// Titles

function Title(props) {
	const screen = props.screen;
	if (screen === 'chat') {
		return (
			<ChatTitle />
		);
	} else if (screen === 'chat list') {
		return (
			<ChatListTitle />
		);
	}
}

function ChatListTitle(props) {
	return (
		<p className={styles.chatListTitle}>Messenger</p>
	);
}

function ChatTitle(props) {
	return (
		<UserInfo />
	);
}

function UserInfo(props) {
	return (
		<div className={styles.userInfo}>
			<p className={styles.userName}>UserName</p>
			<p className={styles.userStatus}>был(а) 2 часа назад</p>
		</div>
	);
}
