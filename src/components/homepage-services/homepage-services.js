import React, { useState, useEffect } from 'react';
import { Container } from 'bloomer';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import homepageServices from '../../enums/homepage-services';
import ServicePanel from './service-panel';
import './homepage-services.scss';
import HeadingBlock from '../heading-block/heading-block';

export default function HomepageServices() {
	const [services, setServices] = useState([]);

	useEffect(() => {
		setServices(homepageServices);
	}, []);

	return (
		<div className="homepage-services vm-section">
			<Container>
				<HeadingBlock
					title={'Experience the right way'}
					highlightedWord={'right'}
					subtitle={
						"You deserve quality digital services from people who know their stuff. We do that. That's our promise."
					}
				/>
				<ul className="homepage-services__list">
					{services.map((service, index) => {
						return <ServicePanel key={index} {...service} delayTime={index * 250} />;
					})}
				</ul>
				<Fade delay={1250}>
					<div className="has-text-centered homepage-sevices__actions">
						<p>We can do much more than that</p>
						<Link to="/" className="vm-button vm-button--green">
							Find out more
						</Link>
					</div>
				</Fade>
			</Container>
		</div>
	);
}
