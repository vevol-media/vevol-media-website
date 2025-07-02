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
			<SlimHero
				heading="Dezvoltare Teme Personalizate Shopify"
				subheading="Noi creăm magazine Shopify robuste și scalabile, adaptate nevoilor dumneavoastră de afacere. Echipa noastră de experți ne asigură că magazinul dumneavoastră nu este doar vizual atractiv, ci și optimizat pentru performanță și experiență utilizator."
			/>
			<SidewayText lineOne={`shopify`} lineTwo={'development'} lineOneRepeat={15} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Soluții Expert de Dezvoltare Shopify'}
						highlightedWord={'Shopify'}
						subtitle={
							'Cu peste patru ani ca parteneri Shopify de încredere, livrăm soluții fiabile și flexibile care stimulează creșterea afacerii. Abordarea noastră combină excelență tehnică cu gândire strategică.'
						}
						className="mb-4em"
					/>
					<ImageWithText
						image={
							<GatsbyImage
								image={imageOneData}
								alt={'Shopify Development - Vevol Media'}
								loading="lazy"
							/>
						}
						title={'Soluții Personalizate pentru Afacerile Dvs.'}
						textContent={[
							<p className="mt-5">
								De la dezvoltarea temelor personalizate la optimizarea performanței, gestionăm fiecare
								aspect al magazinului dumneavoastră Shopify cu atenție deosebită.
							</p>,
							<p className="mt-5">
								Abordarea noastră mobil-primul ne asigură că magazinul dumneavoastră oferă o experiență
								de cumpărare excelentă pe toate dispozitivele, ajutându-vă să atingeți mai mulți
								clienți.
							</p>,
							<p className="mt-5">
								Implementăm cele mai bune practici SEO și optimizăm performanța pentru a conduce
								traficul organic și să creștem conversia.
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
								title: 'Dezvoltare Teme Personalizate',
								text: 'Design-uri unice care reflectă identitatea dumneavoastră de brand și îmbunătățesc experiența utilizatorului',
							},
							{
								title: 'Design Responsiv',
								text: 'Abordare mobil-primul care asigură funcționalitate fără eșec pe toate dispozitivele',
							},
							{
								title: 'Integrare Aplicații',
								text: 'Integrare fără eșec a aplicațiilor esențiale pentru a îmbunătăți funcționalitatea magazinului',
							},
							{
								title: 'Optimizare SEO',
								text: 'Implementarea celor mai bune practici pentru a îmbunătăți vizibilitatea și a conduce traficul organic',
							},
							{
								title: 'Optimizare Performanță',
								text: 'Îmbunătățiri ale vitezei și a eficienței pentru o experiență utilizator mai bună și conversii mai ridicate',
							},
						]}
						mainContent={[
							{
								title: 'Abordare dezvoltare integrală',
								text: 'Specializăm în crearea magazinelor Shopify care combină atractivitatea vizuală cu excelență tehnică, asigurându-ne o experiență de cumpărare fără eșec pentru clienții dumneavoastră.',
							},
							{
								text: 'Fiecare proiect începe cu o planificare și strategie detaliată, asigurându-ne că soluțiile noastre se aliniază perfect obiectivelor și cerințelor afacerii dumneavoastră.',
							},
							{
								title: 'Soluții Personalizate & Integrare',
								text: 'Dezvoltarea temelor personalizate se concentrează pe crearea de design-uri unice care reflectă identitatea dumneavoastră de brand, menținând în același timp performanța optimă.',
							},
							{
								text: `Integrăm cu grijă aplicațiile Shopify esențiale și alte instrumente de terță parte pentru a îmbunătăți funcționalitatea magazinului dumneavoastră fără a compromite performanța.`,
							},
							{
								title: 'Optimizare & Performanță',
								text: 'Procesul nostru de dezvoltare include o optimizare integrală pentru viteză, SEO și experiență utilizator, ajutându-ne să obținem rezultate mai bune.',
							},
							{
								text: 'Implementăm principiile de design responsiv pentru a asigura că magazinul dumneavoastră funcționează fără eșec pe toate dispozitivele și dimensiunile ecranului.',
							},
							{
								title: 'Asigurare Calitate',
								text: 'Testări riguroase pe toate dispozitivele și browsere asigură funcționarea perfectă a magazinului dumneavoastră în toate scenariile.',
							},
							{
								title: 'Suport Continuu',
								text: 'Furnizăm suport și mentenanță continuă pentru a menține magazinul dumneavoastră în funcțiune eficient, vă ajutând să vă concentrați pe creșterea afacerii dumneavoastră.',
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
						title={'Promisiunea noastră de dezvoltare'}
						greenLine
						textContent={[
							<p className="mt-5">
								<strong>Calitatea primulă.</strong> Construim soluții scalabile, flexibile și
								reutilizabile folosind cea mai performantă tehnologie și abordări.
							</p>,
							<p className="mt-5">
								<strong>Dezvoltare Future-Proof.</strong> Codul nostru este scris pentru a rezista
								testelor timpului, reducând nevoia de reconstrucții frecvente și asigurând valoare pe
								termen lung.
							</p>,
							<p className="mt-5">
								<strong>Soluții eficiente din punct de vedere al costurilor.</strong> Abordarea noastră
								de dezvoltare ajută la reducerea costurilor de mentenanță în curs de desfășurare,
								oferindu-vă flexibilitatea de a face actualizări viitoare ușor.
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
