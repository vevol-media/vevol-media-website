import React from 'react';
import './progress-bar.scss';
import { useState, useEffect } from 'react';

function ProgressBar() {
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', showProgressBar);
	}, []);

	const showProgressBar = () => {
		const scrollTop = document.documentElement.scrollTop;
		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		const value = (scrollTop / height) * 100;
		setScroll(value);
	};
	return (
		<div className="progres-bar__container">
			<div
				className="progres-bar__line"
				style={
					scroll === 0
						? { width: `${scroll}%`, visibility: 'hidden', opacity: '0' }
						: { width: `${scroll}%` }
				}
			></div>
		</div>
	);
}

export default ProgressBar;
