import React from 'react';

export default function VevolSection({ children, backgroundColour, className, customId, borderTop, borderBottom }) {
	return (
		<div
			id={customId}
			className={`vm-section vm-section--background-${backgroundColour ? backgroundColour : 'black'} ${
				className ? className : ''
			} ${borderTop ? 'vm-section--border-top' : ''} ${borderBottom ? 'vm-section--border-bottom' : ''}`}
		>
			{children}
		</div>
	);
}
