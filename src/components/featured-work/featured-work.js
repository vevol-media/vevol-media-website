import React from 'react';
import './featured-work.scss';
import { getImageByName } from '../../helpers/helpers';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { Title } from 'bloomer/lib/elements/Title';
import { IconTopo } from '../../helpers/icons';

export default function FeaturedWork({ projectsList, images }) {
	return (
		<ul className="featured-work">
			{projectsList.map((item, index) => {
				return (
					<li key={index}>
						<Link to={item.internalUrl}>
							<GatsbyImage
								image={getImageByName(images, item.featuredImage)}
								alt={`${item.name} Case Study`}
							/>
							<div className="featured-work__item-hover">
								<IconTopo className="item-hover__pattern" />
							</div>
							<div className="featured-work__item-hover-text">
								<div className="item-hover-text__content">
									<Title tag="h3" isSize={2}>
										{item.name}
									</Title>
									<p>{item.description}</p>
									<span className="vm-button vm-button--white">Read Case Study</span>
								</div>
							</div>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
