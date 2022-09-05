import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'bloomer';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './portfolio-carousel.scss';
import '@splidejs/splide/dist/css/splide.min.css';
import HeadingBlock from '../heading-block/heading-block';
import VevolSection from '../general-components/vm-section';

export default function PortfolioCarousel({ projectsList, imagesData, backgroundWhite }) {
	const backgroundModifier = backgroundWhite ? 'white' : 'black';
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
		<VevolSection className={`portfolio-carousel portfolio-carousel--${backgroundModifier}`}>
			<Container>
				<HeadingBlock
					title={'Our previously successful projects'}
					highlightedWord={'successful'}
					subtitle={'Proven track record of our hard work.'}
				/>
				<Splide options={splideSettings}>{carouselItems}</Splide>
			</Container>
		</VevolSection>
	);
}
