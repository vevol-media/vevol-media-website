import React from 'react';
import './images-mini-banner.scss';
import { Fade } from 'react-reveal';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

export default function ImagesMiniBanner() {
	const imagesData = useStaticQuery(graphql`
		query {
			allFile(filter: { relativeDirectory: { eq: "partners" } }) {
				nodes {
					name
					childImageSharp {
						gatsbyImageData(placeholder: TRACED_SVG)
					}
				}
			}
		}
	`).allFile.nodes;

	const listOfImages = imagesData.map((imgData, index) => {
		const image = getImage(imgData.childImageSharp.gatsbyImageData);

		return (
			<Fade bottom key={index} delay={index * 100}>
				<GatsbyImage
					image={image}
					alt="vevol media partner"
					className="wrapper__image"
				/>
			</Fade>
		);
	});

	return (
		<div className="images-mini-banner">
			<div className="container images-mini-banner__wrapper">
				{listOfImages}
			</div>
		</div>
	);
}
