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
		currentProject: allFile(filter: { relativeDirectory: { eq: "case-studies/blackstone" } }) {
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
	const otherProjects = portfolio.filter((item) => item.name !== 'Blackstone Unlimited');

	return (
		<Layout headerBg="white">
			<Helmet>
				<title>Case Study: Blackstone Unlimited - Magento 2 to Shopify Plus Migration for Digital Library System</title>
				<meta
					name="description"
					content="Blackstone Unlimited partnered with Vevol Media to migrate from Magento 2 to Shopify Plus, implementing a custom digital library system with streaming access and mobile app synchronization."
				/>
			</Helmet>
			<SlimHero
				heading="Blackstone Unlimited - Magento 2 to Shopify Plus Migration"
				subheading="Digital library system with custom streaming access model and mobile app synchronization"
				backgroundWhite
				hideBlob
			/>
			<GatsbyImage
				image={getImageByName(currentProject.nodes, 'hero')}
				alt={'Featured Project - Blackstone Unlimited - Vevol Media'}
				loading="lazy"
				className="bg-white"
			/>
			<VevolSection backgroundColour={'grey'} borderBottom borderTop>
				<Container>
					<a className="mb-3 is-inline-block" href={'https://www.blackstoneunlimited.com'} target={'_blank'} rel="noreferrer">
						See Live Website <FontAwesomeIcon icon={faExternalLinkAlt} />
					</a>
					<Title tag="h2" isSize={4}>
						About the brand
					</Title>
					<p className="mt-5">
						Blackstone Unlimited is a North American audiobook platform that integrates with public libraries 
						across the continent, offering members streaming access to audiobooks via their library cards. 
						The platform serves a unique audience of registered library users rather than the general public, 
						requiring a specialized approach to user authentication and content access.
					</p>
					<p className="mt-5">
						The business needed to migrate from their existing Magento 2 platform to Shopify Plus while 
						maintaining their complex library integration system and ensuring seamless synchronization with 
						two native mobile applications. The challenge was to transform a traditional eCommerce platform 
						into a digital library system with custom streaming capabilities.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'} borderBottom>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Services',
								text: 'Magento 2 to Shopify Plus Migration, Custom Digital Library System, Mobile App Synchronization, Custom User Roles & Permissions',
							},
							{
								title: 'Tools & Technologies',
								text: 'Shopify Plus, Node.js, React.js, GraphQL, Firebase, Redis, Shopify Functions, REST APIs, CI/CD Pipeline',
							},
						]}
						mainContent={[
							{
								title: 'Challenges & Objectives',
								text: 'The primary challenge was overhauling the entire Shopify ecosystem to support a digital library model rather than traditional eCommerce. This required building entirely new features including book reservations, returns, playback tracking, progress monitoring, and listening history.',
							},
							{
								text: 'Implementing server-side filtering of available audiobooks based on library permissions was critical, ensuring users only see content they are authorized to access. Additionally, maintaining real-time synchronization between the platform and two mobile applications while ensuring Shopify served as the source of truth for all data.',
							},
						]}
					/>
				</Container>
			</VevolSection>
			<Quote
				firstPart={`The migration to Shopify Plus has revolutionized our digital library system.`}
				secondPart={`We now have seamless integration with our mobile apps and unprecedented control over user access and content delivery.`}
				authorName={`Blackstone Unlimited Team`}
				authorRole={`Technical Director, Blackstone Unlimited`}
			/>
			<VevolSection>
				<Container>
					<SimpleImageCarousel imagesArray={projectCarouselImages} className="mb-5" />
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<Title tag="h2" isSize={4}>
						Solution & Technology Stack
					</Title>
					<p className="mt-5">
						Vevol Media built a multi-layered custom Shopify Plus architecture that transformed the platform 
						from a traditional eCommerce system into a sophisticated digital library management system. 
						Shopify Plus was extended via custom Node.js middleware to communicate with internal systems 
						and library partnerships.
					</p>
					<p className="mt-5">
						Access rules were enforced using server-side filters and proxy requests before querying Shopify's 
						product data. Shopify metafields were utilized for assigning library-specific permissions to 
						digital SKUs, while listening progress and playback history were tracked through a custom React 
						dashboard and stored externally via Firebase.
					</p>
					<p className="mt-5">
						A multi-tenant architecture was established via Shopify Organizations for syncing admin workflows 
						across stores, while real-time product filtering and catalog hydration were handled using edge 
						GraphQL requests optimized through Redis caching. The technology stack included Shopify Plus with 
						Advanced Shopify Scripts & APIs, Node.js/Express.js middleware, React.js (Next.js) frontend, 
						Firebase + Firestore for user session storage, Redis for caching, Shopify Functions for cart/checkout 
						logic, and comprehensive CI/CD pipeline with GitHub Actions.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'} borderBottom borderTop>
				<Container>
					<Title tag="h2" isSize={4}>
						Results & Impact
					</Title>
					<p className="mt-5">
						The migration from Magento 2 to Shopify Plus was completed without any disruption to the customer 
						experience, maintaining all existing functionality while introducing new capabilities. The custom 
						digital library system now provides seamless access control based on library partnerships, ensuring 
						users only see content they are authorized to access.
					</p>
					<p className="mt-5">
						Real-time synchronization with the iOS and Android mobile applications has been achieved, with 
						Shopify serving as the single source of truth for all data. The custom user role system allows 
						for library-specific validation and access control, while the scalable development pipeline 
						enables efficient testing and deployment across multiple Shopify instances.
					</p>
					<p className="mt-5">
						The implementation of custom functionalities including reservations, playback tracking, lending 
						limits, and streaming sessions has transformed the platform from a traditional eCommerce site 
						into a comprehensive digital library management system. The multi-tenant architecture ensures 
						efficient admin workflow synchronization across all stores within the Blackstone organization.
					</p>
					<p className="mt-5">
						Performance optimization through Redis caching and edge GraphQL requests has maintained fast 
						website loading speeds, ensuring a smooth and responsive user experience for library members 
						accessing audiobooks across North America.
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