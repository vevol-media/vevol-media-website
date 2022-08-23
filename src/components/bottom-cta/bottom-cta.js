import React from 'react';
import { CardImage, Title } from 'bloomer';
import { Link } from 'gatsby';
import { BgImage } from 'gbimage-bridge';
import Fade from 'react-reveal/Fade';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import './bottom-cta.scss';

export default function BottomCTA({ bgImage, title, text, logoImages, url }) {
	const techLogos = logoImages.nodes.map((imageData, index) => {
		const image = getImage(imageData.childImageSharp.gatsbyImageData);

		return <GatsbyImage key={index} className="image-carousel" alt={`Tech Logo- ${index}`} image={image} />;
	});

	return (
		<BgImage className="bottom-cta__section" image={bgImage}>
			<div className="container bottom-cta__wrapper">
				<div className="bottom-cta__logos-container">
					<Fade top>
						<Title className="bottom-cta__logos-title" tag="h2" isSize={2}>
							{title}
						</Title>
					</Fade>
					<Fade bottom>
						<div className="bottom-cta__logos">{techLogos}</div>
					</Fade>
				</div>

				<div className="bottom-cta__button-container">
					<Fade top>
						<p>{text}</p>
					</Fade>
					<Fade bottom>
						<Link to={url} className="vm-button vm-button--green">
							Get in Touch
						</Link>
					</Fade>
				</div>
			</div>
		</BgImage>
	);
}
