import React from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout/layout';
import SlimHero from '../../components/slim-hero/slim-hero';
import VevolSection from '../../components/general-components/vm-section';
import { Container } from 'bloomer';
import ImageWithText from '../../components/general-components/image-text-simple';
import SidebarInfoText from '../../components/general-components/sidebar-info-text';
import SimpleImageCarousel from '../../components/simple-image-carousel/simple-image-carousel';
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
		event2024Images: allFile(filter: { relativeDirectory: { eq: "event/2024" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, width: 800, quality: 90)
				}
			}
		}
		event2025Images: allFile(filter: { relativeDirectory: { eq: "event/2025" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, width: 800, quality: 90)
				}
			}
		}
	}
`;

export default function ShopifyRomaniaPage({ data }) {
	const imageOneData = getImage(data.imageOneQuery.childImageSharp.gatsbyImageData);
	const imageTwoData = getImage(data.imageTwoQuery.childImageSharp.gatsbyImageData);
	const event2024Images = data.event2024Images.nodes;
	const event2025Images = data.event2025Images.nodes;

	return (
		<Layout headerBg="white">
			<Helmet>
				<title>Shopify România - Vevol Media | Experți Shopify în România | Meetup-uri și Comunitate</title>
				<meta
					name="description"
					content="Vevol Media este principalul promotor Shopify în România. Organizăm meetup-uri, conectăm comercianți români și construim comunitatea eCommerce. Experți Shopify în România."
				/>
				<meta
					name="keywords"
					content="Shopify România, experți Shopify România, meetup Shopify România, comunitate eCommerce România, dezvoltare Shopify România, agenție Shopify România, Shopify Plus România, migrare Shopify România"
				/>
			</Helmet>

			<SlimHero
				heading="Vevol Media - Principalul Promotor Shopify în România"
				subheading="Construim comunitatea eCommerce românească prin meetup-uri, conexiuni și experiența noastră în Shopify"
				backgroundWhite
			/>

			<VevolSection backgroundColour={'grey'} borderTop borderBottom>
				<Container>
					<ImageWithText
						image={<GatsbyImage image={imageOneData} alt={'Vevol Media - Experți Shopify în România'} />}
						title={'Liderul Comunității Shopify în România'}
						textContent={[
							<p className="mt-5">
								Vevol Media nu este doar o agenție de dezvoltare Shopify - suntem principalul promotor
								și constructor al comunității eCommerce în România. De la organizarea meetup-urilor la
								conectarea comercianților cu experții, misiunea noastră este să dezvoltăm ecosistemul
								Shopify în România.
							</p>,
							<p className="mt-5">
								Cu ani de experiență în dezvoltarea magazinelor Shopify și o înțelegere profundă a
								nevoilor comercianților români, suntem poarta de acces către succesul în eCommerce
								pentru afacerile din România.
							</p>,
							<p className="mt-5">
								Organizăm evenimente, conectăm comercianți cu experți și construim o comunitate
								puternică care sprijină creșterea eCommerce în România.
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
								title: 'Meetup-uri Shopify România',
								text: 'Organizăm evenimente anuale care aduc comunitatea eCommerce românească împreună',
							},
							{
								title: 'Conexiuni cu Shopify',
								text: 'Aducem reprezentanți oficiali Shopify în România pentru networking și educație',
							},
							{
								title: 'Ecommerce Romanian Leaders',
								text: 'Organizație informală dedicată dezvoltării liderilor eCommerce în România',
							},
							{
								title: 'Suport Comercianți Români',
								text: 'Ajutăm comercianții români să navigheze complexitățile eCommerce și Shopify',
							},
						]}
						mainContent={[
							{
								title: 'Construim Viitorul eCommerce în România',
								text: 'Înțelegem că succesul în eCommerce nu vine doar din tehnologie, ci din comunitate, educație și conexiuni. De aceea, pe lângă serviciile noastre de dezvoltare Shopify, investim semnificativ în construirea comunității eCommerce românești.',
							},
							{
								text: 'Organizăm meetup-uri anuale care aduc împreună comercianți, experți, parteneri și reprezentanți oficiali Shopify. Aceste evenimente nu sunt doar oportunități de networking - sunt platforme pentru educație, inovație și colaborare.',
							},
							{
								text: 'Prin organizația noastră informală "Ecommerce Romanian Leaders", conectăm liderii din industrie și creăm oportunități pentru creșterea și dezvoltarea afacerilor românești în spațiul digital.',
							},
						]}
					/>
				</Container>
			</VevolSection>

			<VevolSection backgroundColour={'grey'} borderTop borderBottom>
				<Container>
					<SimpleImageCarousel imagesArray={event2024Images} maxHeight={'500px'} />
				</Container>
			</VevolSection>

			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Shopify Meetup România 2024',
								text: 'Primul nostru eveniment major care a unit comunitatea eCommerce românească',
							},
							{
								title: 'Shopify Meetup CEE 2025',
								text: 'Expansiunea în Europa Centrală și de Est cu focus pe România',
							},
							{
								title: 'Panouri și Workshop-uri',
								text: 'Sesiuni educaționale cu experți din industrie și reprezentanți Shopify',
							},
							{
								title: 'Networking și Conexiuni',
								text: 'Oportunități de conectare cu comercianți, parteneri și experți',
							},
						]}
						mainContent={[
							{
								title: 'Evenimente Care Transformă Industria eCommerce',
								text: 'Meetup-urile noastre Shopify nu sunt simple evenimente - sunt catalizatori pentru transformarea industriei eCommerce în România. În 2024, am organizat primul nostru eveniment major, reunind comercianți, experți și reprezentanți oficiali Shopify.',
							},
							{
								text: 'Succesul acestui eveniment ne-a inspirat să extindem impactul nostru în 2025, organizând Shopify Meetup CEE (Central and Eastern Europe), cu România ca hub principal. Acest eveniment a adus împreună comunități din întreaga regiune, creând oportunități de colaborare și creștere.',
							},
							{
								text: 'Fiecare eveniment include panouri cu experți, workshop-uri practice, sesiuni de networking și prezentări de la reprezentanți oficiali Shopify. Scopul nostru este să educăm, să inspirăm și să conectăm comunitatea eCommerce românească.',
							},
						]}
					/>
				</Container>
			</VevolSection>

			<VevolSection backgroundColour={'grey'} borderTop borderBottom>
				<Container>
					<SimpleImageCarousel imagesArray={event2025Images} />
				</Container>
			</VevolSection>

			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageTwoData} alt={'Comunitatea Shopify România'} />}
						title={'Suportul Nostru pentru Comercianții Români'}
						textContent={[
							<p className="mt-5">
								Înțelegem provocările unice pe care le întâmpină comercianții români în spațiul
								eCommerce. De la navigarea complexităților fiscale la optimizarea pentru piața
								românească, suntem aici pentru a vă sprijini la fiecare pas.
							</p>,
							<p className="mt-5">
								Serviciile noastre de dezvoltare Shopify sunt adaptate specific nevoilor afacerilor
								românești, de la migrări de la alte platforme la dezvoltarea de teme personalizate și
								aplicații specifice pieței locale.
							</p>,
							<p className="mt-5">
								Prin comunitatea noastră și evenimentele pe care le organizăm, vă oferim accesul la o
								rețea de experți, parteneri și comercianți care vă pot ajuta să vă dezvoltați afacerea
								în spațiul digital.
							</p>,
						]}
						greenLine
					/>
				</Container>
			</VevolSection>
		</Layout>
	);
}
