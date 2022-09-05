import React from 'react';
import { BgImage } from 'gbimage-bridge';
import { Container, Title } from 'bloomer';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';

export default function BottomCTA({ bgImage, title, text, url, gradientColour }) {
	return (
		<BgImage className={`bottom-cta bottom-cta--${gradientColour} vm-section`} image={bgImage}>
			<div className="bottom-cta__gradient"></div>
			<Container className="bottom-cta__content">
				<Fade bottom cascade>
					<Title tag="h3" isSize={2}>
						{title}
					</Title>
					<p>{text}</p>
					<Link to={url} className={`vm-button vm-button--${gradientColour === 'green' ? 'black' : 'green'}`}>
						Get in Touch
					</Link>
				</Fade>
			</Container>
		</BgImage>
	);
}
