import React from 'react';
import { Container, Title } from 'bloomer';
import { Link } from 'gatsby';
import Blob from '../blob/blob';
import './homepage-hero.scss';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function LandingHero({
	imageBottom,
	upperText,
	title,
	subtitle,
	buttonText,
	buttonLink,
	customClassName,
}) {
	return (
		<div className={`homepage-hero ${customClassName}`}>
			<Blob className={'homepage-hero__blob homepage-hero__blob--top'} size={350} translate={120} duration={15} />
			<GatsbyImage image={imageBottom} className="homepage-hero__bottom-image" alt={title} />
			<Container>
				<div className="homepage-hero__content">
					{upperText && <p className='content__supra-title'>{upperText}</p>}
					{title && <Title>{title}</Title>}
					{subtitle && <p>{subtitle}</p>}
					{buttonText && (
						<Link to={buttonLink} className="vm-button vm-button--white vm-button--big">
							{buttonText}
						</Link>
					)}
				</div>
			</Container>
		</div>
	);
}
