import React from 'react';
import './grid-list.scss';
import { Link } from 'gatsby';
import { Title } from 'bloomer/lib/elements/Title';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from '../../helpers/useTranslations';

export default function GridList({ items, imagesData, className }) {
	const placeholderImageData = imagesData.filter((image) => image.name === 'placeholder');
	const placeholderImage = getImage(placeholderImageData[0].childImageSharp.gatsbyImageData);
	const { t } = useTranslations();

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
						<GatsbyImage image={projectImage} alt={item.name} className="grid-list-item__image" />
						<div className="grid-list-item__content">
							<Title tag="h4" isSize={4} className="mb-0">
								{item.name}
							</Title>
							{item.hasPage && (
								<Link to={item.internalUrl}>
									<span className="is-flex is-align-items-center">
										{t('common.readCaseStudy')}
										<FontAwesomeIcon icon={faArrowRight} />
									</span>
								</Link>
							)}
							{!item.hasPage && item.externalUrl && (
								<a
									href={item.externalUrl}
									target="_blank"
									rel="noopener noreferrer"
									title={t('common.checkLiveSite')}
								>
									<span className="is-flex is-align-items-center">
										{t('common.checkLiveSite')}
										<FontAwesomeIcon icon={faExternalLinkAlt} />
									</span>
								</a>
							)}
						</div>
					</li>
				);
			})}
		</ul>
	);
}
