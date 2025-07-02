import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'bloomer/lib/layout/Container';
import { GatsbyImage } from 'gatsby-plugin-image';
import VevolSection from './vm-section';
import ImageWithText from './image-text-simple';
import { useTranslations } from '../../helpers/useTranslations';

export default function NoblesseThemeSection({ noblesseImage, storyIcon, palletIcon, bagIcon, themesButtonImage }) {
	const { t, currentLocale } = useTranslations();

	return (
		<VevolSection backgroundColour={'grey'}>
			<Container className="noblesse-theme-section">
				<ImageWithText
					alignRight
					image={<GatsbyImage image={noblesseImage} alt={'Official Shopify Theme created by Vevol Media'} />}
					title={t('noblesseTheme.title')}
					textContent={[
						<p className="mt-5">{t('noblesseTheme.description')}</p>,
						<p className="mt-5">{t('noblesseTheme.description2')}</p>,
					]}
					numbersContent={[
						{
							image: <GatsbyImage image={storyIcon} alt="Star icon" style={{ width: 30, height: 30 }} />,
							subtitle: t('noblesseTheme.numbersContent.0.subtitle'),
						},
						{
							image: (
								<GatsbyImage image={palletIcon} alt="Pallet icon" style={{ width: 30, height: 30 }} />
							),
							subtitle: t('noblesseTheme.numbersContent.1.subtitle'),
						},
						{
							image: <GatsbyImage image={bagIcon} alt="Bag icon" style={{ width: 30, height: 30 }} />,
							subtitle: t('noblesseTheme.numbersContent.2.subtitle'),
						},
					]}
				>
					<div className="noblesse-theme-section__buttons">
						<Link
							to={currentLocale === 'ro' ? '/ro/teme/noblesse' : '/themes/noblesse'}
							className="vm-button vm-button--black-transparent"
						>
							{t('noblesseTheme.themesButton.text')}
						</Link>
						<a
							href="https://themes.shopify.com/themes/noblesse"
							target="_blank"
							rel="noopener noreferrer"
							className="themes-button"
						>
							<GatsbyImage image={themesButtonImage} alt={t('noblesseTheme.themesButton.alt')} />
						</a>
					</div>
				</ImageWithText>
			</Container>
		</VevolSection>
	);
}
