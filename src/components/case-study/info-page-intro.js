import React from 'react';
import { Container, Title, CardImage } from 'bloomer';
import '../slim-hero/slim-hero.scss';
import './info-page-intro.scss';
import Fade from 'react-reveal/Fade';
import { StaticImage } from 'gatsby-plugin-image';

export default function InfoPageIntro({supraheading, heading, src }) {
	console.log('TST', src)
	return (
		<div className="slim-hero vm-section--white">
			<Container>
				<div className="slim-hero__content">
					<Fade top>
						<p>{supraheading}</p>
					</Fade>
					<Fade top delay={400}>
						<Title>{heading}</Title>
					</Fade>
				</div>
			</Container>

			<div className='page-intro-img'>
				<img
				src={src}
				alt="hero backround"
				/>
			</div>
		</div>
	);
}
