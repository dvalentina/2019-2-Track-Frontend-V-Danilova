import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/webRTCInputIDStyles.module.css';
import Boundary from '../Boundary';

export default function WebRTCInputID({
	handleForeignIDSubmit,
	foreignPeerID,
	foreignInputValue,
	handleForeignIDInputChange,
}) {
	return(
		<Boundary>
			<form
				className={styles.formInput}
				id="send_foreign_id"
				onSubmit={handleForeignIDSubmit}
			>
				<input
					type="text"
					placeholder="Enter foreign peer ID here"
					className={styles.inputID}
					value={foreignInputValue}
					onChange={handleForeignIDInputChange}
				/>
				<p>Foreign peer ID: {foreignPeerID}</p>
			</form>
		</Boundary>
	);
};

WebRTCInputID.propTypes = {
	handleForeignIDSubmit: PropTypes.func.isRequired,
	foreignPeerID: PropTypes.string.isRequired,
	handleForeignIDInputChange: PropTypes.func.isRequired,
	foreignInputValue: PropTypes.string.isRequired,
};
