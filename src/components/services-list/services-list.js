import React from 'react';
import { Title } from 'bloomer';
import { GatsbyImage } from 'gatsby-plugin-image';
import './services-list.scss';
import { getImageByName } from '../../helpers/helpers';
import { Link } from 'gatsby';
import { IconTopo } from '../../helpers/icons';

export default function ServicesList({ imageData, services, backgroundWhite, topMargin, className, linkText }) {
	return (
		<div className={`services-list ${backgroundWhite ? 'vm-bg--white' : ''} ${topMargin && 'mt-6'} ${className}`}>
			<ul>
				{services.map((service, index) => (
					<li key={index}>
						<IconTopo className={'service__background-image'} />
						<Link to={service.url}>
							<div className="service__icon">
								<GatsbyImage
									image={getImageByName(imageData, service.image)}
									alt={`${service.title} - Vevol Media`}
								/>
							</div>
							<Title tag="h3" isSize={3}>
								{service.title}
							</Title>
							<p>{service.intro}</p>
							{linkText && <span className="vm-button vm-button--transparent-white">{linkText}</span>}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
