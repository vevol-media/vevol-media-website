import * as React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Title, Content, Container, Subtitle } from 'bloomer';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import './simple-image-carousel.scss';
import '@splidejs/splide/dist/css/splide.min.css';

const nodeSimpleImageCarousel = graphql`
	query SimpleImageCarousel {
		allFile(filter: { relativeDirectory: { eq: "stores-simple-carousel" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: TRACED_SVG)
				}
			}
		}
	}
`;

const SimpleImageCarousel = ({storePath, backgroundCarousel, backgroundContent, tools, goals}) => {
	const node = useStaticQuery(nodeSimpleImageCarousel).allFile.nodes;
	const pathName = storePath.split('/case-study/').pop();

	const simpleImageCarousel = node.map((img, index) => {
		const image = getImage(img.childImageSharp.gatsbyImageData);

		if (img.name.includes(pathName)) {
			return (
				<SplideSlide key={index}>
					<GatsbyImage className="image-carousel" alt={img.name} image={image} />
				</SplideSlide>
			);
		}

		return null;
	});

	return (
		<div className="simple-image-carousel ">
			<div className={`vm-section vm-bg--${backgroundCarousel}`}>
				<Container>
					<Splide
						options={{
							rewind: true,
							perPage: 2,
							gap: '5rem',
							height: 500,

							breakpoints: {

								1140: {
									height: 400,
								},
								749: {
									perPage: 1,
									wheel: false,
									height: 200,
								},
							}

						}}
					>
						{simpleImageCarousel}
					</Splide>
				</Container>
			</div>

			<div className={`vm-bg--${backgroundContent}`}>
				<Container>
					<Content className="simple-image-carousel-content is-flex">
						<ul className="simple-image-carousel-tools is-flex is-flex-direction-column">
							<li>
								<Subtitle tag="h6"> Tools </Subtitle>
								<p>{tools}</p>
							</li>
						</ul>

						<div className="simple-image-carousel-goals is-flex is-flex-direction-column">
							<Title tag="h4">Goals</Title>
							<p>{goals}</p>
						</div>
					</Content>
				</Container>
			</div>
		</div>
	);
};
export default SimpleImageCarousel;
