import React, { useState, useEffect } from 'react';
import { Container, Title } from 'bloomer';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import homepageServices from '../../enums/homepage-services';
import ServicePanel from './service-panel';
import './homepage-services.scss';

export default function HomepageServices() {
	const [services, setServices] = useState([]);

	useEffect(() => {
		setServices(homepageServices);
	}, []);

	return (
		<div className="homepage-services vm-section">
			<Container>
				<div className="heading-block">
					<Title tag="h2" isSize={2}>
						Experience the <span>right</span> way
					</Title>
					<p>
						You deserve quality digital services from people who know their stuff. We do that. That's our
						promise.
					</p>
				</div>

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
