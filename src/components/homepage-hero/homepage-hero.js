import React from 'react';
import { Container, Title } from 'bloomer';
import { Link } from 'gatsby';
import ClutchWidget from './clutch-widget';
import Blob from '../blob/blob';
import './homepage-hero.scss';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function HomepageHero({ imageBottom }) {
	console.log(imageBottom)
	return (
		<div className="homepage-hero">
			<Blob className={'homepage-hero__blob homepage-hero__blob--top'} size={350} translate={120} duration={15} />
			{/* <Blob className={'homepage-hero__blob'} size={500} translate={250} duration={35} /> */}
			<GatsbyImage
				image={imageBottom}
				className="homepage-hero__bottom-image"
				alt={'Vevol Media Shopify Experts'}
			/>
			<Container>
				<div className="homepage-hero__content">
					<p>eCommerce Custom Solutions</p>
					<Title className={'homepage-hero__title'}>Shopify & Shopify Plus Custom Development</Title>
					<p>
						We are Shopify partners and experienced developers, so you can be sure you are in great hands!
					</p>
					<Link to="/contact" className="vm-button vm-button--white vm-button--big">
						Ask for availability
					</Link>
					<ClutchWidget />
				</div>
			</Container>
		</div>
	);
}
