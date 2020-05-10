/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';

export default class Boundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			eventId: null,
			hasError: false,
		};
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		Sentry.withScope((scope) => {
			scope.setExtras(errorInfo);
			const eventId = Sentry.captureException(error);
			this.setState({eventId});
		});
	}

	render() {
		const {
			hasError,
			eventId,
		} = this.state;

		const { children } = this.props;
	
		if (hasError) {
			// render fallback UI
			return (
				<button
					type='button'
					onClick={() => Sentry.showReportDialog({ eventId })}
				>
					Report feedback
				</button>
			);
		}

		// when there's not an error, render children untouched
		return children;
	}
}
