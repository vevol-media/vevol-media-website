import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

export default function ImagesMiniBanner({ images }) {
	const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
	const itemWidth = windowWidth.innerWidth < 769 ? 150 : 350;
	const animation = keyframes`
		0% {
        	transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-${itemWidth}px * ${images.length}));
		}
	`;

	const StyledList = styled.ul`
		animation: ${animation} ${images.length * 3}s linear infinite;
	`;

	return (
		<div className="images-mini-banner">
			<div className="images-mini-banner__wrapper">
				<StyledList>
					{images.map((imgData, index) => {
						const image = getImage(imgData.childImageSharp.gatsbyImageData);

						return (
							<li key={index}>
								<GatsbyImage
									image={image}
									alt="Vevol Media Partner"
									className="wrapper__image"
									layout="full-width"
								/>
							</li>
						);
					})}
					{images.map((imgData, index) => {
						const image = getImage(imgData.childImageSharp.gatsbyImageData);

						return (
							<li key={index}>
								<GatsbyImage
									image={image}
									alt="Vevol Media Partner"
									className="wrapper__image"
									layout="full-width"
								/>
							</li>
						);
					})}
				</StyledList>
			</div>
		</div>
	);
}
