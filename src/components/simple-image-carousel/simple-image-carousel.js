import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import './simple-image-carousel.scss';

export default function SimpleImageCarousel({ imagesArray, className, maxHeight }) {
	const splideSettings = {
		rewind: true,
		perPage: 2,
		perMove: 1,
		loop: true,
		wheel: false,
		gap: '3rem',
		breakpoints: {
			1140: {
				gap: '20px',
			},
			749: {
				perPage: 1,
			},
		},
	};

	const carouselImages = imagesArray
		.filter((imageData) => imageData && imageData.childImageSharp && imageData.childImageSharp.gatsbyImageData)
		.map((imageData, index) => {
			const image = getImage(imageData.childImageSharp.gatsbyImageData);

			return (
				<SplideSlide key={index}>
					<GatsbyImage
						className="image-carousel"
						alt={`Vevol Media Carousel Image - ${index}`}
						image={image}
						loading="lazy"
						style={{ maxHeight: maxHeight ? maxHeight : 'auto' }}
					/>
				</SplideSlide>
			);
		});

	return (
		<div className={`simple-image-carousel ${className}`}>
			<Splide options={splideSettings}>{carouselImages}</Splide>
		</div>
	);
}
