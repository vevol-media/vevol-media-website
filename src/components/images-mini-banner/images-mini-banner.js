import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';

export default function ImagesMiniBanner({ images }) {
	return (
		<div className="images-mini-banner">
			<div className="images-mini-banner__wrapper">
				<ul style={{ animationDuration: `${images.length * 3}s` }}>
					{images.map((imgData, index) => {
						const image = getImage(imgData.childImageSharp.gatsbyImageData);

						return (
							<li key={index}>
								<GatsbyImage image={image} alt="Vevol Media Partner" className="wrapper__image" />
							</li>
						);
					})}
					{images.map((imgData, index) => {
						const image = getImage(imgData.childImageSharp.gatsbyImageData);

						return (
							<li key={index}>
								<GatsbyImage image={image} alt="Vevol Media Partner" className="wrapper__image" />
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
