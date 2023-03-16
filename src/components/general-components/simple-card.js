import React from 'react';

export default function SimpleCard({ children, pinkBorder, alternativeBackground }) {
	return (
		<div
			className={`simple-card ${pinkBorder ? 'simple-card--pink-border' : ''} ${
				alternativeBackground ? 'simple-card--alternative-background' : ''
			}`}
		>
			{children}
		</div>
	);
}
