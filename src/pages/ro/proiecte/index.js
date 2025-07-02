import Layout from '../../../components/layout/layout';
import React from 'react';
import SlimHero from '../../../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import HeadingBlock from '../../../components/heading-block/heading-block';
import VevolSection from '../../../components/general-components/vm-section';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import ImageWithText from '../../../components/general-components/image-text-simple';
import SidebarInfoText from '../../../components/general-components/sidebar-info-text';
import { Link } from 'gatsby';

export const data = graphql`
	query {
		imageOneQuery: file(name: { eq: "workshop-1" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
			}
		}
		imageTwoQuery: file(name: { eq: "shopify-store-example" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
			}
		}
	}
`;

export default function ProiectePage({ data }) {
	const imageOneData = getImage(data.imageOneQuery.childImageSharp.gatsbyImageData);
	const imageTwoData = getImage(data.imageTwoQuery.childImageSharp.gatsbyImageData);

	return (
		<Layout>
			<Helmet>
				<title>Proiecte în portofoliu - Vevol Media - Experți Shopify</title>
				<meta
					name="description"
					content="Construim magazine online cu pasiune și suntem mândri de rezultate. Vezi proiectele noastre recente."
				/>
			</Helmet>
			<SlimHero
				heading="Vezi Proiectele Noastre"
				subheading="Construim magazine online cu pasiune și suntem mândri de rezultate. Vezi proiectele noastre recente."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Portofoliul Nostru de Proiecte'}
						highlightedWord={'Portofoliul'}
						subtitle={'Descoperă cum transformăm viziunile în realitate digitală'}
					/>
				</Container>
			</VevolSection>

			<VevolSection backgroundColour={'grey'} borderTop borderBottom>
				<Container>
					<ImageWithText
						image={<GatsbyImage image={imageTwoData} alt={'Magazine Online Shopify'} />}
						title={'Magazine Online și Aplicații'}
						textContent={[
							<p className="mt-5">
								Lucrăm cu pasiune pentru a construi magazine online excepționale și aplicații Shopify
								care transformă viziunile afacerilor în realitate digitală.
							</p>,
							<p className="mt-5">
								De la magazine online personalizate la aplicații publice și private, echipa noastră de
								experți combină creativitatea cu tehnologia pentru a livra soluții care fac diferența.
							</p>,
							<p className="mt-5">
								Fiecare proiect este o oportunitate de a inova și de a crea experiențe digitale care
								inspiră și convertesc.
							</p>,
						]}
						greenLine
					/>
				</Container>
			</VevolSection>

			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Dezvoltare Teme Personalizate',
								text: 'Design-uri unice care reflectă identitatea de brand și îmbunătățesc experiența utilizatorului',
							},
							{
								title: 'Optimizare Performanță',
								text: 'Viteză și eficiență îmbunătățite pentru o experiență utilizator mai bună și conversii mai ridicate',
							},
							{
								title: 'Integrare Aplicații',
								text: 'Integrare fără eșec a aplicațiilor esențiale pentru a îmbunătăți funcționalitatea magazinului',
							},
							{
								title: 'SEO și CRO',
								text: 'Implementarea celor mai bune practici pentru vizibilitate și conversii optimizate',
							},
						]}
						mainContent={[
							{
								title: 'Construim Magazine Online Excepționale',
								text: 'Abordarea noastră pentru construirea magazinelor online se bazează pe înțelegerea profundă a nevoilor afacerii și a publicului țintă. Fiecare magazin pe care îl construim este o combinație perfectă între design atractiv și funcționalitate avansată.',
							},
							{
								text: 'Utilizăm cele mai recente tehnologii și cele mai bune practici din industrie pentru a asigura că magazinele noastre nu doar arată bine, ci și performează excepțional. De la optimizarea vitezei la implementarea strategiilor de conversie, fiecare aspect este gândit strategic.',
							},
							{
								text: (
									<Link
										to="/ro/proiecte/magazine-shopify"
										className="vm-button vm-button--green mt-5"
									>
										Vezi Magazinele Noastre
									</Link>
								),
							},
						]}
					/>
				</Container>
			</VevolSection>

			<VevolSection backgroundColour={'grey'} borderTop borderBottom>
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageOneData} alt={'Shopify Apps Development'} />}
						title={'Aplicații și Integrări Shopify'}
						textContent={[
							<p className="mt-5">
								Dezvoltăm aplicații Shopify publice și private, precum și integrări personalizate care
								extind funcționalitatea magazinelor și automatizează procesele de afaceri.
							</p>,
							<p className="mt-5">
								De la aplicații simple de gestionare a stocului la soluții complexe de integrare cu
								sisteme ERP, echipa noastră de dezvoltatori creează soluții tehnice robuste și
								scalabile.
							</p>,
							<p className="mt-5">
								Utilizăm Gadget.dev pentru aplicații complexe, asigurându-ne că livrăm soluții de
								calitate superioară în timp record.
							</p>,
						]}
						greenLine
					/>
				</Container>
			</VevolSection>

			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Aplicații Publice',
								text: 'Aplicații scalabile pentru distribuție prin Shopify App Store',
							},
							{
								title: 'Aplicații Private',
								text: 'Soluții personalizate pentru nevoi specifice ale magazinului',
							},
							{
								title: 'Integrări ERP',
								text: 'Conectare fără probleme cu sistemele de gestionare a resurselor întreprinderii',
							},
							{
								title: 'Sincronizare Stoc',
								text: 'Soluții automate pentru gestionarea inventarului în timp real',
							},
							{
								title: 'Checkout Extensions',
								text: 'Extensii personalizate pentru experiențe de checkout avansate',
							},
							{
								title: 'Shopify Functions',
								text: 'Funcții personalizate pentru extinderea funcționalității platformei',
							},
						]}
						mainContent={[
							{
								title: 'Experiență și Abordare Avansată',
								text: 'Cu ani de experiență în dezvoltarea aplicațiilor Shopify, echipa noastră înțelege complexitățile platformei și știe cum să creeze soluții care nu doar funcționează, ci și cresc cu afacerea.',
							},
							{
								text: 'Utilizăm Gadget.dev pentru aplicații complexe, o platformă care ne permite să dezvoltăm rapid aplicații robuste cu arhitectură scalabilă. Această abordare ne permite să livrăm soluții de calitate superioară în timp record, fără să compromitem performanța sau securitatea.',
							},
							{
								text: 'De la integrarea cu sisteme ERP la sincronizarea stocului în timp real, de la extensii de checkout personalizate la funcții Shopify avansate, acoperim întregul spectru al dezvoltării de aplicații pentru platforma Shopify.',
							},
							{
								text: (
									<Link
										to="/ro/proiecte/aplicatii-shopify"
										className="vm-button vm-button--green mt-5"
									>
										Vezi Aplicațiile Noastre
									</Link>
								),
							},
						]}
					/>
				</Container>
			</VevolSection>
		</Layout>
	);
}
