import React from 'react';
import './images-mini-banner.scss';
import { Fade } from 'react-reveal';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';

export default function ImagesMiniBanner({images}) {
	return (
		<div className="images-mini-banner">
			<div className="images-mini-banner__wrapper">
				<Fade bottom cascade>
					{images.map((imgData) => {
						const image = getImage(
							imgData.childImageSharp.gatsbyImageData
						);

						return (
							<GatsbyImage
								image={image}
								alt="Vevol Media Partner"
								className="wrapper__image"
							/>
						);
					})}
				</Fade>
			</div>
		</div>
	);
}
