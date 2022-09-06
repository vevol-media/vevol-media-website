import React from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import './portfolio-carousel.scss';
import { getImage } from 'gatsby-plugin-image';
import { SplideSlide, Splide } from '@splidejs/react-splide';
import { Link } from 'gatsby';
import { BgImage } from 'gbimage-bridge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function PortfolioCarousel({ projectsList, imagesData, cutBottomPadding }) {
	const splideSettings = {
		rewind: true,
		perPage: 4,
		gap: '1.5rem',
		height: 400,

		breakpoints: {
			1600: {
				perPage: 3,
				wheel: false,
			},
			1024: {
				perPage: 2,
				wheel: false,
			},
			480: {
				perPage: 1,
				wheel: false,
				gap: 0,
				pagination: false,
			},
		},
	};

	const carouselItems = projectsList.map((project, index) => {
		const projectImage = imagesData.filter((image) => image.name === project.featuredImage);
		const placeholderImage = imagesData.filter((image) => image.name === 'placeholder');

		const bgImage =
			projectImage.length === 0
				? getImage(placeholderImage[0].childImageSharp.gatsbyImageData)
				: getImage(projectImage[0].childImageSharp.gatsbyImageData);

		return (
			<SplideSlide key={index}>
				<Link to={project.internalUrl}>
					<BgImage className="portfolio-item" image={bgImage}>
						<div className="ml-5 mb-5">
							<p className="pb-3">{project.name}</p>
							<span className="is-flex is-align-items-center">
								Read More
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</div>
					</BgImage>
				</Link>
			</SplideSlide>
		);
	});

	return (
		<div className={`portfolio-carousel ${cutBottomPadding ? 'portfolio-carousel--cut-bottom-padding' : ''}`}>
			<Splide options={splideSettings}>{carouselItems}</Splide>
		</div>
	);
}
