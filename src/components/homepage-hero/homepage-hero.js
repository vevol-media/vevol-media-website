import React from 'react';
import { Container, Title } from 'bloomer';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import ClutchWidget from './clutch-widget';
import Blob from '../blob/blob';
import './homepage-hero.scss';

export default function HomepageHero() {
	return (
		<div className="homepage-hero">
			<Blob className={'homepage-hero__blob homepage-hero__blob--top'} size={350} translate={120} />
			<Blob className={'homepage-hero__blob'} size={500} translate={250} />
			<Container>
				<div className="homepage-hero__content">
					<Fade bottom>
						<p className="">Europe Based</p>
					</Fade>
					<Fade bottom delay={100}>
						<Title>Shopify Experts You Can Trust</Title>
					</Fade>
					<Fade bottom delay={300}>
						<p>
							As Shopify partners and experienced developers, we can become a pillar of your success
							story.
						</p>
					</Fade>
					<Fade bottom delay={600}>
						<Link to="/contact" className="vm-button vm-button--white vm-button--big">
							Let's work together
						</Link>
					</Fade>
					<Fade bottom delay={900}>
						<ClutchWidget />
					</Fade>
				</div>
			</Container>
		</div>
	);
}
