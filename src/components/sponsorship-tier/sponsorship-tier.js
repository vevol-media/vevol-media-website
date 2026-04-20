import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

function FeatureItem({ item }) {
	const classes = ['meetup-sponsorship-deck__tier-item'];

	if (item.strike) classes.push('meetup-sponsorship-deck__tier-item--strike');

	return <li className={classes.join(' ')}>{item.bold ? <strong>{item.text}</strong> : item.text}</li>;
}

function TierImages({ layout, images, altPrefix }) {
	if (layout === 'circles') {
		const [primary, secondary] = images;

		return (
			<div className="meetup-sponsorship-deck__tier-image meetup-sponsorship-deck__tier-image--circles">
				{primary && (
					<div className="meetup-sponsorship-deck__circle meetup-sponsorship-deck__circle--primary">
						<GatsbyImage image={primary} alt={`${altPrefix} primary`} />
					</div>
				)}
				{secondary && (
					<div className="meetup-sponsorship-deck__circle meetup-sponsorship-deck__circle--secondary">
						<GatsbyImage image={secondary} alt={`${altPrefix} secondary`} />
					</div>
				)}
			</div>
		);
	}

	if (layout === 'stack') {
		const [a, b] = images;

		return (
			<div className="meetup-sponsorship-deck__tier-image meetup-sponsorship-deck__tier-image--stack">
				{a && (
					<div className="meetup-sponsorship-deck__stack-photo meetup-sponsorship-deck__stack-photo--a">
						<GatsbyImage image={a} alt={`${altPrefix} top`} />
					</div>
				)}
				{b && (
					<div className="meetup-sponsorship-deck__stack-photo meetup-sponsorship-deck__stack-photo--b">
						<GatsbyImage image={b} alt={`${altPrefix} bottom`} />
					</div>
				)}
			</div>
		);
	}

	const [single] = images;

	return (
		<div className="meetup-sponsorship-deck__tier-image meetup-sponsorship-deck__tier-image--single">
			{single && <GatsbyImage image={single} alt={altPrefix} />}
		</div>
	);
}

export default function SponsorshipTier({ config }) {
	const { variant, reverse, title, imageLayout, images, features, availability, price } = config;

	const sectionClasses = [
		'meetup-sponsorship-deck__section',
		'meetup-sponsorship-deck__tier',
		`meetup-sponsorship-deck__tier--${variant}`,
	];

	if (reverse) sectionClasses.push('meetup-sponsorship-deck__tier--reverse');

	return (
		<section className={sectionClasses.join(' ')}>
			<TierImages layout={imageLayout} images={images} altPrefix={`${title.highlight} sponsor`} />

			<div className="meetup-sponsorship-deck__tier-body">
				<h3 className="meetup-sponsorship-deck__tier-title">
					{title.prefix}{' '}
					<span className="meetup-sponsorship-deck__tier-title-highlight">{title.highlight}</span>{' '}
					{title.suffix}
				</h3>
				<ul className="meetup-sponsorship-deck__tier-list">
					{features.map((item, i) => (
						<FeatureItem key={i} item={item} />
					))}
				</ul>
				{availability && <p className="meetup-sponsorship-deck__tier-availability">{availability}</p>}
				{price && <p className="meetup-sponsorship-deck__tier-price">{price}</p>}
			</div>
		</section>
	);
}
