import React from 'react';

export default function VevolSection({ children, backgroundColour, className }) {
	return (
		<div
			className={`vm-section vm-section--background-${backgroundColour ? backgroundColour : 'black'} ${
				className ? className : ''
			}`}
		>
			{children}
		</div>
	);
}
