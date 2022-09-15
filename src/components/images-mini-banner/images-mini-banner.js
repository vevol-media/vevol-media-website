import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import { SplideSlide, Splide } from '@splidejs/react-splide';

export default function ImagesMiniBanner({ images }) {
	const splideSettings = {
		autoWidth: true,
		gap: '100px',
		wheel: false,
		pagination: false,
		start: 0,
		padding: { left: 100, right: 100 },
		breakpoints: {
			480: {
				autoplay: true,
				rewind: true,
				speed: 2000,
				easing: 'linear',
				interval: 10,
				arrows: false,
				rewindSpeed: 500,
				gap: '50px',
				padding: { left: 50, right: 50 },
			},
		},
	};

	return (
		<Splide options={splideSettings} className="images-mini-banner">
			{images.map((imgData, index) => {
				const image = getImage(imgData.childImageSharp.gatsbyImageData);

				return (
					<SplideSlide key={index}>
						<GatsbyImage image={image} alt="Vevol Media Partner" />
					</SplideSlide>
				);
			})}
		</Splide>
	);
}
