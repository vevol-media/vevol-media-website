import React from 'react';
import { Container, Title } from 'bloomer';
import './slim-hero.scss';
import Fade from 'react-reveal/Fade';
import Blob from '../blob/blob';

export default function SlimHero({ heading, subheading }) {
	return (
		<div className="slim-hero vm-section">
			<Blob className={'slim-hero__blob'} size={500} translate={250} />
			<Container>
				<div className="slim-hero__content">
					<Fade top delay={400}>
						<Title>{heading}</Title>
					</Fade>
					<Fade top>
						<p>{subheading}</p>
					</Fade>
				</div>
			</Container>
		</div>
	);
}
