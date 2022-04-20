import React from 'react';
import { Container, Title, CardImage } from 'bloomer';
import Fade from 'react-reveal/Fade';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import './info-page-intro.scss';

export default function InfoPageIntro(props) {
	const nodes = props.data.allFile.nodes;
	const pathName = props.storePath.split('/case-study/').pop();

	const storeBanner = nodes.map((img, index) => {
		const bgImage = getImage(img.childImageSharp.gatsbyImageData);

		if (img.name.includes(pathName) && img.name.includes('banner')) {
			return <GatsbyImage className="intro-img" key={index} image={bgImage} alt={img.name} />;
		}

		return null;
	});

	return (
		<div className="vm-bg--white">
			<Container>
				<div className="info-page-intro is-flex is-flex-direction-column has-text-centered mb-3">
					<Fade top>
						<p>{props.supraheading}</p>
					</Fade>
					<Fade top delay={400}>
						<Title className="mt-2">{props.heading}</Title>
					</Fade>
				</div>
			</Container>

			<CardImage className="page-intro-img">{storeBanner}</CardImage>
		</div>
	);
}
