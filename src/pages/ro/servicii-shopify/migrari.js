import React from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../../components/layout/layout';
import SlimHero from '../../../components/slim-hero/slim-hero';
import SidewayText from '../../../components/sideways-text-banner/sideway-text-banner';
import VevolSection from '../../../components/general-components/vm-section';
import { Container } from 'bloomer';
import HeadingBlock from '../../../components/heading-block/heading-block';
import ImageWithText from '../../../components/general-components/image-text-simple';
import BottomCTA from '../../../components/bottom-cta/bottom-cta';
import SidebarInfoText from '../../../components/general-components/sidebar-info-text';
import SplitNav from '../../../components/general-components/split-nav';
import { Helmet } from 'react-helmet';

export const data = graphql`
	query {
		imageOneQuery: file(name: { eq: "vevol-media-shopify" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
			}
		}
		imageTwoQuery: file(name: { eq: "vevol-media-team-shopify" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
			}
		}
		bottomBannerImageQuery: file(name: { eq: "bottom-banner" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
	}
`;

export default function PageSingleService({ data }) {
	const { imageOneQuery, imageTwoQuery, bottomBannerImageQuery } = data;
	const imageOneData = getImage(imageOneQuery);
	const imageTwoData = getImage(imageTwoQuery);
	const bottomBannerImage = getImage(bottomBannerImageQuery);

	return (
		<Layout>
			<Helmet>
				<title>Migrare Magazin Online la Shopify - Partener Shopify România | Vevol Media</title>
				<meta
					name="description"
					content="Servicii de migrare Shopify în România. Coordonăm întreaga migrare de la WooCommerce, Magento sau alte platforme la Shopify, gestionând comunicarea cu toți furnizorii de servicii."
				/>
			</Helmet>
			<SlimHero
				heading="Migrare Magazin Online la Shopify"
				subheading="Suntem partenerul Shopify care coordonează întreaga migrare, gestionând comunicarea cu echipa dumneavoastră de SEO, marketing și alte servicii specializate."
			/>
			<SidewayText lineOne={`shopify`} lineTwo={'migration'} lineOneRepeat={15} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Coordonăm migrarea, voi vă concentrați pe afacere'}
						highlightedWord={'Coordonăm'}
						subtitle={
							'Ca parteneri Shopify în România, gestionăm partea tehnică a migrării în timp ce coordonăm cu echipa dumneavoastră de specialiști pentru un proces fluid și eficient.'
						}
						className="mb-4em"
					/>
					<ImageWithText
						image={<GatsbyImage image={imageOneData} alt={'Coordonare migrare Shopify cu Vevol Media'} />}
						title={'Vorbim atât limba tehnică, cât și cea de business'}
						textContent={[
							<p className="mt-5">
								Înțelegem că migrarea unui magazin online implică mai multe echipe - SEO, marketing,
								contabilitate, ERP. Suntem puntea de legătură care asigură că toate acestea funcționează
								împreună.
							</p>,
							<p className="mt-5">
								Ca parteneri Shopify, nu înlocuim specialiștii dumneavoastră - coordonăm cu ei.
								Gestionăm comunicarea tehnică în timp ce ei se concentrează pe expertiza lor.
							</p>,
							<p className="mt-5">
								Fie că migrați de la WooCommerce, Magento, VTEX sau orice altă platformă, asigurăm că
								toate integrările și comunicarea între sisteme funcționează perfect.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Să coordonăm migrarea împreună"
				text="Contactați-ne pentru a discuta cum putem coordona migrarea cu echipa dumneavoastră de specialiști"
				url="/ro/contact"
				ctaText={'Cere consultație'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContentIsList
						sidebarContentTitle={'Coordonare Tehnică Migrare'}
						sidebarContent={[
							{
								text: 'Analiză și Planificare Migrare',
							},
							{
								text: 'Coordonare cu Echipa SEO',
							},
							{
								text: 'Integrare Sisteme Existente',
							},
							{
								text: 'Gestionare Comunicare între Furnizori',
							},
							{
								text: 'Configurare și Testare',
							},
							{
								text: 'Suport Post-Migrare',
							},
						]}
						mainContent={[
							{
								title: 'Coordonare Completă a Procesului de Migrare',
								text: 'Migrarea unui magazin online nu este doar o problemă tehnică - este o coordonare complexă între multiple echipe și sisteme. Suntem aici să gestionăm această coordonare.',
							},
							{
								text: 'Procesul nostru începe cu înțelegerea ecosistemului dumneavoastră de furnizori de servicii. Coordonăm cu echipa de SEO pentru păstrarea rankingurilor, cu echipa de marketing pentru continuitatea campaniilor, și cu echipa de contabilitate pentru integrările ERP necesare.',
							},
							{
								text: 'Nu doar că migrăm datele - asigurăm că toate integrările funcționează, că comunicarea între sisteme este fluidă, și că echipa dumneavoastră poate continua să lucreze fără întreruperi. Vă permitem să vă concentrați pe creșterea afacerii în timp ce gestionăm complexitatea tehnică.',
							},
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'} borderTop>
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageTwoData} alt={'De ce Shopify pentru coordonare?'} />}
						title={'De ce Shopify pentru coordonare?'}
						greenLine
						textContent={[
							<p className="mt-5">
								Shopify oferă ecosistemul cel mai robust pentru coordonarea între multiple servicii și
								integrări. Ca parteneri Shopify, avem acces la API-uri și unelte care ne permit să
								coordonăm eficient între toate sistemele dumneavoastră de business.
							</p>,
							<p className="mt-5">
								Platforma Shopify este construită pentru a funcționa cu ecosistemul larg de furnizori de
								servicii. Fie că aveți nevoie de integrare cu sisteme de contabilitate românești,
								gateway-uri de plată locale, sau servicii de marketing internaționale, Shopify oferă
								flexibilitatea necesară pentru coordonarea eficientă a tuturor acestor servicii.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<SplitNav
				leftTitle={'Dezvoltare Shopify'}
				leftUrl={'/ro/servicii-shopify/dezvoltare-teme'}
				rightTitle={'Aplicații și Integrări'}
				rightUrl={'/ro/servicii-shopify/aplicatii-si-integrari'}
			/>
		</Layout>
	);
}
