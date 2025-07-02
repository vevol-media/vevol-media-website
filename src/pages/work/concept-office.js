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
		currentProject: allFile(filter: { relativeDirectory: { eq: "case-studies/concept-office" } }) {
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
	const otherProjects = portfolio.filter((item) => item.name !== 'Concept Office');

	return (
		<Layout headerBg="white">
			<Helmet>
				<title>Case Study: Concept Office - Modern Digital Showcase for Office Stationery Provider</title>
				<meta
					name="description"
					content="Concept Office partnered with Vevol Media to create a modern presentation website using Shopify's Highlight theme, showcasing their comprehensive range of office supplies and stationery."
				/>
			</Helmet>
			<SlimHero
				heading="Concept Office - Modern Digital Showcase"
				subheading="Creating a professional presentation website for a trusted office stationery and supplies provider"
				backgroundWhite
				hideBlob
			/>
			{currentProject.nodes.length > 0 && (
				<GatsbyImage
					image={getImageByName(currentProject.nodes, 'hero')}
					alt={'Featured Project - Concept Office - Vevol Media'}
					loading="lazy"
					className="bg-white"
				/>
			)}
			<VevolSection backgroundColour={'grey'} borderBottom borderTop>
				<Container>
					<a
						className="mb-3 is-inline-block"
						href={'https://conceptoffice.com'}
						target={'_blank'}
						rel="noreferrer"
					>
						See Live Website <FontAwesomeIcon icon={faExternalLinkAlt} />
					</a>
					<Title tag="h2" isSize={4}>
						About the brand
					</Title>
					<p className="mt-5">
						Concept Office is a leading supplier of office stationery and essential workplace supplies,
						serving businesses with comprehensive solutions for their office needs. The company approached
						Vevol Media with the goal of building a clean, modern, and professional online presence that
						would showcase their expertise and product range.
					</p>
					<p className="mt-5">
						Unlike traditional e-commerce projects, Concept Office's objective was not to sell products
						online, but to create a presentation website that would highlight their product range,
						communicate their expertise, and make it easy for businesses to connect and place inquiries.
						They needed a scalable and flexible solution that would allow them to showcase thousands of
						products across multiple categories while maintaining a user-friendly experience.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'} borderBottom>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Services',
								text: 'Custom Website Design & Development, Shopify Theme Customization, Presentation Website, SEO Optimization, Mobile-First Design',
							},
							{
								title: 'Tools & Technologies',
								text: 'Shopify Highlight Theme, Custom Liquid Templates, Responsive Design, SEO Architecture, Contact Forms Integration',
							},
						]}
						mainContent={[
							{
								title: 'Challenges & Objectives',
								text: "The primary challenge was adapting Shopify's e-commerce platform to create a non-transactional, presentation-only website. This required customizing the platform to showcase products without enabling online purchasing while maintaining Shopify's robust backend, fast performance, and security features.",
							},
							{
								text: 'The solution needed to structure clear product categories for stationery, technology accessories, and office essentials, while integrating forms and calls-to-action to drive inquiries. The website had to be optimized for mobile experience and include SEO-ready architecture to improve visibility in search engines.',
							},
						]}
					/>
				</Container>
			</VevolSection>
			<Quote
				firstPart={`The new website has transformed our digital presence.`}
				secondPart={`We now have a professional showcase that effectively communicates our expertise and makes it easy for businesses to connect with us.`}
				authorName={`Concept Office Team`}
				authorRole={`Marketing Director, Concept Office`}
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
						Vevol Media designed and developed a custom website from scratch for Concept Office, using
						Shopify's Highlight theme as the framework. While Shopify is traditionally used for e-commerce,
						we adapted the platform to create a non-transactional, presentation-only website that enabled
						Concept Office to take advantage of Shopify's robust backend, fast performance, and security
						features without enabling online purchasing.
					</p>
					<p className="mt-5">
						The solution included tailoring the Highlight theme to reflect Concept Office's brand identity
						with a clean, functional, and professional design featuring vibrant accents that echo the energy
						of a modern office. We structured clear product categories including stationery, technology
						accessories, and office essentials to help visitors easily explore their comprehensive offering.
					</p>
					<p className="mt-5">
						Key features implemented included integrated forms and calls-to-action to drive inquiries,
						allowing businesses to request quotes or more information seamlessly. The mobile experience was
						optimized to ensure that busy professionals can browse effortlessly across devices. The
						technology stack included Shopify's Highlight theme, custom Liquid templates, responsive design
						implementation, SEO-ready architecture, and contact forms integration to support ongoing
						marketing efforts and improve visibility in search engines.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'} borderBottom borderTop>
				<Container>
					<Title tag="h2" isSize={4}>
						Results & Impact
					</Title>
					<p className="mt-5">
						The new Concept Office website provides a polished digital storefront that positions the company
						as a go-to supplier for office stationery and supplies. The minimalist design and smooth user
						experience build trust with visitors, while the clear structure and inquiry pathways encourage
						engagement from potential business clients.
					</p>
					<p className="mt-5">
						The presentation website successfully showcases thousands of products across multiple categories
						while maintaining a user-friendly experience. The scalable and flexible solution allows Concept
						Office to easily update their product catalog and content without requiring technical expertise,
						empowering their team to manage the website independently.
					</p>
					<p className="mt-5">
						The SEO-ready architecture has improved the company's visibility in search engines, supporting
						ongoing marketing efforts and helping potential clients discover Concept Office's services. The
						mobile-optimized design ensures that busy professionals can browse the comprehensive product
						range effortlessly across all devices, increasing engagement and inquiry rates.
					</p>
					<p className="mt-5">
						Concept Office now has a flexible platform that strengthens their brand and supports their
						business goals without the need for e-commerce functionality. The website serves as an effective
						lead generation tool, driving qualified inquiries from businesses seeking office supplies and
						stationery solutions.
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
