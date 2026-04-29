import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

function FeatureItem({ item }) {
	const classes = ['meetup-sponsorship-deck__tier-item', item.strike && 'meetup-sponsorship-deck__tier-item--strike'].filter(Boolean).join(' ');

	return <li className={classes}>{item.bold ? <strong>{item.text}</strong> : item.text}</li>;
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
	const { variant, reverse, title, imageLayout, images, features, availability, price, titleInBody } = config;

	const sectionClasses = [
		'meetup-sponsorship-deck__section',
		'meetup-sponsorship-deck__tier',
		`meetup-sponsorship-deck__tier--${variant}`,
		reverse && 'meetup-sponsorship-deck__tier--reverse',
		titleInBody && 'meetup-sponsorship-deck__tier--title-in-body',
	]
		.filter(Boolean)
		.join(' ');

	const TitleNode = (
		<h3 className="meetup-sponsorship-deck__tier-title">
			{title.prefix} <span className="meetup-sponsorship-deck__tier-title-highlight">{title.highlight}</span> {title.suffix}
		</h3>
	);

	return (
		<section className={sectionClasses}>
			<div className="meetup-sponsorship-deck__tier-inner">
				{!titleInBody && TitleNode}
				<div className="meetup-sponsorship-deck__tier-content">
					<TierImages layout={imageLayout} images={images} altPrefix={`${title.highlight} sponsor`} />
					<div className="meetup-sponsorship-deck__tier-body">
						{titleInBody && TitleNode}
						<ul className="meetup-sponsorship-deck__tier-list">
							{features.map((item) => (
								<FeatureItem key={item.text} item={item} />
							))}
						</ul>
						{availability && <p className="meetup-sponsorship-deck__tier-availability">{availability}</p>}
						{price && <p className="meetup-sponsorship-deck__tier-price">{price}</p>}
					</div>
				</div>
			</div>
		</section>
	);
}
