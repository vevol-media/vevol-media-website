import React, { useEffect } from 'react';
import Header from '../header/header';
import WebsiteFooter from '../footer/footer';
import Fade from 'react-reveal/Fade';
import { Cursor } from '../cursor/cursor';
import { useSpring, animated } from 'react-spring';
import MainForm from '../forms/main-form';

export default function Layout({ children, headerBg, showBlob }) {
	const [animatedProps, setAnimatedProps] = useSpring(() => ({
		transform: `translate3d(0px, 0px, 0)`,
	}));

	const handleMouseMove = (event) => {
		setAnimatedProps({
			transform: `translate3d(${event.clientX}px, ${event.clientY}px, 0)`,
		});
	};

	const handleScroll = (event) => {
		if (window.scrollY > 100) {
			document.querySelector('.vm-header').classList.add('vm-header--full');
		} else {
			document.querySelector('.vm-header').classList.remove('vm-header--full');
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	});

	return (
		<Fade>
			<div onMouseMove={handleMouseMove} role="presentation">
				{showBlob && (
					<div className="cursor-container">
						<animated.div style={animatedProps} className="cursor-wrapper">
							<Cursor />
						</animated.div>
					</div>
				)}
				<Header background={headerBg} />
				<main>{children}</main>
				<MainForm
					title={"Let's Talk About Your Business"}
					subtitle={
						'Get in touch with us if you want to get a quote for your project or if you simply want to say hello! We are friendly!'
					}
				/>
				<WebsiteFooter />
			</div>
		</Fade>
	);
}
