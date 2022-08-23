import React, { useEffect } from 'react';
import Header from '../header/header';
import WebsiteFooter from '../footer/footer';
import Fade from 'react-reveal/Fade';
import { graphql, useStaticQuery } from 'gatsby';
import { Cursor } from '../cursor/cursor';
import { useSpring, animated } from 'react-spring';
import BottomCTA from '../bottom-cta/bottom-cta';
import { getImage } from 'gatsby-plugin-image';
import techList from '../../enums/tech-list';

export default function Layout({ children, headerBg, showBlob }) {
	const { placeholderImage } = useStaticQuery(
		graphql`
			query {
				placeholderImage: file(relativePath: { eq: "work-together-banner.jpg" }) {
					childImageSharp {
						gatsbyImageData(placeholder: BLURRED)
					}
				}
			}
		`
	);

	const image = getImage(placeholderImage);
	const bgImage = getImage(image);


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
				<BottomCTA
					bgImage= {bgImage}
					title="Let's Work Together"
					text="Book a free consultation with one of out team members now"
					techList = {techList}
					url="/"
				/>
				<WebsiteFooter />
			</div>
		</Fade>
	);
}
