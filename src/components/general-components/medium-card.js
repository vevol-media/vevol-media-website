import { Title } from 'bloomer/lib/elements/Title';
import React from 'react';

export default function MediumCard({
	title,
	subtitle,
	featuresTitle,
	listOfFeatures,
	cta,
	pinkBorder,
	alternativeBackground,
}) {
	return (
		<div
			className={`medium-card ${pinkBorder ? 'medium-card--pink-border' : ''} ${
				alternativeBackground ? 'medium-card--alternative-background' : ''
			}`}
		>
			<div className="medium-card__info">
				<Title tag="h2" isSize={4}>
					{title}
				</Title>
				{subtitle && <p>{subtitle}</p>}
			</div>
			<div className="medium-card__features">
				{featuresTitle && (
					<Title tag="h3" isSize={4}>
						{featuresTitle}
					</Title>
				)}
				<ul>
					{listOfFeatures.map((feature, index) => (
						<li key={index}>
							<span>✔</span>
							<p>{feature}</p>
						</li>
					))}
				</ul>
			</div>
			{cta && <div className="medium-card__cta">{cta}</div>}
		</div>
	);
}
