import React, { useState, useEffect } from 'react';
import { Container } from 'bloomer';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import homepageServices from '../../enums/homepage-services';
import ServicePanel from './service-panel';
import './homepage-services.scss';
import HeadingBlock from '../heading-block/heading-block';
import VevolSection from '../general-components/vm-section';
import { useTranslations } from '../../helpers/useTranslations';

export default function HomepageServices() {
	const { t, currentLocale } = useTranslations();
	const [services, setServices] = useState([]);

	useEffect(() => {
		setServices(homepageServices[currentLocale]);
	}, [currentLocale]);

	return (
		<VevolSection className={'homepage-services'}>
			<Container>
				<HeadingBlock
					title={t('homepageServices.title')}
					highlightedWord={t('homepageServices.highlightedWord')}
					subtitle={t('homepageServices.subtitle')}
				/>
				<ul className="homepage-services__list">
					{services.map((service, index) => {
						return <ServicePanel key={index} {...service} delayTime={index * 100} />;
					})}
				</ul>
				<Fade delay={500}>
					<div className="has-text-centered homepage-sevices__actions">
						<p>{t('homepageServices.cta')}</p>
						<Link to="/services" className="vm-button vm-button--green">
							{t('homepageServices.ctaButton')}
						</Link>
					</div>
				</Fade>
			</Container>
		</VevolSection>
	);
}
