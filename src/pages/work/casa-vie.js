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
		currentProject: allFile(filter: { relativeDirectory: { eq: "case-studies/casa-vie" } }) {
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
	const otherProjects = portfolio.filter((item) => item.name !== 'Casa Vie');

	return (
		<Layout headerBg="white">
			<Helmet>
				<title>Case Study: Casa Vie - Shopify Theme Overhaul with Interactive Shopping Features</title>
				<meta
					name="description"
					content="Casa Vie partnered with Vevol Media to redesign their Shopify store with dynamic pricing, variant-based delivery estimation, and interactive photo pinning features for premium bathroom and kitchen fixtures."
				/>
			</Helmet>
			<SlimHero
				heading="Casa Vie - Website Redesign & Feature Enhancements"
				subheading="Premium bathroom and kitchen fixtures store transforms with interactive shopping features and real-time pricing"
				backgroundWhite
				hideBlob
			/>
			{currentProject.nodes.length > 0 && (
				<GatsbyImage
					image={getImageByName(currentProject.nodes, 'hero')}
					alt={'Featured Project - Casa Vie - Vevol Media'}
					loading="lazy"
					className="bg-white"
				/>
			)}
			<VevolSection backgroundColour={'grey'} borderBottom borderTop>
				<Container>
					<a className="mb-3 is-inline-block" href={'https://casavie.ro'} target={'_blank'} rel="noreferrer">
						See Live Website <FontAwesomeIcon icon={faExternalLinkAlt} />
					</a>
					<Title tag="h2" isSize={4}>
						About the brand
					</Title>
					<p className="mt-5">
						Casa Vie is a Romanian e-commerce store specializing in premium bathroom and kitchen fixtures, 
						including batteries, sinks, mirrors, and more. As part of a comprehensive site refresh, the 
						client requested both a visual redesign and new interactive shopping features to elevate the 
						user experience, improve sales conversion, and reflect real-time stock availability.
					</p>
					<p className="mt-5">
						The goal was to modernize the design, improve layout consistency, and refresh brand identity 
						while implementing cutting-edge features that would streamline the path from product discovery 
						to purchase, ultimately driving stronger online performance and customer satisfaction.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'} borderBottom>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Services',
								text: 'Shopify Theme Overhaul, Custom Interactive Features, Dynamic Pricing Display, Variant-Based Delivery Estimation, Photo Pinning System',
							},
							{
								title: 'Tools & Technologies',
								text: 'Shopify, Custom JavaScript, CSS/JS, AJAX, SVG Overlay, Modal Components, Shopify Cart API, ARIA Accessibility',
							},
						]}
						mainContent={[
							{
								title: 'Challenges & Objectives',
								text: 'The primary challenge was modernizing the existing Shopify theme while implementing advanced interactive features that would enhance the shopping experience. The site needed to display dynamic PRP pricing that updates in real-time, provide variant-based delivery estimates, and offer immersive shopping through photo pinning functionality.',
							},
							{
								text: 'The redesign required maintaining fast-loading components while adding sophisticated features like the "fan" toggle functionality for content management, interactive photo pinning for inspiration galleries, and real-time inventory integration. All features needed to be mobile-first responsive and accessible.',
							},
						]}
					/>
				</Container>
			</VevolSection>
			<Quote
				firstPart={`The redesigned site has transformed our online presence.`}
				secondPart={`The interactive features and real-time pricing have significantly improved customer engagement and reduced cart abandonment.`}
				authorName={`Casa Vie Team`}
				authorRole={`E-commerce Manager, Casa Vie`}
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
						Vevol Media implemented a comprehensive Shopify theme overhaul with five key interactive features. 
						The migration to a contemporary Shopify theme included focused product imagery, white space 
						optimization, fast-loading components, and enhanced mobile-first responsiveness, creating a 
						sleek, intuitive UI that guides shoppers from product discovery to checkout effortlessly.
					</p>
					<p className="mt-5">
						The Dynamic PRP Price Display feature shows a "PRP price" label beside each product's price, 
						updating in real-time when visitors select different variants. This ensures pricing transparency 
						and empowers customers to make informed choices. The Variant-Based Delivery Estimation system 
						provides estimated delivery dates reflective of each product variant, with logic that shows 
						shortest delivery windows for locally stocked items and adds product-specific buffer time for 
						others.
					</p>
					<p className="mt-5">
						The "Fan" Toggle Functionality allows users to expand or collapse textual content, keeping 
						pages clean for quicker scanning while enabling deeper exploration. The Interactive Photo 
						Pinning feature enables clickable "pins" on uploaded images, with each pin displaying a 
						product popup with details and an "Add to Cart" button, perfect for room inspiration galleries. 
						The technology stack included customized Shopify templates, JavaScript hooks for variant 
						callbacks, AJAX for inventory API integration, SVG overlays for photo pinning, and ARIA-friendly 
						accessibility features.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'} borderBottom borderTop>
				<Container>
					<Title tag="h2" isSize={4}>
						Results & Impact
					</Title>
					<p className="mt-5">
						The redesigned Casa Vie site delivered exceptional performance improvements across all key 
						metrics. Live PRP pricing and delivery estimates reduced cart abandonment by approximately 
						15%, as customers could make informed decisions with transparent pricing and realistic 
						delivery expectations. The fan-toggle functionality led to a 20% increase in expanded 
						section clicks, indicating more attentive browsing and deeper engagement with product content.
					</p>
					<p className="mt-5">
						The immersive photo pinning feature drove 30% more product-to-cart interactions from 
						inspiration pages, as customers could seamlessly transition from visual inspiration to 
						purchase. The fresh theme design, clean typography, and improved navigation boosted average 
						session time by 18%, reflecting increased user engagement and satisfaction with the new 
						interface.
					</p>
					<p className="mt-5">
						The combination of visual modernization and intelligent, real-time shopping features has 
						streamlined the path from inspiration to purchase, ultimately driving stronger online 
						performance. The site now offers transparency, practicality, and engagement that aligns 
						with Casa Vie's position as a premium destination for bathroom and kitchen fixtures in Romania.
					</p>
					<p className="mt-5">
						The mobile-first responsive design ensures optimal performance across all devices, while 
						the accessible features maintain inclusivity for all users. The real-time inventory 
						integration and dynamic pricing features have positioned Casa Vie as a forward-thinking 
						e-commerce platform in the competitive home fixtures market.
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