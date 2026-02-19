import React from 'react';

const icons = {
	'arrow-left': (
		<svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 24 24">
			<path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
		</svg>
	),
	'plus': (
		<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" /></svg>
	),
	'arrow-right': (
		<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" viewBox="0 0 24 24" /></svg>
	)
};

export default function Icon({ name, className }) {
	const icon = icons[name];
	if (!icon) return null;
	return React.cloneElement(icon, { className });
}
