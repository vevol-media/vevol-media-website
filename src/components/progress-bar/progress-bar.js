import React, { useState, useEffect } from 'react';
import './progress-bar.scss';

function ProgressBar() {
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', showProgressBar);
	}, []);

	const showProgressBar = () => {
		const content = document.querySelector('.blog-content');

		if (content) {
			const contentHeight = content.offsetHeight;
			const scrollTop = document.documentElement.scrollTop;

			const value = (scrollTop / contentHeight) * 100;
			setScroll(value);
		}

	};
	return (
		<div className={`progres-bar__container ${scroll === 0 ? 'progres-bar__line--hidden' : ''}`}>
			<div className="progres-bar__line" style={{ width: `${scroll}%` }}></div>
		</div>
	);
}

export default ProgressBar;
