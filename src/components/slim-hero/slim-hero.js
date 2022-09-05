import Blob from '../blob/blob';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Title } from 'bloomer';
import './slim-hero.scss';
import VevolSection from '../general-components/vm-section';

export default function SlimHero({ heading, subheading, backgroundWhite, hideBlob }) {
	const heroModifier = backgroundWhite ? 'slim-hero--white' : '';

	return (
		<VevolSection className={`slim-hero vm-section ${heroModifier}`}>
			{hideBlob ? <></> : <Blob className={'slim-hero__blob'} size={500} translate={250} />}
			<Container>
				<div className="slim-hero__content">
					<Fade bottom>
						<Title>{heading}</Title>
					</Fade>
					<Fade bottom delay={100}>
						<p>{subheading}</p>
					</Fade>
				</div>
			</Container>
		</VevolSection>
	);
}
