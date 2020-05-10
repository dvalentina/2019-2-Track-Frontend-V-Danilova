import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/twoMessageBlockStyles.module.css';
import { Content } from '../MessageBlock.js';
import Boundary from '../Boundary';

export default function CentrifugoMessageBlock({ userID, authorID, content, time, type, id }) {
	if (userID === authorID) {
		return (
			<Boundary>
				<div className={styles.myMessageBlock} id={id} key={id} >
					<div className={styles.myResult}>
						<div className={styles.authorName}>User #{authorID}</div>
						<Content type={type} content={content} />
						<div className={styles.time}>{time.slice(11, 19)}</div>
					</div>
				</div>
			</Boundary>
		);
	}
	return (
		<Boundary>
			<div className={styles.otherMessageBlock} id={id} key={id} >
				<div className={styles.otherResult}>
					<div className={styles.authorName}>User #{authorID}</div>
					<Content type={type} content={content} />
					<div className={styles.time}>{time.slice(11, 19)}</div>
				</div>
			</div>
		</Boundary>
	);
}

CentrifugoMessageBlock.propTypes = {
	authorID: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	userID: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};
