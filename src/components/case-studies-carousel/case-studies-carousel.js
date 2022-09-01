import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Container } from 'bloomer';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import caseStudies from '../../enums/case-studies';
import './case-studies-carousel.scss';
import '@splidejs/splide/dist/css/splide.min.css';
import HeadingBlock from '../heading-block/heading-block';

const images = graphql`
	query {
		allFile(filter: { relativeDirectory: { eq: "case-studies-carousel" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, width: 800, blurredOptions: { width: 125 })
				}
			}
		}
	}
`;

export default function CaseStudiesCarousel({ backgroundWhite }) {
	const backgroundModifier = backgroundWhite ? 'white' : 'black';
	const imagesData = useStaticQuery(images).allFile.nodes;
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

	const carouselItems = caseStudies.map((project, index) => {
		const projectImage = imagesData.filter((image) => image.name === project.handle);

		if (projectImage.length === 0) return <></>;

		const bgImage = getImage(projectImage[0].childImageSharp.gatsbyImageData);

		return (
			<SplideSlide key={index}>
				<Link to={`/case-study/${project.handle}`}>
					<BgImage className="case-study-item" image={bgImage}>
						<div className="ml-5 mb-5">
							<p className="pb-3">{project.name}</p>
							<span className="is-flex is-align-items-center">
								View Case Study
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</div>
					</BgImage>
				</Link>
			</SplideSlide>
		);
	});

	return (
		<div className={`case-studies-carousel vm-section case-studies-carousel--${backgroundModifier}`}>
			<Container>
				<HeadingBlock
					title={'Our previously successful projects'}
					highlightedWord={'successful'}
					subtitle={'Proven track record of our hard work.'}
				/>
				<Splide options={splideSettings}>{carouselItems}</Splide>
			</Container>
		</div>
	);
}
