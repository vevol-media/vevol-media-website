import React from 'react';

export default function VevolSection({ children, whiteBackground, className }) {
	return (
		<div
			className={`vm-section ${whiteBackground ? 'vm-bg--white' : 'vm-bg--black'} ${className ? className : ''}`}
		>
			{children}
		</div>
	);
}
