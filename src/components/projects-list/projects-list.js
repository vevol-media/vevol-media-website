import React from 'react';
import { Container, Title } from 'bloomer';
import './projects-list.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage, BgImage } from "gbimage-bridge"
// import BackgroundImage from 'gatsby-background-image'
import '@splidejs/splide/dist/css/splide.min.css';

export default function ProjectsList({ data }) {
	const nodes = data.allFile.nodes;

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
						height:400,

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
						nodes.map((photo, index) => {
							const bgImage = getImage(photo.childImageSharp.gatsbyImageData);
							// const bgImageConv = convertToBgImage(bgImage);
							return (
								<SplideSlide key={ index }>
									{/* <BackgroundImage
										Tag="section"
										// className={className}
										// fluid={bgImageConv}
										{...bgImage}
										preserveStackingContext
										>
										<p>{photo.name}</p>
									</BackgroundImage> */}

									<BgImage
										className='bg-image'
										image={bgImage}
									>
										<p>{photo.name}</p>
									</BgImage>
							</SplideSlide>
							)
						})
					}
				</Splide>
			</Container>
		</div>
	);
}
