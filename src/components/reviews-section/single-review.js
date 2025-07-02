import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import { useTranslations } from '../../helpers/useTranslations';

export default function SingleReview({ name, role, text, clutchUrl, projectUrl, delayTime }) {
	const { t } = useTranslations();

	return (
		<Fade bottom delay={delayTime}>
			<li>
				<div className="review">
					<div className="review__left">
						<div className="review__stars">
							{Array(5)
								.fill(0)
								.map((item, index) => (
									<FontAwesomeIcon key={index} icon={faStar} />
								))}
						</div>
						<div className="review__name">
							<p>{name}</p>
							<p>{role}</p>
						</div>
					</div>
					<div className="review__text">
						<FontAwesomeIcon icon={faQuoteLeft} />
						{text}
					</div>
					<div className="review__actions">
						{projectUrl && (
							<Link to={projectUrl}>
								<strong>{t('reviews.seeProject')}</strong>
							</Link>
						)}
						{clutchUrl && (
							<a href={clutchUrl} target={'_blank'} rel="noreferrer">
								{t('reviews.readFullReview')} <FontAwesomeIcon icon={faExternalLinkAlt} />
							</a>
						)}
					</div>
				</div>
			</li>
		</Fade>
	);
}
