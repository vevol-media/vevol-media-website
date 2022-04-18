import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Container, Title } from 'bloomer';
import './projects-list.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default function ProjectsList({ data }) {
	const nodes = data.allFile.nodes;
	// console.log('projList', nodes)

	return (
		<div className="projects-list vm-section">
			<Container>
				<div className="heading-block">
					<Title tag="h2" isSize={2}>
						Our previously <span>successful</span> projects
					</Title>
					<p>Proven track record of our hard work.</p>
				</div>

				<Splide
					className="projects__list"
					options={{
                        rewind: true,
						perPage: 4,
						gap: '1rem',

						breakpoints: {
							1140: {
								perPage: 3,
								wheel: false,
							},
							749: {
								perPage: 2,
								wheel: false,
							},
							480: {
								perPage: 1,
								wheel: false,
								gap: 0,
							},
						},
					}}
				>
					{
						nodes.map((photo, index) => (
							<SplideSlide key={ index }>
								<GatsbyImage
								image={photo.childImageSharp.gatsbyImageData}
								alt="vevol media case study"
								layout="fullWidth"
								/>
							</SplideSlide>
						))
					}
				</Splide>
			</Container>
		</div>
	);
}
