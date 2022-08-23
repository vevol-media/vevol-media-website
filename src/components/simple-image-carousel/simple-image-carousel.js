import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Container } from 'bloomer';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import '@splidejs/splide/dist/css/splide.min.css';
import './simple-image-carousel.scss';

export default function SimpleImageCarousel({ imagesArray, backgroundWhite }) {
	const splideSettings = {
		rewind: true,
		perPage: 2,
		height: 500,
		loop: true,
		wheel: false,
		gap: '3rem',
		breakpoints: {
			1140: {
				gap: '20px',
				height: 400,
			},
			749: {
				perPage: 1,
				height: 300,
			},
		},
	};

	const carouselImages = imagesArray.map((imageData, index) => {
		const image = getImage(imageData.childImageSharp.gatsbyImageData);

		return (
			<SplideSlide key={index}>
				<GatsbyImage className="image-carousel" alt={`Vevol Media Image - ${index}`} image={image} />
			</SplideSlide>
		);
	});

	return (
		<div className="simple-image-carousel">
			<div className={`vm-section vm-bg--${backgroundWhite ? 'white' : 'black'}`}>
				<Container>
					<Splide options={splideSettings}>{carouselImages}</Splide>
				</Container>
			</div>
		</div>
	);
}
