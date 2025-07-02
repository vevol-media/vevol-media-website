import React from 'react';
import './portfolio-carousel.scss';
import { getImage } from 'gatsby-plugin-image';
import { SplideSlide, Splide } from '@splidejs/react-splide';
import { Link } from 'gatsby';
import { BgImage } from 'gbimage-bridge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from '../../helpers/useTranslations';

export default function PortfolioCarousel({ projectsList, imagesData, cutBottomPadding }) {
	const { t } = useTranslations();
	const splideSettings = {
		rewind: true,
		perPage: 3,
		gap: '30px',
		height: 420,
		wheel: false,
		breakpoints: {
			1024: {
				perPage: 2,
			},
			480: {
				perPage: 1,
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
				<Link
					to={project.hasPage ? project.internalUrl : project.externalUrl}
					target={project.hasPage ? '_self' : '_blank'}
				>
					<BgImage className="portfolio-item" image={bgImage}>
						<div className="portfolio-item__actions">
							<p className="pb-3">{project.name}</p>
							<span className="is-flex is-align-items-center">
								{project.hasPage ? t('common.readCaseStudy') : t('common.checkLiveSite')}
								{project.hasPage && <FontAwesomeIcon icon={faArrowRight} />}
								{!project.hasPage && <FontAwesomeIcon icon={faExternalLinkAlt} />}
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
