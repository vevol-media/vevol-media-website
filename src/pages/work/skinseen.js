import React from 'react';
import { graphql } from 'gatsby';
import portfolio from '../../enums/portfolio';
import Layout from '../../components/layout/layout';
import SlimHero from '../../components/slim-hero/slim-hero';
import { Container, Title } from 'bloomer';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImageByName } from '../../helpers/helpers';
import VevolSection from '../../components/general-components/vm-section';
import SidebarInfoText from '../../components/general-components/sidebar-info-text';
import Quote from '../../components/general-components/quote';
import SimpleImageCarousel from '../../components/simple-image-carousel/simple-image-carousel';
import HeadingBlock from '../../components/heading-block/heading-block';
import PortfolioCarousel from '../../components/portfolio-carousel/portfolio-carousel';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export const data = graphql`
	query {
		currentProject: allFile(filter: { relativeDirectory: { eq: "case-studies/skinseen" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(
						placeholder: BLURRED
						blurredOptions: { width: 125 }
						quality: 100
						layout: FULL_WIDTH
					)
				}
			}
		}
		allPortfolio: allFile(filter: { relativeDirectory: { eq: "portfolio-featured-images" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 450, quality: 100)
				}
			}
		}
	}
`;

export default function PortfolioPage({ data }) {
	const { currentProject, allPortfolio } = data;
	const projectCarouselImages = currentProject.nodes.filter((image) => image.name.includes('carousel'));
	const otherProjects = portfolio.filter((item) => item.name !== 'Skinseen');

	return (
		<Layout headerBg="white">
			<Helmet>
				<title>Case Study: Skinseen.ro - OpenCart to Shopify Migration for Premium Skincare Platform</title>
				<meta
					name="description"
					content="Skinseen.ro partnered with Vevol Media to migrate from OpenCart to Shopify, implementing a custom skin quiz and optimizing performance for Romania's premium skincare destination."
				/>
			</Helmet>
			<SlimHero
				heading="Skinseen.ro - OpenCart to Shopify Migration"
				subheading="Romania's premium skincare destination transforms with custom skin quiz and performance optimization"
				backgroundWhite
				hideBlob
			/>
			{currentProject.nodes.length > 0 && (
				<GatsbyImage
					image={getImageByName(currentProject.nodes, 'hero')}
					alt={'Featured Project - Skinseen.ro - Vevol Media'}
					loading="lazy"
					className="bg-white"
				/>
			)}
			<VevolSection backgroundColour={'grey'} borderBottom borderTop>
				<Container>
					<a className="mb-3 is-inline-block" href={'https://skinseen.ro'} target={'_blank'} rel="noreferrer">
						See Live Website <FontAwesomeIcon icon={faExternalLinkAlt} />
					</a>
					<Title tag="h2" isSize={4}>
						About the brand
					</Title>
					<p className="mt-5">
						Skinseen.ro is Romania's premium destination for authentic, carefully selected cosmetic
						products, offering the most effective solutions for skin care. All products are 100% original
						and compliant, ensuring safety and top quality for their discerning customers.
					</p>
					<p className="mt-5">
						The company prides itself on a strong portfolio built on expertise, rigorous testing, and close
						partnerships with internationally recognized brands. Skinseen is an official distributor for all
						the brands listed on its platform and holds exclusive distribution rights in Romania for
						prestigious names such as Dr. Hedison, Pittoresco, Q+A, St. Moriz, Mitomo, SkinClinic, Graceday,
						and Hidehere.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'} borderBottom>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Services',
								text: 'OpenCart to Shopify Migration, Custom Skin Quiz Development, Performance Optimization, Design & UX/UI, Localized Delivery & Pricing',
							},
							{
								title: 'Tools & Technologies',
								text: 'Shopify Plus, Shopify Cornerstone Theme, Custom JavaScript, Liquid Templates, SEO Optimization, Mobile-First Design',
							},
						]}
						mainContent={[
							{
								title: 'Challenges & Objectives',
								text: 'The primary challenge was migrating from OpenCart due to platform limitations in scalability, feature flexibility, and performance. The existing platform had slow load times due to large imagery and unoptimized scripts, while the skin quiz lacked personalization depth and clear product recommendations.',
							},
							{
								text: "Strengthening brand positioning as Romania's trusted, science-backed skincare destination required a more engaging, intuitive user experience with storytelling and smarter product guidance. The migration needed to maintain SEO rankings while implementing localized delivery and pricing for the Romanian market.",
							},
						]}
					/>
				</Container>
			</VevolSection>
			<Quote
				firstPart={`The migration to Shopify has transformed our digital presence.`}
				secondPart={`Our custom skin quiz now provides personalized recommendations that truly help customers find the right products for their skin concerns.`}
				authorName={`Skinseen Team`}
				authorRole={`E-commerce Director, Skinseen.ro`}
			/>
			{projectCarouselImages.length > 0 && (
				<VevolSection>
					<Container>
						<SimpleImageCarousel imagesArray={projectCarouselImages} className="mb-5" />
					</Container>
				</VevolSection>
			)}
			<VevolSection backgroundColour={'white'}>
				<Container>
					<Title tag="h2" isSize={4}>
						Solution & Technology Stack
					</Title>
					<p className="mt-5">
						Vevol Media implemented a comprehensive migration strategy from OpenCart to Shopify, rebuilding
						the site with a flexible, modular Shopify architecture using Shopify's Cornerstone theme. The
						migration included complete transfer of catalog, customer data, and order history while
						implementing SEO-friendly redirects to retain organic rankings.
					</p>
					<p className="mt-5">
						A key component of the solution was the complete revamp of the Skin Quiz. The structure and flow
						were redesigned to be more dynamic and user-friendly, with branching logic to better capture
						skin type, concerns, and goals. The enhanced output provides tailored product recommendations
						linked to collections and routines, with a mobile-optimized UI for smoother completion rates.
					</p>
					<p className="mt-5">
						Performance optimization was achieved through lazy-loading and compression of high-resolution
						images, along with consolidation of apps and removal of redundant code for faster load times.
						The platform now features dynamic delivery estimates based on location, with local currency
						(RON) and local shipping policies at checkout, providing a fully localized experience for
						Romanian customers.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'} borderBottom borderTop>
				<Container>
					<Title tag="h2" isSize={4}>
						Results & Impact
					</Title>
					<p className="mt-5">
						The migration to Shopify has successfully addressed all platform limitations, providing improved
						scalability, feature flexibility, and performance. The new platform loads significantly faster
						due to optimized imagery and streamlined code, enhancing the overall user experience and
						reducing bounce rates.
					</p>
					<p className="mt-5">
						The redesigned Skin Quiz has transformed customer engagement, providing personalized
						recommendations that help customers make informed purchasing decisions. The branching logic and
						enhanced output have increased quiz completion rates and improved customer satisfaction through
						better product guidance.
					</p>
					<p className="mt-5">
						Brand positioning has been strengthened through the improved user experience, with better
						storytelling and product guidance that reinforces Skinseen's position as Romania's trusted,
						science-backed skincare destination. The localized delivery and pricing features ensure
						customers receive accurate shipping estimates and pricing in their local currency.
					</p>
					<p className="mt-5">
						SEO rankings have been maintained through proper redirect implementation, ensuring continued
						organic traffic growth. The mobile-optimized design and improved performance have contributed to
						better search engine rankings and user engagement across all devices.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Our previously successful projects'}
						highlightedWord={'successful'}
						subtitle={'Proven track record of our hard work.'}
						className="mb-4em"
					/>
					<PortfolioCarousel projectsList={otherProjects} imagesData={allPortfolio.nodes} cutBottomPadding />
				</Container>
			</VevolSection>
		</Layout>
	);
}
