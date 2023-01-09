import React from 'react';
import './progress-bar.scss';
import { useState, useEffect } from 'react';

function ProgressBar() {
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', showProgressBar);
	}, []);

	const showProgressBar = () => {
		const contentHeight =
			document.querySelector('.blog-content').offsetHeight;
		const scrollTop = document.documentElement.scrollTop;
		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		const value = (scrollTop / contentHeight) * 100;
		setScroll(value);
	};
	return (
		<div
			className={`progres-bar__container ${
				scroll === 0 ? 'progres-bar__line--hidden' : ''
			}`}
		>
			<div
				className="progres-bar__line"
				style={{ width: `${scroll}%` }}
			></div>
		</div>
	);
}

export default ProgressBar;
