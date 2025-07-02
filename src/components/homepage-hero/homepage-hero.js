import React from 'react';
import { Container, Title } from 'bloomer';
import { Link } from 'gatsby';
import ClutchWidget from './clutch-widget';
import Blob from '../blob/blob';
import './homepage-hero.scss';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslations } from '../../helpers/useTranslations';

export default function HomepageHero({ imageBottom }) {
	const { t, currentLocale } = useTranslations();

	return (
		<div className="homepage-hero">
			<Blob className={'homepage-hero__blob homepage-hero__blob--top'} size={350} translate={120} duration={15} />
			{/* <Blob className={'homepage-hero__blob'} size={500} translate={250} duration={35} /> */}
			<GatsbyImage
				image={imageBottom}
				className="homepage-hero__bottom-image"
				alt={'Vevol Media Shopify Experts'}
			/>
			<Container>
				<div className="homepage-hero__content">
					<p>{t('homepage.hero.subtitle')}</p>
					<Title className={'homepage-hero__title'}>{t('homepage.hero.title')}</Title>
					<p>{t('homepage.hero.description')}</p>
					<Link
						to={currentLocale === 'ro' ? '/ro/contact' : '/contact'}
						className="vm-button vm-button--white vm-button--big"
					>
						{t('homepage.hero.cta')}
					</Link>
					<ClutchWidget />
				</div>
			</Container>
		</div>
	);
}
