import React from 'react';
import { Container, Title } from 'bloomer';
import { Link } from 'gatsby';
import ClutchWidget from './clutch-widget';
import Blob from '../blob/blob';
import './homepage-hero.scss';

export default function HomepageHero() {
	return (
		<div className="homepage-hero">
			<Blob className={'homepage-hero__blob homepage-hero__blob--top'} size={350} translate={120} duration={15} />
			<Blob className={'homepage-hero__blob'} size={500} translate={250} duration={35} />
			<Container>
				<div className="homepage-hero__content">
					<p className="">Europe Based</p>
					<Title>Shopify Experts You Can Trust</Title>
					<p>
						We are Shopify partners and experienced developers, so you can be sure you are in great hands!
					</p>
					<Link to="/contact" className="vm-button vm-button--white vm-button--big">
						Let's work together
					</Link>
					<ClutchWidget />
				</div>
			</Container>
		</div>
	);
}
