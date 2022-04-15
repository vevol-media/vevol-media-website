import React from 'react';
import { Container, Title, CardImage } from 'bloomer';
import '../slim-hero/slim-hero.scss';
import './info-page-intro.scss';
import Fade from 'react-reveal/Fade';
import { StaticImage } from 'gatsby-plugin-image';

export default function InfoPageIntro({supraheading, heading }) {
	
	return (
		<div className="vm-section--white">
			<Container>
				<div className="info-page-intro is-flex is-flex-direction-column has-text-centered">
					<Fade top>
						<p>{supraheading}</p>
					</Fade>
					<Fade top delay={400}>
						<Title className='mt-2'>{heading}</Title>
					</Fade>
				</div>
			</Container>
		</div>
	);
}
