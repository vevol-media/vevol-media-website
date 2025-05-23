import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './apps-section.scss';
import { Title } from 'bloomer/lib/elements/Title';
import { Link } from 'gatsby';

export default function AppsSection({ apps }) {
	const getTags = (app) => {
		const tags = [];

		if (app.isVevolApp) tags.push('Vevol');
		if (!app.isVevolApp) tags.push('External');
		if (app.isPublic) tags.push('Public');
		if (!app.isPublic) tags.push('Custom');

		return tags;
	};

	return (
		<div className="apps-section" id="apps-section">
			<div className="apps-section__list">
				{apps.map((app, index) => {
					const tags = getTags(app);
					const linkTo = app.caseStudy ? app.internalUrl : '/contact';

					return (
						<Link className="apps-section__item" key={index} to={linkTo}>
							{app.featuredImage && (
								<GatsbyImage
									image={getImage(app.featuredImage)}
									alt={`${app.name} - Vevol Media App`}
									objectFit={'contain'}
								/>
							)}
							<div className="apps-section__bottom">
								<div className="apps-section__tags">
									{tags.map((tag) => (
										<span
											className={`apps-section__tag apps-section__tag--${tag.toLowerCase()}`}
											key={tag}
										>
											{tag}
										</span>
									))}
								</div>
								<Title tag="h3" isSize={4}>
									{app.name}
								</Title>
								<div className="app-intro">
									<p>{app.description}</p>
								</div>
								<span className="vm-button vm-button--black-transparent vm-button--small">
									More Info
								</span>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
