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
		imageOneQuery: file(name: { eq: "service-seo" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
			}
		}
		imageTwoQuery: file(name: { eq: "vevol-media-team-image-5" }) {
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
				<title>Servicii SEO eCommerce - Vevol Media</title>
				<meta
					name="description"
					content="Coordonăm strategiile SEO cu echipa ta tehnică pentru rezultate durabile. Partener Shopify din Irlanda, specializat în optimizare eCommerce."
				/>
			</Helmet>
			<SlimHero
				heading="Coordonare SEO eCommerce"
				subheading="Lucrăm cu echipa ta de SEO pentru a implementa strategiile tehnice care contează. Nu înlocuim specialiștii tăi - îi ajutăm să funcționeze mai bine împreună."
			/>
			<SidewayText lineOne={`ecommerce`} lineTwo={'seo'} lineTwoRepeat={30} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Să construim împreună strategia ta'}
						highlightedWord={'împreună'}
						subtitle={
							'Website-ul tău are potențial nelimitat. Să lucrăm cu echipa ta de SEO pentru a transforma strategiile în implementări tehnice care funcționează.'
						}
						className="mb-4em"
					/>
					<ImageWithText
						image={<GatsbyImage image={imageOneData} alt={'SEO Coordination Services Vevol Media'} />}
						title={'Analiză și Coordonare SEO Strategică'}
						textContent={[
							<p className="mt-5">
								Analizăm împreună cu echipa ta de SEO performanța site-ului și identificăm
								oportunitățile tehnice de îmbunătățire.
							</p>,
							<p className="mt-5">
								Creăm rapoarte clare care traduc strategiile SEO în acțiuni tehnice concrete - de la
								optimizarea structurii site-ului până la implementarea celor mai recente cerințe Google.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Să coordonăm următorul proiect"
				text="Contactează-ne pentru a vedea cum putem lucra cu echipa ta de SEO"
				url="/ro/contact"
				ctaText={'Verifică disponibilitatea'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContentTitle="Cum coordonăm SEO-ul tău:"
						sidebarContentIsList
						sidebarContent={[
							{
								text: 'Implementare tehnică strategii SEO',
							},
							{
								text: 'Coordonare cu echipa ta de marketing',
							},
							{
								text: 'Audit și optimizare tehnică',
							},
							{
								text: 'Integrare SEO on-page și off-page',
							},
							{
								text: 'Optimizare tehnică avansată',
							},
							{
								text: 'Implementare link building',
							},
							{
								text: 'SEO local și geolocalizare',
							},
							{
								text: 'Optimizare eCommerce specifică',
							},
							{
								text: 'Coordonare conținut cu copywriterii',
							},
							{
								text: 'Planificare și implementare conținut',
							},
							{
								text: 'Integrare campanii SEM',
							},
						]}
						mainContent={[
							{
								title: 'De ce ai nevoie de coordonare tehnică pentru SEO?',
								text: 'Cea mai bună strategie SEO nu ajută dacă nu este implementată corect. Lucrăm cu echipa ta pentru a transforma planurile în acțiuni tehnice care funcționează.',
							},
							{
								text: 'Un site optimizat tehnic oferă o experiență mai bună utilizatorilor și ajută Google să înțeleagă mai bine conținutul tău. Rezultatul? Mai mult trafic organic fără costuri suplimentare.',
							},
							{
								text: 'Când coordonăm SEO-ul cu strategiile de marketing de conținut, construim autoritatea brandului tău și câștigăm încrederea clienților în faza de cercetare.',
							},
							{
								text: 'Secretul SEO-ului de succes este comunicarea clară între strategie și implementare. Noi ne asigurăm că nimic nu se pierde pe drum.',
							},
							{
								text: 'Să ajutăm echipa ta să comunice mai eficient cu clienții de mâine și să demonstreze Google cât de valoroasă este afacerea ta pentru publicul tău.',
							},
							{
								text: 'Vrei să îmbunătățești coordonarea între strategia SEO și implementarea tehnică?',
							},
							{
								text: 'Să vorbim!',
							},
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<ImageWithText
						alignRight
						greenLine
						image={<GatsbyImage image={imageTwoData} alt={'Technical SEO Implementation'} />}
						title={'Implementare Tehnică SEO'}
						textContent={[
							<p className="mt-5">
								SEO-ul organic depinde nu doar de conținut, ci și de modul în care site-ul tău este
								construit. Un site rapid, responsiv și bine structurat ajută strategiile tale de SEO să
								funcționeze mai bine.
							</p>,
							<p className="mt-5">
								Ne menținem la curent cu ultimele cerințe Google și implementăm soluțiile tehnice care
								ajută echipa ta de SEO să obțină rezultate mai bune.
							</p>,
							<p className="mt-5">
								Date structurate, viteză site, indexare, accesibilitate și canonicitate sunt zonele în
								care transformăm strategiile SEO în implementări tehnice. Să vorbim!
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<SplitNav
				leftTitle={'Optimizare Rate de Conversie'}
				leftUrl={'/ro/servicii-shopify/cro-optimizare-rata-conversie'}
				rightTitle={'Design Web UI/UX'}
				rightUrl={'/ro/servicii-shopify/design-web'}
			/>
		</Layout>
	);
}
