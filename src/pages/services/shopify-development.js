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
		imageOneQuery: file(name: { eq: "shopify-store-example" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
			}
		}
		imageTwoQuery: file(name: { eq: "service-development-promise" }) {
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
				heading="Shopify Developers You Can Count On."
				subheading="Leave the development to us. We will be your partner in business, making sure everything on your website, both front end and back end, works smoothly!"
			/>
			<SidewayText lineOne={`shopify`} lineTwo={'development'} lineOneRepeat={15} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'We Take Shopify Development Seriously'}
						highlightedWord={'Shopify'}
						subtitle={
							"Our developers have extensive knowledge of the platform and our solutions are created with care, attention to details and they're future-proof."
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
						title={'Reliablity & Flexibility'}
						textContent={[
							<p className="mt-5">
								When we take on a new Shopify build, we always aim to get the result that both our
								clients and ourselves are proud of.
							</p>,
							<p className="mt-5">
								As soon as the project begins, we become partners in your business and we strive for
								your success as we do for ours.
							</p>,
							<p className="mt-5">
								From scoping to design, implementation and maintenance, we will always make sure you
								receive only what is best, based on thorough research, testing and usability.
							</p>,
						]}
						greenLine
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Let's Work Together"
				text="Book a free consultation with one of out team members now"
				url="/contact"
				ctaText={'Get in touch'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Scoping',
								text: 'The initial phase where we make sure our mindset and our goals are aligned',
							},
							{
								title: 'Design',
								text: 'We spare no time to make sure the look and feel matches your vision.',
							},
							{
								title: 'Development',
								text: 'Clean, flexibile and re-usable components, based on performance and industry requirements.',
							},
							{
								title: 'Quality Assurance',
								text: 'Thorough testing of usability, functionality and purchase flow on all implementations.',
							},
							{
								title: 'Project Management',
								text: 'Dedicated person to make sure all processes are followed and you stay updated with the progress.',
							},
						]}
						mainContent={[
							{
								title: 'We understand and drive the process',
								text: 'We have been trusted Shopify Partners for over 4 years and with every project we deliver, we aim to perfect every little bit that makes a good success story.',
							},
							{
								text: 'We will always kick off by gathering all relevant data when it comes to your brand and its strategy. This is paramount to a great workflow and a good partnerhsip.',
							},
							{
								text: 'All deliverables are pre-agreed and are we take ownership over fulfilling them. The progress is always transparent as we set milestones and deadlines and we always communicate with the customer.',
							},
							{
								text: 'The project is considered finished only when all parts are satisfied. No half measures about this.',
							},
							{
								title: 'Implementation and integration',
								text: 'We are proud that we always use best approaches when it comes to Shopify theme development. Every feature we create is implemented with performance, usability and flexibility in mind.',
							},
							{
								text: "We follow latest Shopify standards when writing code. We always go the extra mile and make sure the component we're building isn't just of single-use. Our promise is that you reduce maintenance and build costs on long term.",
							},
							{
								text: 'App integration is always done carefully and we make sure that all third-party blocks fit in design and functionality. We offer support and consultancy in cases where apps fail to align with your theme.',
							},
							{
								title: 'Testing and launch',
								text: 'Stress free Shopify launches is our main goal. We test thoroughly before releasing any feature, we provide preview themes and always verify against deliverables.',
							},
							{
								title: 'Shopify store maintenance',
								text: 'We provide free support for all our work. We also offer affordable on-going maintenance packages or on-demand development hours.',
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
						title={'Our Promise'}
						textContent={[
							<p className="mt-5">
								<strong>Create quality.</strong> We build Shopify stores as you should: completely
								scalable, flexible and re-usable using most performant technology and approaches.
							</p>,
							<p className="mt-5">
								<strong>Prevent technical debt.</strong> No need for a rebuild every year. Our code is
								written correctly so your Shopify components can be used for longer and in unlimited
								ways.
							</p>,
							<p className="mt-5">
								<strong>Reduce maintenance costs.</strong> We enable you to customise your store the way
								it feels right. Cut down on development costs every time you want a small change.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<SplitNav
				leftTitle={'UI/UX Web Design'}
				leftUrl={'/services/ui-ux-web-design'}
				rightTitle={'Shopify Migration'}
				rightUrl={'/services/shopify-migration'}
			/>
		</Layout>
	);
}
