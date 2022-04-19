import React from 'react';
import { Container, Title, CardImage } from 'bloomer';
import Fade from 'react-reveal/Fade';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import './info-page-intro.scss';

export default function InfoPageIntro({ supraheading, heading, data, storePath }) {
	const nodes = data.allFile.nodes;
	const pathName = storePath.split('/case-study/').pop();

	const storeBanner = nodes.map((img, index) => {
		const bgImage = getImage(img.childImageSharp.gatsbyImageData);

		if (img.name.includes(pathName) && img.name.includes('banner')) {
			return <GatsbyImage className="intro-img" key={index} image={bgImage} alt={img.name} />;
		}
	});

	return (
		<div className="vm-section--white">
			<Container>
				<div className="info-page-intro is-flex is-flex-direction-column has-text-centered mb-3">
					<Fade top>
						<p>{supraheading}</p>
					</Fade>
					<Fade top delay={400}>
						<Title className="mt-2">{heading}</Title>
					</Fade>
				</div>
			</Container>

			<CardImage className="page-intro-img">{storeBanner}</CardImage>
		</div>
	);
}
