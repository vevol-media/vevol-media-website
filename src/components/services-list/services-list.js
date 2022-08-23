import React from 'react';
import { Container, Title } from 'bloomer';
import { GatsbyImage } from 'gatsby-plugin-image';
import services from '../../enums/services';
import './services-list.scss';
import { getImageByName } from '../../helpers/helpers';
import { getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export default function ServicesList({ data, backgroundWhite }) {
	const { servicesIcons, topoPattern } = data;
	const patternImage = getImage(topoPattern.nodes[0].childImageSharp.gatsbyImageData);

	return (
		<div className={`services-list vm-section ${backgroundWhite ? 'vm-bg--white' : ''}`}>
			<Container>
				<ul>
					{services.map((service, index) => (
						<li key={index}>
							<GatsbyImage
								className="service__background-image"
								image={patternImage}
								alt={'Margee Case Study - Vevol Media'}
							/>
							<Link to={service.url}>
								<div className="service__icon">
									<GatsbyImage
										image={getImageByName(servicesIcons.nodes, service.image)}
										alt={'Margee Case Study - Vevol Media'}
									/>
								</div>
								<Title>{service.title}</Title>
								<p>{service.intro}</p>
								<span className='vm-button vm-button--transparent-white'>Read more</span>
							</Link>
						</li>
					))}
				</ul>
			</Container>
		</div>
	);
}
