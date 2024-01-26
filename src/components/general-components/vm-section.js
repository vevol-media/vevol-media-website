import React from 'react';

export default function VevolSection({ children, backgroundColour, className, customId }) {
	return (
		<div
			id={customId}
			className={`vm-section vm-section--background-${backgroundColour ? backgroundColour : 'black'} ${
				className ? className : ''
			}`}
		>
			{children}
		</div>
	);
}
