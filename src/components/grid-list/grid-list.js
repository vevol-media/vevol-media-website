import React from 'react';
import './grid-list.scss';
import { Link } from 'gatsby';
import { Title } from 'bloomer/lib/elements/Title';
import { BgImage } from 'gbimage-bridge';
import { getImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function GridList({ items, imagesData, className }) {
	const placeholderImageData = imagesData.filter((image) => image.name === 'placeholder');
	const placeholderImage = getImage(placeholderImageData[0].childImageSharp.gatsbyImageData);

	return (
		<ul className={`grid-list ${className}`}>
			{items.map((item, index) => {
				const projectImageData = imagesData.filter((image) => image.name === item.featuredImage);
				const projectImage =
					projectImageData.length === 0
						? placeholderImage
						: getImage(projectImageData[0].childImageSharp.gatsbyImageData);

				return (
					<li key={index} className="grid-list__item">
						{item.hasPage && (
							<Link to={item.internalUrl}>
								<BgImage image={projectImage}>
									<div className="grid-list-item__content grid-list-item__content--active">
										<Title tag="h4" isSize={4}>
											{item.name}
										</Title>
										<span className="is-flex is-align-items-center">
											Read More
											<FontAwesomeIcon icon={faArrowRight} />
										</span>
									</div>
								</BgImage>
							</Link>
						)}
						{!item.hasPage && (
							<BgImage image={projectImage}>
								<div className="grid-list-item__content">
									<Title tag="h4" isSize={4} className="mb-0">
										{item.name}
									</Title>
								</div>
							</BgImage>
						)}
					</li>
				);
			})}
		</ul>
	);
}
