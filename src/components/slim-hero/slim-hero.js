import Blob from '../blob/blob';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Title } from 'bloomer';
import './slim-hero.scss';

export default function SlimHero({ heading, subheading, backgroundWhite, hideBlob }) {
	const heroModifier = backgroundWhite ? 'slim-hero--white' : '';
	const heroClasses = `slim-hero vm-section ${heroModifier}`;
	return (
		<div className={heroClasses}>
			{hideBlob ? <></> : <Blob className={'slim-hero__blob'} size={500} translate={250} />}
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
