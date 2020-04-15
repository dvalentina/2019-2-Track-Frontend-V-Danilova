import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/twoMessageBlockStyles.module.css';
import { Content } from '../MessageBlock.js';

export default function CentrifugoMessageBlock({ userID, authorName, content, time, type, id }) {
	if (userID === authorName) {
		return (
			<div className={styles.myMessageBlock} id={id} key={id} >
				<div className={styles.myResult}>
					<div className={styles.authorName}>User #{authorName}</div>
					<Content type={type} content={content} />
					<div className={styles.time}>{time.slice(11, 19)}</div>
				</div>
			</div>
		);
	}
	return (
		<div className={styles.otherMessageBlock} id={id} key={id} >
			<div className={styles.otherResult}>
				<div className={styles.authorName}>User #{authorName}</div>
				<Content type={type} content={content} />
				<div className={styles.time}>{time.slice(11, 19)}</div>
			</div>
		</div>
	);
}

CentrifugoMessageBlock.propTypes = {
	authorName: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	userID: PropTypes.number.isRequired,
	id: PropTypes.number.isRequired,
};
