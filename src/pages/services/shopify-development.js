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
				heading="Custom Shopify Development Services"
				subheading="We create robust and scalable Shopify stores tailored to your business needs. Our experienced team ensures your store is not only visually appealing but also optimized for performance and user experience."
			/>
			<SidewayText lineOne={`shopify`} lineTwo={'development'} lineOneRepeat={15} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Expert Shopify Development Solutions'}
						highlightedWord={'Shopify'}
						subtitle={
							'With over four years as trusted Shopify Partners, we deliver reliable and flexible solutions that drive business growth. Our approach combines technical excellence with strategic thinking.'
						}
						className="mb-4em"
					/>
					<ImageWithText
						image={
							<GatsbyImage
								image={imageOneData}
								alt={'Shopify Development - Vevol Media'}
								loading="lazy"
							/>
						}
						title={'Tailored Solutions for Your Business'}
						textContent={[
							<p className="mt-5">
								From custom theme development to performance optimization, we handle every aspect of
								your Shopify store with meticulous attention to detail.
							</p>,
							<p className="mt-5">
								Our mobile-first approach ensures your store provides an excellent shopping experience
								across all devices, helping you reach more customers.
							</p>,
							<p className="mt-5">
								We implement SEO best practices and optimize performance to drive organic traffic and
								increase conversions.
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
								title: 'Custom Theme Development',
								text: 'Unique designs that reflect your brand identity and enhance user experience',
							},
							{
								title: 'Responsive Design',
								text: 'Mobile-first approach ensuring flawless functionality across all devices',
							},
							{
								title: 'App Integration',
								text: 'Seamless integration of essential apps to enhance store functionality',
							},
							{
								title: 'SEO Optimization',
								text: 'Implementation of best practices to improve visibility and drive organic traffic',
							},
							{
								title: 'Performance Optimization',
								text: 'Speed and efficiency improvements for better user experience and conversions',
							},
						]}
						mainContent={[
							{
								title: 'Comprehensive Development Approach',
								text: 'We specialize in creating Shopify stores that combine aesthetic appeal with technical excellence, ensuring a seamless shopping experience for your customers.',
							},
							{
								text: 'Every project begins with thorough planning and strategy, ensuring our solutions align perfectly with your business goals and requirements.',
							},
							{
								title: 'Custom Solutions & Integration',
								text: 'Our custom theme development focuses on creating unique designs that reflect your brand identity while maintaining optimal performance.',
							},
							{
								text: `We carefully integrate essential Shopify apps and third-party tools to enhance your store's functionality without compromising performance.`,
							},
							{
								title: 'Optimization & Performance',
								text: 'Our development process includes comprehensive optimization for speed, SEO, and user experience to drive better results.',
							},
							{
								text: 'We implement responsive design principles to ensure your store performs flawlessly across all devices and screen sizes.',
							},
							{
								title: 'Quality Assurance',
								text: 'Rigorous testing across devices and browsers ensures your store functions perfectly in all scenarios.',
							},
							{
								title: 'Ongoing Support',
								text: 'We provide continuous support and maintenance to keep your store running efficiently, allowing you to focus on growing your business.',
							},
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageTwoData} alt={'Shopify Development Promise Vevol Media'} />}
						title={'Our Development Promise'}
						greenLine
						textContent={[
							<p className="mt-5">
								<strong>Quality First.</strong> We build scalable, flexible, and reusable solutions
								using the most performant technology and approaches.
							</p>,
							<p className="mt-5">
								<strong>Future-Proof Development.</strong> Our code is written to stand the test of
								time, reducing the need for frequent rebuilds and ensuring long-term value.
							</p>,
							<p className="mt-5">
								<strong>Cost-Effective Solutions.</strong> Our approach to development helps reduce
								ongoing maintenance costs while providing the flexibility to easily make future updates.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<SplitNav
				leftTitle={'Shopify Plus'}
				leftUrl={'/services/shopify-plus'}
				rightTitle={'Shopify Apps'}
				rightUrl={'/services/shopify-apps'}
			/>
		</Layout>
	);
}
