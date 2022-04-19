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

const SimpleImageCarousel = (props) => {
	const node = useStaticQuery(nodeSimpleImageCarousel).allFile.nodes;
	const pathName = props.storePath.split('/case-study/').pop();

	const simpleImageCarousel = node.map((img, index) => {
		const image = getImage(img.childImageSharp.gatsbyImageData);

		if (img.name.includes(pathName)) {
			return (
				<SplideSlide key={index}>
					<GatsbyImage className="image-carousel" alt={img.name} image={image} />
				</SplideSlide>
			);
		}
	});

	return (
		<div className="simple-image-carousel ">
			<div className="vm-section ">
				<Container>
					<Splide
						options={{
							rewind: true,
							perPage: 2,
							gap: '6rem',
							height: 300,

							breakpoints: {
								749: {
									perPage: 1,
									wheel: false,
								},
							},
						}}
					>
						{simpleImageCarousel}
					</Splide>
				</Container>
			</div>

			<div className="vm-section--white">
				<Container>
					<Content className="simple-image-carousel-content is-flex">
						<ul className="simple-image-carousel-tools is-flex is-flex-direction-column">
							<li>
								<Subtitle tag="h6"> Tools </Subtitle>
								<p>FaceBook Ads, Google Adds, Figma, Instagram</p>
							</li>
						</ul>

						<div className="simple-image-carousel-goals is-flex is-flex-direction-column">
							<Title tag="h4">Goals</Title>
							<p>
								The standard chunk of Lorem Ipsum used since the 1500s is reproduced
								below for those interested. Sections 1.10.32 and 1.10.33 from "de
								Finibus Bonorum et Malorum" by Cicero are also reproduced in their
								exact original form, accompanied by English versions from the 1914
								translation by H. Rackham.
							</p>
						</div>
					</Content>
				</Container>
			</div>
		</div>
	);
};
export default SimpleImageCarousel;
