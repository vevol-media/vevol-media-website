import React from 'react';
import { Container, Title } from 'bloomer';
import './projects-list.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import storesList from '../../enums/stores';
import '@splidejs/splide/dist/css/splide.min.css';
import { Background } from 'react-parallax';

export default function ProjectsList({data, background}) {
	const nodes = data.allFile.nodes;

	const splides = nodes.map((img, index) => {
		const bgImage = getImage(img.childImageSharp.gatsbyImageData);

		return storesList.map((store, index) => {
			if (store.photoBanner === img.name) {
				return (
					<SplideSlide key={index}>
						<BgImage className="bg-image" image={bgImage}>
							<div className="ml-5 mb-5">
								<p className="pb-3">{store.name}</p>
								<a href={store.url} target="_blank" rel="noopener noreferrer">
									View Case Study
									<span className="ml-1">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={10}
											height={10}
											viewBox="0 0 512 512"
										>
											<path d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z" />
										</svg>
									</span>
								</a>
							</div>
						</BgImage>
					</SplideSlide>
				);
			}

			return null;
		});
	});

	return (
		<div className={`projects-list vm-section ${background}`}>
			<Container>
				<div className="heading-block">
					<Title tag="h2" isSize={2}>
						Our previously <span>successful</span> projects
					</Title>
					<p>Proven track record of our hard work.</p>
				</div>

				<Splide
					options={{
						rewind: true,
						perPage: 4,
						gap: '1.5rem',
						height: 400,

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
					{splides}
				</Splide>
			</Container>
		</div>
	);
}
