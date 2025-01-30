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
				heading="Enterprise-Level Shopify Plus Development"
				subheading="Elevate your e-commerce business with our advanced Shopify Plus solutions. We leverage the full capabilities of the platform to deliver scalable, high-performance online stores for enterprise clients."
			/>
			<SidewayText lineOne={`shopify`} lineTwo={'plus'} lineOneRepeat={15} lineTwoRepeat={25} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Enterprise E-commerce Excellence'}
						highlightedWord={'Enterprise'}
						subtitle={
							'As seasoned Shopify Plus Partners, we understand the unique challenges and opportunities of scaling an enterprise-level e-commerce business. Our solutions are built for performance, scalability, and growth.'
						}
						className="mb-4em"
					/>
					<ImageWithText
						image={
							<GatsbyImage
								image={imageOneData}
								alt={'Shopify Plus Development - Vevol Media'}
								loading="lazy"
							/>
						}
						title={'Advanced Solutions for Growing Businesses'}
						textContent={[
							<p className="mt-5">
								Our Shopify Plus development services go beyond standard e-commerce functionality,
								offering advanced customization and enterprise-grade features that drive business
								growth.
							</p>,
							<p className="mt-5">
								From custom checkout experiences to international expansion, we leverage Shopify Plus's
								enhanced capabilities to create solutions that scale with your business.
							</p>,
							<p className="mt-5">
								Every implementation is thoroughly tested and optimized for performance, ensuring your
								store can handle high-volume traffic and transactions seamlessly.
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
								title: 'Advanced Customization',
								text: 'Tailored functionality and design to meet complex enterprise requirements',
							},
							{
								title: 'Checkout Extensibility',
								text: 'Custom checkout experiences with personalized promotions and automated discounts',
							},
							{
								title: 'API Integration',
								text: 'Seamless integration with ERP, CRM, and PIM systems for efficient operations',
							},
							{
								title: 'Internationalization',
								text: 'Multi-store setup with localized content, currencies, and payment solutions',
							},
							{
								title: 'B2B Functionality',
								text: 'Dedicated wholesale channels with custom pricing and exclusive products',
							},
						]}
						mainContent={[
							{
								title: 'Enterprise-Grade Solutions',
								text: 'We specialize in creating sophisticated Shopify Plus stores that handle complex business requirements while maintaining exceptional performance and user experience.',
							},
							{
								text: `Our team leverages Shopify Plus's advanced features to create customized solutions that scale with your business, from automated workflows to multi-channel commerce.`,
							},
							{
								title: 'Advanced Features & Integration',
								text: 'We implement sophisticated features which include Shopify Flow for business process automation, Shopify Functions for custom pricing rules, or Shopify Markets for international expansion.',
							},
							{
								text: 'Our integration expertise ensures your store works seamlessly with enterprise systems, maintaining data consistency across your business operations.',
							},
							{
								title: 'Checkout Experience',
								text: 'We create custom checkout experiences that enhance the purchasing process, including personalized promotions, automated discounts, custom rules, and more.',
							},
							{
								title: '3rd Party Integrations',
								text: 'We leverage Shopify Plus to seamlessly integrate with third-party ERP, CRM, and PIM systems.',
							},
							{
								title: 'Global Commerce Solutions',
								text: 'We help businesses expand globally with multi-currency support, localized content, and international payment gateways.',
							},
							{
								text: 'Our B2B solutions enable wholesale operations with custom pricing, exclusive catalogs, and streamlined ordering processes.',
							},
							{
								title: 'Performance & Security',
								text: 'We ensure your store maintains peak performance even during high-traffic events, with enterprise-grade security measures and reliable hosting.',
							},
							{
								title: 'Ongoing Support',
								text: 'Our team provides dedicated support and maintenance to keep your Shopify Plus store running optimally, with rapid response times for critical issues.',
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
							<GatsbyImage image={imageTwoData} alt={'Shopify Plus Development Promise Vevol Media'} />
						}
						title={'Enterprise E-commerce Excellence'}
						greenLine
						textContent={[
							<p className="mt-5">
								<strong>Advanced Capabilities.</strong> Leverage the full power of Shopify Plus with
								custom checkout experiences, automated workflows, and enterprise integrations.
							</p>,
							<p className="mt-5">
								<strong>Scalable Solutions.</strong> Build for growth with architecture that handles
								high-volume traffic and transactions while maintaining peak performance.
							</p>,
							<p className="mt-5">
								<strong>Global Reach.</strong> Expand your business globally with multi-store setups,
								localized content, and international payment solutions.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<SplitNav
				leftTitle={'Shopify Development'}
				leftUrl={'/services/shopify-development'}
				rightTitle={'Shopify Migration'}
				rightUrl={'/services/shopify-migration'}
			/>
		</Layout>
	);
}
