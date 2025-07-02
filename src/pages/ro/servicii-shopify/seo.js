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
					content="Vom oferi servicii SEO profesionale cu rezultate vizibile în primele 3 luni. ✔️ Irlanda, companie B2B. ☝ Contactați-ne cu experții noștri!"
				/>
			</Helmet>
			<SlimHero
				heading="Servicii SEO eCommerce"
				subheading="Vă duceți afacerea la următorul nivel cu ajutorul experților noștri de optimizare a motorului de căutare. Audit-uri, rapoarte, strategii și, cel mai important, rezultate sunt ceea ce oferim."
			/>
			<SidewayText lineOne={`ecommerce`} lineTwo={'seo'} lineTwoRepeat={30} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Ajungeți la înălțimi noi'}
						highlightedWord={'Înălțimi'}
						subtitle={
							'Website-ul dumneavoastră are potențial nelimitat. Să lucrăm împreună și să vă ajutați să creșteți în continuare.'
						}
						className="mb-4em"
					/>
					<ImageWithText
						image={<GatsbyImage image={imageOneData} alt={'SEO Services Vevol Media'} />}
						title={'Analiză În Profunditate a Niche-ului și Raport de Performanță'}
						textContent={[
							<p className="mt-5">
								Performăm o analiză competitivă a website-ului dumneavoastră împotriva celor mai
								relevanți concurenți din niche-ul dumneavoastră.
							</p>,
							<p className="mt-5">
								Creatăm rapoarte care includ cum site-ul dumneavoastră performă în funcție de o serie de
								metrice SEO, cum ar fi autoritatea domeniului, link-urile de intrare, clasamentul
								cheilor de căutare, traficul organic lunar, viteza site-ului, partajarea socială și
								multe altele.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Să lucrăm împreună"
				text="Contactați-ne pentru a afla mai multe despre serviciile noastre de SEO"
				url="/ro/contact"
				ctaText={'Cere disponibilitate'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContentTitle="Serviciile noastre SEO Include:"
						sidebarContentIsList
						sidebarContent={[
							{
								text: 'Căutare Chei de Căutare SEO',
							},
							{
								text: 'Analiză Competitivă',
							},
							{
								text: 'Audit și Planificare SEO',
							},
							{
								text: 'SEO On-Page și Off-Page',
							},
							{
								text: 'SEO Tehnical',
							},
							{
								text: 'Campanii de Construire de Link-uri',
							},
							{
								text: 'Servicii SEO Local',
							},
							{
								text: 'SEO eCommerce',
							},
							{
								text: 'Gestionare Conținut',
							},
							{
								text: 'Planificare și Creare Conținut',
							},
							{
								text: 'Marketing Motor de Căutare (SEM)',
							},
						]}
						mainContent={[
							{
								title: 'De ce ar trebui să investiți în servicii SEO?',
								text: 'Avem o gamă largă de tehnici SEO efective pentru a vă ajuta să dirijați traficul organic și să vă îmbunătățiți clasamentul site-ului dumneavoastră.',
							},
							{
								text: 'Un website optimizat oferă o experiență de utilizator fantastică și dirijează mai mult trafic, ceea ce înseamnă că mai mulți oameni descoperă produsele sau serviciile dumneavoastră fără costuri suplimentare.',
							},
							{
								text: 'Dacă combinați eforturile dumneavoastră de SEO cu strategii excelente de marketing de conținut, veți crește și autoritatea dumneavoastră și veți câștiga încrederea potențialilor clienți în faza de cercetare.',
							},
							{
								text: 'Ceea ce contează cel mai mult în SEO este descoperirea, comunicarea și construirea relațiilor puternice cu publicul targe. ',
							},
							{
								text: 'Așa că lasă-ne să ajutăm să comunicăm cu clienții dumneavoastră de mâine și să dovedim Google cât de valoroasă este conținutul dumneavoastră pentru publicul targe. ',
							},
							{
								text: 'Vrei să îmbunătățiți optimizarea motorului de căutare, strategia dumneavoastră de conținut sau să găseșteți cheile de căutare pe care publicul targe le caută? ',
							},
							{
								text: 'Contactați-ne astăzi!',
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
						image={<GatsbyImage image={imageTwoData} alt={'Technical SEO Audit'} />}
						title={'Technical SEO'}
						textContent={[
							<p className="mt-5">
								Optimizarea organică depinde nu numai de conținut, ci și de modul în care conținutul
								este dispus pe website-ul dumneavoastră. Un website rapid, responsiv și bine construit
								vă va ajuta să creșteți mai rapid.
							</p>,
							<p className="mt-5">
								Ne menținem la curent cu ultimele cerințe ale Google în ceea ce privește partea tehnică
								a SEO și experții noștri au cunoștințe extensive în implementarea acestora.
							</p>,
							<p className="mt-5">
								Date structurate, viteză site, indexare, accesibilitate și canonicitate sunt doar câteva
								dintre zonele în care vă putem ajuta. Contactați-ne astăzi!
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
