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
				<title>Shopify Plus România - Coordonare Enterprise eCommerce | Vevol Media</title>
				<meta
					name="description"
					content="Coordonăm implementarea Shopify Plus pentru companii enterprise în România. Gestionăm comunicarea cu toți furnizorii de servicii pentru soluții scalabile și personalizate."
				/>
			</Helmet>
			<SlimHero
				heading="Shopify Plus România"
				subheading="Coordonăm implementarea enterprise pentru companii în creștere rapidă"
			/>
			<SidewayText lineOne={`shopify`} lineTwo={'plus'} lineOneRepeat={15} lineTwoRepeat={25} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Coordonăm implementarea enterprise'}
						highlightedWord={'Coordonăm'}
						subtitle={
							'Gestionăm comunicarea cu toți furnizorii de servicii pentru soluții Shopify Plus scalabile'
						}
						className="mb-4em"
					/>
					<p className="py-6">
						Ca parteneri Shopify Plus, coordonăm implementarea soluțiilor enterprise pentru companii românești și internaționale. Gestionăm comunicarea cu echipele de ERP, CRM, marketing și alte servicii specializate pentru a asigura o implementare fluidă și eficientă.
					</p>
					<ImageWithText
						image={
							<GatsbyImage
								image={imageOneData}
								alt={'Coordonare Shopify Plus - Vevol Media'}
								loading="lazy"
							/>
						}
						title={'Coordonăm ecosistemul enterprise'}
						textContent={[
							<p className="mt-5">
								Implementarea Shopify Plus implică coordonarea cu multiple echipe și sisteme
							</p>,
							<p className="mt-5">
								<strong>Coordonare cu Echipele ERP:</strong> Gestionăm comunicarea cu furnizorii de sisteme ERP pentru integrări complexe, asigurându-ne că toate datele fluctuează corect între sisteme.
							</p>,
							<p className="mt-5">
								<strong>Integrare cu Serviciile de Marketing:</strong> Coordonăm cu echipele de marketing pentru configurarea campaniilor, tracking-ului și automatizărilor în Shopify Plus.
							</p>,
							<p className="mt-5">
								<strong>Gestionarea Furnizorilor de Servicii:</strong> Asigurăm că toate integrările cu sisteme de plată, logistică și contabilitate funcționează perfect împreună.
							</p>,
						]}
						greenLine
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Să coordonăm implementarea împreună"
				text="Contactați-ne pentru a discuta cum putem coordona implementarea Shopify Plus cu echipa dumneavoastră"
				url="/ro/contact"
				ctaText={'Cere discuție'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Coordonare Implementare',
								text: 'Gestionăm comunicarea cu toți furnizorii de servicii pentru o implementare fluidă Shopify Plus',
							},
							{
								title: 'Integrări Enterprise',
								text: 'Coordonăm conectarea cu sisteme ERP, CRM, WMS și alte soluții enterprise pentru operațiuni integrate',
							},
							{
								title: 'Soluții B2B Coordonate',
								text: 'Gestionăm implementarea funcționalităților B2B în coordonare cu echipa de vânzări și serviciile de contabilitate',
							},
							{
								title: 'Expansiune Internațională',
								text: 'Coordonăm configurarea multi-magazin cu echipele de marketing internațional și serviciile de localizare',
							},
						]}
						mainContent={[
							{
								title: 'Coordonare Completă Enterprise',
								text: 'Gestionăm complexitatea implementării pentru voi',
							},
							{
								text: 'Implementarea Shopify Plus implică coordonarea cu multiple echipe și sisteme. Suntem puntea de legătură care asigură că toate integrările funcționează împreună, de la sistemele ERP până la serviciile de marketing și contabilitate.',
							},
							{
								title: 'Procesul Nostru de Coordonare',
								text: 'De la analiză la lansare și optimizare continuă',
							},
							{
								text: 'Începem prin a înțelege ecosistemul dumneavoastră de furnizori de servicii și definim planul de coordonare. Implementăm soluția Shopify Plus în coordonare cu toate echipele relevante, asigurându-ne că fiecare integrare este testată și optimizată.',
							},
							{
								text: 'Gestionăm comunicarea între toate sistemele și echipele pentru o lansare fără probleme.',
							},
							{
								title: 'Suport Continuu de Coordonare',
								text: 'Echipă dedicată pentru gestionarea relațiilor cu furnizorii',
							},
							{
								text: 'Oferim suport continuu pentru coordonarea cu toți furnizorii de servicii. Echipa noastră rămâne punctul central de contact pentru orice probleme de integrare, optimizări sau dezvoltări noi pe măsură ce afacerea evoluează.',
							},
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<ImageWithText
						alignRight
						image={
							<GatsbyImage image={imageTwoData} alt={'Coordonare Enterprise Shopify Plus'} />
						}
						title={'Suport Continuu de Coordonare'}
						greenLine
						textContent={[
							<p className="mt-5">
								<strong>Gestionare comunicare</strong> cu toți furnizorii de servicii pentru probleme critice și optimizări.
							</p>,
							<p className="mt-5">
								<strong>Coordonare proactivă</strong> pentru a preveni problemele de integrare înainte să afecteze operațiunile.
							</p>,
							<p className="mt-5">
								<strong>Echipă dedicată</strong> pentru gestionarea relațiilor cu toți furnizorii și optimizarea continuă a integrărilor.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<SplitNav
				leftTitle={'Aplicații și Integrări'}
				leftUrl={'/ro/servicii-shopify/aplicatii-si-integrari'}
				rightTitle={'Migrare Shopify'}
				rightUrl={'/ro/servicii-shopify/migrari'}
			/>
		</Layout>
	);
}
