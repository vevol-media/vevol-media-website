import React, { useState, useEffect } from 'react';
import { Container } from 'bloomer';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import homepageServices from '../../enums/homepage-services';
import ServicePanel from './service-panel';
import './homepage-services.scss';
import HeadingBlock from '../heading-block/heading-block';
import VevolSection from '../general-components/vm-section';

export default function HomepageServices() {
	const [services, setServices] = useState([]);

	useEffect(() => {
		setServices(homepageServices);
	}, []);

	return (
		<VevolSection className={'homepage-services'}>
			<Container>
				<HeadingBlock title={'Take your store to the next level'} highlightedWord={'Right'} subtitle={"You deserve high quality services from people who know their stuff. We know our stuff - that's a promise!"} />
				<ul className="homepage-services__list">
					{services.map((service, index) => {
						return <ServicePanel key={index} {...service} delayTime={index * 100} />;
					})}
				</ul>
				<Fade delay={500}>
					<div className="has-text-centered homepage-sevices__actions">
						<p>Oh, and we can do much more than that!</p>
						<Link to="/services" className="vm-button vm-button--green">
							Find out more
						</Link>
					</div>
				</Fade>
			</Container>
		</VevolSection>
	);
}
