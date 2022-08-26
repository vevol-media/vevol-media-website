import React from 'react';
import { Title, Container } from 'bloomer';
import { Link } from 'gatsby';
import { BgImage } from 'gbimage-bridge';
import Fade from 'react-reveal/Fade';
import './bottom-cta.scss';

export default function BottomCTA({ bgImage, title, text, url, gradientColour }) {
	return (
		<BgImage className={`bottom-cta bottom-cta--${gradientColour} vm-section`} image={bgImage}>
			<div className="bottom-cta__gradient"></div>
			<Container className="bottom-cta__content">
				<Fade top>
					<Title tag="h3" isSize={2}>
						{title}
					</Title>
				</Fade>
				<Fade top>
					<p>{text}</p>
				</Fade>

				<Fade bottom>
					<Link to={url} className={`vm-button vm-button--${gradientColour === 'green' ? 'black' : 'green'}`}>
						Get in Touch
					</Link>
				</Fade>
			</Container>
		</BgImage>
	);
}
