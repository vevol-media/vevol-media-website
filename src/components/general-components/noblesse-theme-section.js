import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'bloomer/lib/layout/Container';
import { GatsbyImage } from 'gatsby-plugin-image';
import VevolSection from './vm-section';
import ImageWithText from './image-text-simple';
import { useTranslations } from '../../helpers/useTranslations';

export default function NoblesseThemeSection({
	noblesseImage,
	storyIcon,
	palletIcon,
	bagIcon,
	themesButtonImage,
	externalLink,
}) {
	const { t } = useTranslations();

	return (
		<VevolSection backgroundColour={'grey'}>
			<Container>
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
					{externalLink && (
						<a
							href="https://themes.shopify.com/themes/noblesse"
							target="_blank"
							className="mt-6 themes-button"
						>
							<GatsbyImage image={themesButtonImage} alt={t('noblesseTheme.themesButton.alt')} />
						</a>
					)}

					{!externalLink && (
						<Link to="/themes/noblesse" className="mt-6 themes-button">
							<GatsbyImage image={themesButtonImage} alt={t('noblesseTheme.themesButton.alt')} />
						</Link>
					)}
				</ImageWithText>
			</Container>
		</VevolSection>
	);
}
