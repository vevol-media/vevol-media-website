import React from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout/layout';
import SlimHero from '../../components/slim-hero/slim-hero';
import SidewayText from '../../components/sideways-text-banner/sideway-text-banner';
import VevolSection from '../../components/general-components/vm-section';
import { Container } from 'bloomer';
import HeadingBlock from '../../components/heading-block/heading-block';
import ImageWithText from '../../components/general-components/image-text-simple';
import BottomCTA from '../../components/bottom-cta/bottom-cta';
import SidebarInfoText from '../../components/general-components/sidebar-info-text';
import SplitNav from '../../components/general-components/split-nav';

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
			<SlimHero
				heading="Shopify Apps Development"
				subheading="We develop powerful, scalable Shopify applications that extend your store's functionality. From private apps to public App Store solutions, we leverage modern technologies and best practices to deliver efficient, reliable apps."
			/>
			<SidewayText lineOne={`shopify`} lineTwo={'apps'} lineOneRepeat={15} lineTwoRepeat={25} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Expert Shopify App Development'}
						highlightedWord={'App'}
						subtitle={
							'Our team specializes in building both custom private apps and public Shopify applications. We leverage modern GraphQL APIs and efficient development frameworks to deliver robust solutions that scale with your business.'
						}
						className="mb-4em"
					/>
					<ImageWithText
						image={
							<GatsbyImage
								image={imageOneData}
								alt={'Shopify Apps Development - Vevol Media'}
								loading="lazy"
							/>
						}
						title={'Tailored App Solutions'}
						textContent={[
							<p className="mt-5">
								Whether you need a private app for your store's specific needs or a public app for the
								Shopify App Store, we deliver solutions that leverage the latest Shopify APIs and
								development standards.
							</p>,
							<p className="mt-5">
								Our apps are built using modern GraphQL APIs, ensuring better performance, reduced data
								overhead, and future-proof functionality compared to legacy REST implementations.
							</p>,
							<p className="mt-5">
								We accelerate development using Gadget.dev's powerful framework, enabling rapid
								deployment while maintaining high code quality and scalable architecture.
							</p>,
						]}
						greenLine
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Let's Work Together"
				text="Book a free consultation with one of our team members now"
				url="/contact"
				ctaText={'Ask for availability'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Custom Private Apps',
								text: 'Tailored solutions for individual store needs and specific business processes',
							},
							{
								title: 'Public App Store Apps',
								text: 'Scalable applications built for distribution through the Shopify App Store',
							},
							{
								title: 'Plus-Enabled Apps',
								text: 'Advanced applications leveraging Shopify Plus features like Checkout Extensions',
							},
							{
								title: 'Integration Apps',
								text: 'Connect Shopify with ERPs, inventory systems, and third-party platforms',
							},
							{
								title: 'E-commerce Enhancement',
								text: 'Apps for upselling, cross-selling, and improved customer experience',
							},
						]}
						mainContent={[
							{
								title: 'Comprehensive App Development',
								text: 'We develop apps that range from simple automation tools to complex enterprise solutions, all built on modern GraphQL APIs for optimal performance.',
							},
							{
								text: `Using Gadget.dev's powerful framework, we accelerate development while maintaining high standards of code quality and scalability.'`,
							},
							{
								title: 'Shopify Plus Applications',
								text: 'We build specialized apps that leverage Shopify Plus features, including custom checkout extensions, advanced automation, and B2B functionality.',
							},
							{
								text: 'Our Plus-enabled apps support complex business logic, custom pricing rules, and advanced workflow automation.',
							},
							{
								title: 'Integration & Sync Solutions',
								text: 'We specialize in developing apps that connect Shopify with enterprise systems, including real-time inventory sync and ERP integration.',
							},
							{
								text: 'Our integration apps ensure seamless data flow between systems while maintaining data integrity and performance.',
							},
							{
								title: 'Sales Enhancement Apps',
								text: `Create powerful upselling and cross-selling solutions that integrate seamlessly with your store's checkout and product pages.`,
							},
							{
								title: 'Efficient Development',
								text: `By leveraging Gadget.dev's framework, we provide faster time-to-market, robust architecture, and cost-effective development solutions.`,
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
							<GatsbyImage image={imageTwoData} alt={'Shopify Apps Development Promise Vevol Media'} />
						}
						title={'Our App Development Approach'}
						greenLine
						textContent={[
							<p className="mt-5">
								<strong>Modern Architecture.</strong> Built with GraphQL APIs and efficient frameworks
								like Gadget.dev for optimal performance and scalability.
							</p>,
							<p className="mt-5">
								<strong>Versatile Solutions.</strong> From private apps to public App Store solutions,
								we deliver applications that solve real business challenges.
							</p>,
							<p className="mt-5">
								<strong>Future-Proof Development.</strong> Leveraging the latest Shopify standards and
								technologies to ensure long-term reliability and maintainability.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<SplitNav
				leftTitle={'Shopify Plus'}
				leftUrl={'/services/shopify-plus'}
				rightTitle={'Shopify Migration'}
				rightUrl={'/services/shopify-migration'}
			/>
		</Layout>
	);
}
