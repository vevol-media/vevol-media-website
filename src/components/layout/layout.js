import React, { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Fade from 'react-reveal/Fade';
import { Cursor } from '../cursor/cursor';
import { useSpring, animated } from 'react-spring';
import BottomCTA from '../bottom-CTA/bottom-CTA';

export default function Layout({ children }) {
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
				<div className="cursor-container">
					<animated.div style={animatedProps} className="cursor-wrapper">
						<Cursor />
					</animated.div>
				</div>
				<Header />
				<main>{children}</main>
				<BottomCTA
				title="Let's Work Together"
				text="Book a free consultation with one of out team members now"
				/>
				<Footer />
			</div>
		</Fade>
	);
}
