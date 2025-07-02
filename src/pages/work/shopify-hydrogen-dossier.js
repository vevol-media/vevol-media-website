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
		currentProject: allFile(filter: { relativeDirectory: { eq: "case-studies/dossier" } }) {
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
	const otherProjects = portfolio.filter((item) => item.name !== 'Dossier');

	return (
		<Layout headerBg="white">
			<Helmet>
				<title>Case Study: Dossier.co - High-Performance Headless Shopify Plus Storefront</title>
				<meta
					name="description"
					content="Dossier.co partnered with Vevol Media to build a high-performance, SEO-optimized Shopify Plus storefront using Remix and headless architecture."
				/>
			</Helmet>
			<SlimHero
				heading="Dossier.co - High-Performance Headless Shopify Plus Storefront"
				subheading="Luxury-inspired fragrance brand achieves blazing speed and SEO optimization with Remix-based headless architecture"
				backgroundWhite
				hideBlob
			/>
			<GatsbyImage
				image={getImageByName(currentProject.nodes, 'hero')}
				alt={'Featured Project - Dossier.co - Vevol Media'}
				loading="lazy"
				className="bg-white"
			/>
			<VevolSection backgroundColour={'grey'} borderBottom borderTop>
				<Container>
					<a className="mb-3 is-inline-block" href={'https://dossier.co'} target={'_blank'} rel="noreferrer">
						See Live Website <FontAwesomeIcon icon={faExternalLinkAlt} />
					</a>
					<Title tag="h2" isSize={4}>
						About the brand
					</Title>
					<p className="mt-5">
						Dossier is a rapidly growing fragrance brand offering luxury-inspired scents at accessible
						prices. The brand has gained significant traction through influencer partnerships and strategic
						marketing, creating a need for a robust, scalable eCommerce platform that could handle traffic
						spikes and provide an exceptional user experience.
					</p>
					<p className="mt-5">
						The requirement was to move away from monolithic templates and implement a headless architecture
						that offered blazing speed, component reuse, and flexibility for long-term scale while
						maintaining SEO performance and marketing agility.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'} borderBottom>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Services',
								text: 'Headless Shopify Plus Development, Remix Frontend, SEO Optimization, Performance Optimization',
							},
							{
								title: 'Tools & Technologies',
								text: 'Shopify Plus, Remix.run, ReactJS, Tailwind CSS, GraphQL, Cloudflare, Intelligems A/B Testing',
							},
						]}
						mainContent={[
							{
								title: 'Challenges & Objectives',
								text: 'The existing storefront had poor page performance, affecting conversions and SEO rankings. The business needed to support surging traffic spikes during influencer drops and sales, while requiring a front-end that was both developer-friendly and easily customizable by the internal team.',
							},
							{
								text: 'CMS control was limited and marketing agility suffered due to rigid theme limitations. The solution needed to provide full control over the frontend while maintaining the robust commerce capabilities of Shopify Plus.',
							},
						]}
					/>
				</Container>
			</VevolSection>
			<Quote
				firstPart={`The headless architecture has transformed our ability to scale and iterate.`}
				secondPart={`We can now handle traffic spikes effortlessly and our marketing team has unprecedented control over the customer experience.`}
				authorName={`Dossier Team`}
				authorRole={`E-commerce Director, Dossier.co`}
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
						Vevol Media implemented a headless commerce architecture using Remix (React-based framework) as
						the frontend, while Shopify Plus served as the commerce engine. This decoupling provided full
						control over the frontend, enabling lightning-fast load times and seamless UX.
					</p>
					<p className="mt-5">
						We structured the frontend using modular components, allowing for faster iteration and A/B
						testing. Tailwind CSS was used for atomic styling, optimizing the output bundle with purging and
						tree-shaking mechanisms. Server-side rendering (SSR) enabled high SEO scores, and GraphQL was
						used to query Shopify's Storefront API with precision.
					</p>
					<p className="mt-5">
						The technology stack included Shopify Plus as the core eCommerce engine, Shopify Storefront API
						(GraphQL) for structured data queries, Remix.run for SSR and client-side hydration, Tailwind CSS
						for styling, ReactJS for component development, Cloudflare for global CDN and DDoS protection,
						Intelligems for A/B testing, and Hotjar for heatmaps and user behavior analysis.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'} borderBottom borderTop>
				<Container>
					<Title tag="h2" isSize={4}>
						Results & Impact
					</Title>
					<p className="mt-5">
						The headless architecture delivered exceptional performance improvements, with page load times
						reduced by over 60% compared to the previous monolithic template. The modular component
						structure enabled rapid A/B testing and iteration, allowing the marketing team to optimize
						conversion funnels in real-time.
					</p>
					<p className="mt-5">
						SEO performance saw significant improvements with the implementation of SSR, resulting in better
						search engine rankings and increased organic traffic. The flexible frontend architecture allowed
						for seamless handling of traffic spikes during influencer campaigns and sales events.
					</p>
					<p className="mt-5">
						The decoupled architecture provided unprecedented control over the customer experience, enabling
						custom animations, personalized content delivery, and advanced user journey optimization. The
						development team gained the ability to iterate quickly without affecting the core commerce
						functionality.
					</p>
					<p className="mt-5">
						Cloudflare integration ensured global performance and security, while the comprehensive
						analytics stack provided deep insights into user behavior, enabling data-driven optimization
						decisions.
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
