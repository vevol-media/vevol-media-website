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
				<title>Proiecte Shopify România - Portofoliu Vevol Media Magazine Online</title>
				<meta
					name="description"
					content="Descoperă proiectele noastre Shopify din România și international. Magazine online și aplicații dezvoltate de parteneri certificați cu experiență dovedită."
				/>
			</Helmet>
			<SlimHero
				heading="Proiectele Noastre Shopify"
				subheading="Portofoliu de Magazine Online și Aplicații de Succes"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Transformăm Viziuni în Succese Digitale'}
						highlightedWord={'Viziuni'}
						subtitle={'Peste 50 de proiecte realizate cu rezultate măsurabile'}
					/>
					<p className="pt-6">
						Portofoliul nostru reflectă diversitatea și complexitatea proiectelor Shopify pe care le-am
						livrat pentru clienți din România și internațional. De la magazine online simple la soluții
						enterprise complexe, fiecare proiect demonstrează experiența noastră în dezvoltarea de soluții
						eCommerce performante și scalabile.
					</p>
				</Container>
			</VevolSection>

			<VevolSection backgroundColour={'grey'} borderTop borderBottom>
				<Container>
					<ImageWithText
						image={<GatsbyImage image={imageTwoData} alt={'Magazine Online Shopify'} />}
						title={'Diversitate de Soluții pentru Toate Nevoile'}
						textContent={[
							<p className="mt-5">De la startup la enterprise - experiență în toate sectoarele</p>,
							<p className="mt-5">
								De la magazine online B2C și platforme B2B la marketplace-uri multi-vendor și magazine
								internaționale, acoperim întregul spectru al soluțiilor eCommerce. Fiecare proiect este
								adaptat nevoilor specifice ale afacerii și optimizat pentru rezultate măsurabile.
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
								text: 'Creăm designuri unice care reflectă perfect identitatea de brand și optimizează experiența utilizatorului pentru conversii maxime',
							},
							{
								title: 'Optimizare Performanță',
								text: 'Implementăm cele mai bune practici pentru viteza de încărcare și performanța optimă pe toate dispozitivele',
							},
							{
								title: 'Integrări Complexe',
								text: 'Conectăm magazinele cu sisteme externe (ERP, CRM, WMS) pentru operațiuni integrate și automatizate',
							},
							{
								title: 'SEO și Marketing',
								text: 'Optimizăm fiecare magazin pentru motoarele de căutare și implementăm strategii de marketing digital',
							},
						]}
						mainContent={[
							{
								title: 'Magazine Online Excepționale',
								text: 'Combinația perfectă între design și funcționalitate',
							},
							{
								text: 'Creăm designuri unice care reflectă perfect identitatea de brand și optimizează experiența utilizatorului pentru conversii maxime. Implementăm cele mai bune practici pentru viteza de încărcare și performanța optimă pe toate dispozitivele.',
							},
							{
								text: 'Conectăm magazinele cu sisteme externe (ERP, CRM, WMS) pentru operațiuni integrate și automatizate. Optimizăm fiecare magazin pentru motoarele de căutare și implementăm strategii de marketing digital.',
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
						title={'Aplicații Shopify Inovatoare'}
						textContent={[
							<p className="mt-5">Soluții tehnice pentru automatizarea și extinderea funcționalității</p>,
							<p className="mt-5">
								Dezvoltăm aplicații scalabile pentru distribuție prin Shopify App Store, respectând
								toate standardele de calitate. Creăm soluții personalizate pentru nevoi specifice ale
								afacerii, integrate perfect cu operațiunile existente.
							</p>,
							<p className="mt-5">
								Conectăm magazinele cu sistemele de management al resurselor întreprinderii pentru
								sincronizarea datelor. Automatizăm gestionarea stocurilor cu sincronizare în timp real
								între canale multiple.
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
								text: 'Dezvoltăm aplicații scalabile pentru distribuție prin Shopify App Store, respectând toate standardele de calitate',
							},
							{
								title: 'Aplicații Private',
								text: 'Soluții personalizate pentru nevoi specifice ale afacerii, integrate perfect cu operațiunile existente',
							},
							{
								title: 'Integrări ERP',
								text: 'Conectăm magazinele cu sistemele de management al resurselor întreprinderii pentru sincronizarea datelor',
							},
							{
								title: 'Soluții de Inventar',
								text: 'Automatizăm gestionarea stocurilor cu sincronizare în timp real între canale multiple',
							},
						]}
						mainContent={[
							{
								title: 'Ce am construit până acum',
								text: 'Am dezvoltat peste 10 aplicații private pentru clienții noștri, cu funcționalități specifice nevoilor lor: dezvoltare B2B, integrări cu ERP-uri, sincronizare de stocuri sau feed-uri de produse pentru marketplace-uri.',
							},
							{
								text: 'Avem experiență cu cele mai noi API-uri de la Shopify și putem extinde funcționalitățile de bază ale magazinului.',
							},
							{
								text: 'Lucrăm cu magazine Shopify Plus pentru extinderea funcționalității în paginile de Checkout sau în contul clientului. De asemenea, lucrăm cu xConnector la modulul de livrare în locker.',
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
