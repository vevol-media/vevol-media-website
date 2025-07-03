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
		imageOneQuery: file(name: { eq: "vevol-media-team-image-2" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
			}
		}
		imageTwoQuery: file(name: { eq: "shopify-store-example" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
			}
		}
		bottomBannerImageQuery: file(name: { eq: "shopify-development-code" }) {
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
				<title>Dezvoltare Teme Shopify Personalizate România - Partener Certificat</title>
				<meta
					name="description"
					content="Dezvoltare teme Shopify personalizate în România. Design responsiv, optimizare SEO și performanță superioară pentru magazine online profesionale."
				/>
			</Helmet>
			<SlimHero
				heading="Dezvoltare Teme Shopify Personalizate"
				subheading="Design Unic și Funcționalitate Avansată pentru Afacerea Ta"
			/>
			<SidewayText lineOne={`shopify`} lineTwo={'themes'} lineOneRepeat={15} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Experiență în Dezvoltare Teme Shopify'}
						highlightedWord={'Experiență'}
						subtitle={'Parteneri certificați cu experiență dovedită'}
						className="mb-4em"
					/>
					<p className="py-6">
						Ca parteneri certificați Shopify cu peste 5 ani de experiență, dezvoltăm teme personalizate care
						combină designul atractiv cu funcționalitatea avansată. Fiecare temă este optimizată pentru
						performanță, SEO și experiența utilizatorului, adaptându-se perfect identității de brand și
						nevoilor specifice ale pieței româneşti.
					</p>
					<ImageWithText
						image={
							<GatsbyImage
								image={imageOneData}
								alt={'Shopify Development - Vevol Media'}
								loading="lazy"
							/>
						}
						title={'De Ce Să Alegi Temele Shopify'}
						textContent={[
							<p className="mt-5">Soluții tehnice superioare pentru rezultate excepționale</p>,
							<p className="mt-5">
								<strong>Design Responsiv și Mobile-First:</strong> Abordarea mobile-first asigură
								funcționalitate perfectă pe toate dispozitivele, oferind experiență optimă pentru
								utilizatorii mobili din România.
							</p>,
							<p className="mt-5">
								<strong>Optimizare SEO Integrată:</strong> Implementăm cele mai bune practici SEO direct
								în structura temei pentru a îmbunătăți poziționarea în rezultatele de căutare Google.
							</p>,
							<p className="mt-5">
								<strong>Performanță și Viteză Optimizată:</strong> Temele noastre sunt optimizate pentru
								viteza de încărcare și performanța superioară, factori cruciali pentru conversii și SEO.
							</p>,
						]}
						greenLine
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Să lucrăm împreună"
				text="Contactați-ne pentru a face o consultare gratuită cu unul dintre membrii echipei noastre acum"
				url="/ro/contact"
				ctaText={'Cere disponibilitate'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Analiză și Planificare Strategică',
								text: 'Analizăm nevoile afacerii și definim strategia de dezvoltare, asigurându-ne că soluția finală răspunde obiectivelor comerciale',
							},
							{
								title: 'Design și Prototipare',
								text: 'Creăm designul temei de la zero, folosind un design existent sau pe baza unei teme oficiale Shopify.',
							},
							{
								title: 'Dezvoltare și Testare',
								text: 'Implementăm tema folosind cele mai bune practici de cod, urmată de testare riguroasă pe toate dispozitivele și browserele',
							},
							{
								title: 'Cod Curat și Scalabil',
								text: 'Scriem cod structurat și documentat, ușor de menținut și de extins pe măsură ce afacerea crește',
							},
							{
								title: 'Integrări Seamless',
								text: 'Integrăm aplicațiile și serviciile de terțe părți fără a compromite performanța sau stabilitatea magazinului',
							},
						]}
						mainContent={[
							{
								title: 'Procesul Nostru de Dezvoltare',
								text: 'De la concept la implementare și optimizare',
							},
							{
								text: 'Implementăm tema folosind cele mai bune practici de cod, urmată de testare riguroasă pe toate dispozitivele și browserele. Creăm designul temei sau colaborăm cu echipa de design existentă. Urmărim să eficientizăm integrarea funcționalităților specifice fără a reinventa roata.',
							},
							{
								title: 'Caracteristici Tehnice Avansate',
								text: 'Tehnologie de vârf pentru performanță superioară',
							},
							{
								text: 'Scriem cod structurat și documentat, ușor de menținut și de extins pe măsură ce afacerea crește. Integrăm aplicațiile și serviciile de terțe părți fără a compromite performanța sau stabilitatea magazinului.',
							},
							{
								title: 'Angajamentul Nostru',
								text: 'Calitate garantată și suport specializat',
							},
							{
								text: 'Fiecare temă vine cu garanție de calitate și suport tehnic continuu. Echipa noastră rămâne disponibilă pentru actualizări, optimizări și rezolvarea oricăror probleme tehnice care pot apărea.',
							},
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageTwoData} alt={'Shopify Development Promise Vevol Media'} />}
						title={'Suport Continuu'}
						greenLine
						textContent={[
							<p className="mt-5">
								<strong>Oferim suport tehnic și mentenanță</strong> pentru a asigura funcționarea optimă
								a temei pe termen lung.
							</p>,
							<p className="mt-5">
								<strong>Actualizări regulate</strong> pentru a menține tema compatibilă cu cele mai
								recente versiuni Shopify și standarde de securitate.
							</p>,
							<p className="mt-5">
								<strong>Optimizări continue</strong> bazate pe feedback-ul utilizatorilor și cele mai
								recente tendințe din industrie.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<SplitNav
				leftTitle={'Dezvoltare Shopify Plus'}
				leftUrl={'/ro/servicii-shopify/shopify-plus'}
				rightTitle={'Dezvoltare Aplicații Shopify'}
				rightUrl={'/ro/servicii-shopify/aplicatii-si-integrari'}
			/>
		</Layout>
	);
}
