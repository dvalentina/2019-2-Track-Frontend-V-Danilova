import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/WebRTCInputIDStyles.module.css';

export default function WebRTCInputID({
	handleForeignIDSubmit,
	foreignPeerID,
	foreignInputValue,
	handleForeignIDInputChange,
}) {
	return(
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
	);
};

WebRTCInputID.propTypes = {
	handleForeignIDSubmit: PropTypes.func.isRequired,
	foreignPeerID: PropTypes.string.isRequired,
	handleForeignIDInputChange: PropTypes.func.isRequired,
	foreignInputValue: PropTypes.string.isRequired,
};
