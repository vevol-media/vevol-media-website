import React from 'react';
import { CardImage, Title } from 'bloomer';
import { Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';
import './bottom-CTA.scss';
import Fade from 'react-reveal/Fade';

export default function BottomCTA({ title, text }) {
	const { placeholderImage } = useStaticQuery(
		graphql`
			query {
				placeholderImage: file(relativePath: { eq: "work-together-banner.jpg" }) {
					childImageSharp {
						gatsbyImageData(placeholder: BLURRED)
					}
				}
			}
		`
	);

	const image = getImage(placeholderImage);
	const bgImage = convertToBgImage(image);

	return (
		<BackgroundImage
			Tag="section"
			className="bottom-cta__section"
			// Spread bgImage into BackgroundImage:
			{...bgImage}
			preserveStackingContext
		>
			<div className="container bottom-cta__wrapper">
				<div className="bottom-cta__logos-container">
					<Fade top>
						<Title>{title}</Title>
					</Fade>
					<Fade bottom>
						<div className="bottom-cta__logos">
							<span>shopify</span>
							<span>React</span>
							<span>Gatsby</span>
						</div>
					</Fade>
				</div>

				<div className="bottom-cta__button-container">
					<Fade top>
						<p>{text}</p>
					</Fade>
					<Fade bottom>
						<Link to="/" className="vm-button vm-button--green">
							Get in Touch
						</Link>
					</Fade>
				</div>
			</div>
		</BackgroundImage>
	);
}
