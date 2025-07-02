import React from 'react';
import './featured-work.scss';
import { getImageByName } from '../../helpers/helpers';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { Title } from 'bloomer/lib/elements/Title';
import { IconTopo } from '../../helpers/icons';
import { useTranslations } from '../../helpers/useTranslations';

export default function FeaturedWork({ projectsList, images, ctaText }) {
	const { t, currentLocale } = useTranslations();
	const buttonLabel = ctaText || t('common.readCaseStudy');

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
									<p>{item.description[currentLocale]}</p>
									<span className="vm-button vm-button--white">{buttonLabel}</span>
								</div>
							</div>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
