import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout/layout';
import HomepageHero from '../../components/homepage-hero/homepage-hero';
import HomepageServices from '../../components/homepage-services/homepage-services';
import ReviewsSection from '../../components/reviews-section/reviews-section';
import NoblesseThemeSection from '../../components/general-components/noblesse-theme-section';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import SidewayText from '../../components/sideways-text-banner/sideway-text-banner';
import VevolSection from '../../components/general-components/vm-section';
import { Container } from 'bloomer';
import ImageWithText from '../../components/general-components/image-text-simple';
import { Link } from 'gatsby';
import HeadingBlock from '../../components/heading-block/heading-block';

export const data = graphql`
	query {
		customerLogos: allFile(filter: { relativeDirectory: { eq: "customer-logos" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: DOMINANT_COLOR, height: 100, quality: 100)
				}
			}
		}
		formBannerImageQuery: file(name: { eq: "vevol-media-strategist" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 1000 }, quality: 100)
			}
		}
		mainHeroImageQuery: file(name: { eq: "vevol-media-main-hero" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 1000 }, quality: 100)
			}
		}
		collageImageQuery: file(name: { eq: "collage-projects" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 800, quality: 100)
			}
		}
		noblesseImageQuery: file(name: { eq: "noblesse-image" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 800, quality: 100)
			}
		}
		storyIconQuery: file(name: { eq: "story-icon" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 300, quality: 100)
			}
		}
		palletIconQuery: file(name: { eq: "pallet-icon" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 300, quality: 100)
			}
		}
		bagIconQuery: file(name: { eq: "bag-icon" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 300, quality: 100)
			}
		}
		themesButton: file(name: { eq: "shopify-themes-button" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 300, quality: 100)
			}
		}
		meetupImageQuery: file(name: { eq: "meetup-2024-1" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 800, quality: 100)
			}
		}
		companyFormImageQuery: file(name: { eq: "company-form-screenshot" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1200, quality: 100)
			}
		}
		shopifyAppStoreImageQuery: file(name: { eq: "shopify-app-store" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 300, quality: 100)
			}
		}
	}
`;

export default function RomanianHomepage() {
	const {
		customerLogos,
		collageImageQuery,
		noblesseImageQuery,
		storyIconQuery,
		palletIconQuery,
		bagIconQuery,
		themesButton,
		mainHeroImageQuery,
		meetupImageQuery,
		companyFormImageQuery,
		shopifyAppStoreImageQuery,
	} = useStaticQuery(data);

	const noblesseImage = getImage(noblesseImageQuery);
	const storyIcon = getImage(storyIconQuery);
	const palletIcon = getImage(palletIconQuery);
	const bagIcon = getImage(bagIconQuery);
	const themesButtonImage = getImage(themesButton);
	const mainHeroImage = getImage(mainHeroImageQuery);
	const meetupImage = getImage(meetupImageQuery);
	const companyFormImage = getImage(companyFormImageQuery);
	const shopifyAppStoreImage = getImage(shopifyAppStoreImageQuery);
	const collageImage = getImage(collageImageQuery);

	return (
		<Layout>
			<Helmet>
				<title>Partener Certificat Shopify România - Vevol Media</title>
				<meta
					name="description"
					content="Parteneri oficiali Shopify cu peste 5 ani experiență în dezvoltare eCommerce. Servicii complete: magazine, Shopify Plus, migrare, aplicații, SEO și CRO pentru piața românească."
				/>
			</Helmet>
			<HomepageHero imageBottom={mainHeroImage} />
			<SidewayText lineOne={`shopify`} lineTwo={'romania'} />
			<NoblesseThemeSection
				noblesseImage={noblesseImage}
				storyIcon={storyIcon}
				palletIcon={palletIcon}
				bagIcon={bagIcon}
				themesButtonImage={themesButtonImage}
			/>
			<VevolSection backgroundColour={'white'} borderTop borderBottom>
				<Container>
					<ImageWithText
						image={<GatsbyImage image={meetupImage} alt={'Shopify Meetup 2024'} />}
						title={'Parteneri Certificați Shopify'}
						textContent={[
							<p className="mt-5">
								Suntem principalul promotor Shopify în România și în regiunea Europei de Est. De la
								primul Shopify MeetUp organizat în București (februarie 2024) până la evenimentul extins
								de tip Central & Eastern Europe (aprilie 2025), echipa noastră a condus comunitatea
								locală în adoptarea Shopify.
							</p>,
							<p className="mt-5">
								Facilităm networking de calitate, aducem experți internaționali și împărtășim cele mai
								bune practici de migrație, customizare și conversie. Cu zeci de comercianți,
								dezvoltatori și branduri implicate, am stabilit un ecosistem Shopify solid în România.
							</p>,
							<Link to="/ro/shopify-romania" className="vm-button vm-button--black mt-5">
								Află mai multe
							</Link>,
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<HeadingBlock
						title={'Soluții pentru piața românească'}
						highlightedWord={'românească'}
						subtitle={
							'Dezvoltăm aplicații și soluții personalizate pentru nevoile specifice ale pieței românești'
						}
					/>
					<p className="py-6">
						De curând am lansat o aplicație care ajută comercianții români să valideze și să colecteze
						CUI-ul persoanelor juridice. Aplicația este disponibilă în App Store-ul Shopify și este gratuită
						pentru toți clienții noștri Shopify Plus.
					</p>
					<div className="app-demo-container mt-5">
						<GatsbyImage image={companyFormImage} alt={'Company Form Screenshot'} />
						<div className="app-demo-container__text">
							<GatsbyImage image={shopifyAppStoreImage} alt={'Shopify App Store'} />
							<Link
								to="/ro/proiecte/aplicatii-shopify/validare-cui-romania"
								className="vm-button vm-button--transparent-white"
							>
								Detalii
							</Link>
							<a
								href="https://company-form-romania.myshopify.com"
								target="_blank"
								rel="noopener noreferrer"
								className="vm-button vm-button--white"
							>
								Vezi demo
							</a>
							<a
								href="https://apps.shopify.com/company-form/install"
								target="_blank"
								rel="noopener noreferrer"
								className="vm-button vm-button--green"
							>
								Instalează aplicația
							</a>
						</div>
					</div>
				</Container>
			</VevolSection>
			<VevolSection>
				<Container>
					<ImageWithText
						alignRight
						greenLine
						image={<GatsbyImage image={collageImage} alt={'Vevol Media Projects Collage'} />}
						title={'Peste 50 de proiecte realizate cu succes'}
						textContent={[
							<p className="mt-5">
								Portofoliul nostru reflectă diversitatea și complexitatea proiectelor Shopify pe care
								le-am livrat pentru clienți din România și internațional. De la magazine online simple
								la soluții enterprise complexe, fiecare proiect demonstrează experiența și standardele
								noastre în dezvoltarea de soluții eCommerce performante și scalabile.
							</p>,
							<p className="mt-5">
								Magazinele dezvoltate de noi înregistrează în medie o creștere de 40% a ratelor de
								conversie față de soluțiile anterioare. Implementăm optimizări care asigură timpi de
								încărcare sub 3 secunde și scoruri Google PageSpeed de peste 90.
							</p>,
							<Link to="/ro/proiecte" className="vm-button vm-button--white mt-5">
								Vezi portofoliul nostru
							</Link>,
						]}
					/>
				</Container>
			</VevolSection>
			<HomepageServices />
			<VevolSection>
				<Container>
					<ImageWithText
						alignRight
						greenLine
						image={<GatsbyImage image={collageImage} alt={'Vevol Media Projects Collage'} />}
						title={'Succesul vostru este succesul nostru'}
						textContent={[
							<p className="mt-5">
								Ne place să lucrăm cu branduri minunate și suntem total implicați în toate proiectele
								noastre.
							</p>,
							<p className="mt-5">
								Nu ne dezicem de etica, profesionalismul și standardele înalte cu care lucrăm. Clienții
								ne sunt parteneri, iar drumul spre succes îl pavăm împreună.
							</p>,
						]}
						numbersContent={[
							{
								title: '50+',
								subtitle: 'Lansări reușite',
							},
							{
								title: '35+',
								subtitle: 'Clienți cu care lucrăm',
							},
							{
								title: '10+',
								subtitle: 'Aplicații implementate',
							},
						]}
					/>
					<div className="customer-logos-container mt-6">
						{customerLogos.nodes.map((logo) => (
							<GatsbyImage image={logo.childImageSharp.gatsbyImageData} alt={logo.name} key={logo.name} />
						))}
					</div>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'} borderBottom>
				<Container>
					<HeadingBlock
						title={'Asigurăm calitatea în fiecare proiect'}
						highlightedWord={'calitate'}
						subtitle={'Iar clienții apreciază implicarea noastră'}
						className="mb-4em"
					/>
					<ReviewsSection whiteBackground romanianReviews />
				</Container>
			</VevolSection>
		</Layout>
	);
}
