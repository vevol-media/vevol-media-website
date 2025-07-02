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
import ImagesMiniBanner from '../../../components/images-mini-banner/images-mini-banner';
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
		partnersImages: allFile(filter: { relativeDirectory: { eq: "platforms" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, height: 60, quality: 100)
				}
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
	const { imageOneQuery, imageTwoQuery, bottomBannerImageQuery, partnersImages } = data;
	const imageOneData = getImage(imageOneQuery);
	const imageTwoData = getImage(imageTwoQuery);
	const bottomBannerImage = getImage(bottomBannerImageQuery);

	return (
		<Layout>
			<Helmet>
				<title>Migrare Shopify - Vevol Media</title>
				<meta
					name="description"
					content="Vom ajuta și vă vom ghida să vă mutați de la orice platformă la Shopify. Transferă produse, clienți, comenzi fără griji cu ajutorul experților noștri."
				/>
			</Helmet>
			<SlimHero
				heading="Migrare Shopify"
				subheading="Echipa noastră de parteneri Shopify experți și de încredere este dedicată să vă ajute să migrați la Shopify în mod smooth și eficient."
			/>
			<SidewayText lineOne={`shopify`} lineTwo={'migration'} lineOneRepeat={15} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Faceți-vă mutarea ușoară și fără griji'}
						highlightedWord={'Fără griji'}
						subtitle={
							'Echipa noastră de parteneri Shopify experți și de încredere este dedicată să vă ajute să migrați la Shopify în mod smooth și eficient.'
						}
						className="mb-4em"
					/>
					<ImageWithText
						image={<GatsbyImage image={imageOneData} alt={'Migrate to Shopify with Vevol Media'} />}
						title={'Înțelegem nevoile dumneavoastră'}
						textContent={[
							<p className="mt-5">
								Indiferent ce este obiectivul dumneavoastră pentru afacerea dumneavoastră, suntem aici
								ca să vă ajutăm să atingem acel obiectiv.
							</p>,
							<p className="mt-5">
								Ca parteneri Shopify, știm că abordarea strategică necesară pentru a migra sau a
								re-platforma la Shopify.
							</p>,
							<p className="mt-5">
								Fie că vă mutați de la WooCommerce, Magento sau orice altă platformă, avem expertiza
								necesară pentru a vă ajuta să faceți schimbarea cu un minimum de griji.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Să lucrăm împreună"
				text="Contactați-ne pentru a afla mai multe despre serviciile noastre de migrare Shopify"
				url="/ro/contact"
				ctaText={'Cere disponibilitate'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContentIsList
						sidebarContentTitle={'Servicii de Migrare'}
						sidebarContent={[
							{
								text: 'Analiză și Urmărire Date',
							},
							{
								text: 'Design Magazin',
							},
							{
								text: 'SEO & Optimizare URL',
							},
							{
								text: 'Integrare cu Aplicații, Unelte și Servicii de Terți',
							},
							{
								text: 'Configurare Canal de Vânzări',
							},
							{
								text: '& Multe altele',
							},
						]}
						mainContent={[
							{
								title: 'Servicii de Migrare Shopify Ușoare și Fluide',
								text: 'Mutați-vă magazinul online pe o nouă platformă poate fi intimidant, dar noi suntem aici pentru a vă asigura că migrarea se desfășoară fără griji.',
							},
							{
								text: 'Suntem experți în migrare, repackaging și redesenarea platformei dumneavoastră Shopify. Scopul nostru nu este doar să vă ajutăm să migrați ușor, ci și să vă asigurăm că magazinul dumneavoastră Shopify nou este optimizat cu precizie, obținând cele mai bune rezultate posibile pentru afacerea dumneavoastră.',
							},
							{
								text: 'Știm că succesul în eCommerce necesită multă muncă și devotament, așa că lasă-ne să gestionăm lucrurile tehnice, astfel încât să puteți concentra-vă pe ce contează - creșterea afaceții dumneavoastră.',
							},
						]}
					/>
				</Container>
			</VevolSection>
			<ImagesMiniBanner images={partnersImages.nodes} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageTwoData} alt={'De ce Shopify?'} />}
						title={'De ce Shopify?'}
						greenLine
						textContent={[
							<p className="mt-5">
								Ca parteneri Shopify, credem că Shopify este platforma optimă pentru magazinul
								dumneavoastră online. Shopify este încărcat cu aplicații și funcții incredibile pentru a
								vă duce afacerea la următorul nivel, iar scopul nostru este să ajungem acolo cu
								dumneavoastră.
							</p>,
							<p className="mt-5">
								Metodele noastre concentrate pe creștere ne asigură că afacerea dumneavoastră va primi
								atenția și îngrijirea pe care o merită pentru a se deosebi în comparație cu restul. Pe
								măsură ce Shopify continuă să evolueze, așa facem și noi, asigurându-ne că clienții
								noștri oferă servicii de ultimă oră clienților lor.
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
