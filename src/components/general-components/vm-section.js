import React from 'react';

export default function VevolSection({ children, whiteBackground, className }) {
	return (
		<div
			className={`vm-section ${whiteBackground ? 'vm-section--background-white' : ''} ${
				className ? className : ''
			}`}
		>
			{children}
		</div>
	);
}
