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
import { Helmet } from 'react-helmet';

export const data = graphql`
	query {
		imageOneQuery: file(name: { eq: "vevol-media-team-image-3" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		imageTwoQuery: file(name: { eq: "vevol-media-team-image-4" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		bottomBannerImageQuery: file(name: { eq: "bottom-banner" }) {
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
			<Helmet>
				<title>Bespoke Web Development - Vevol Media</title>
				<meta
					name="description"
					content="Our team of Front End and Full Stack Developers can help you build your project from A to Z. We offer custom development services at affordable rates."
				/>
			</Helmet>
			<SlimHero
				heading="Bespoke Web Development Services"
				subheading="Outsource your development work to a team of experienced and trusted developers. White label development options available."
			/>
			<SidewayText lineOne={`bespoke`} lineTwo={'development'} lineOneRepeat={30} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Innovative Development'}
						highlightedWord={'Innovative'}
						subtitle={
							'We love building with latest most performant technologies for the interest of your success.'
						}
						className="mb-4em"
					/>
					<ImageWithText
						image={<GatsbyImage image={imageOneData} alt={'Outsourcing Web Development Services'} />}
						title={'Save on employee costs'}
						textContent={[
							<p className="mt-5">
								Outsourcing development will save your business money and you can get faster, more
								reliable results from a team that is alredy connected and integrated with its processes.
							</p>,
							<p className="mt-5">
								We will work with you and offer consulting on what approaches and technologies are best
								suited for your product. We will plan ahead and work on pre-agreed timelines, deadlines
								or milestones.
							</p>,
							<p className="mt-5">
								We love working Agile so you can either integrate our developers into your company or
								trust us on working as a sylo. Either way, results are always visible, transparent and
								measurable.
							</p>,
						]}
						greenLine
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Let's Work Together"
				text="Get in touch to learn more about our bespoke development services"
				url="/contact"
				ctaText={'Ask for availability'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Websites',
								text: 'We can build various types of websites, for different niches and products.',
							},
							{
								title: 'SAAS',
								text: "Let's build the next ground breaking tech service.",
							},
							{
								title: 'Internal Dashboards',
								text: 'Data reporting or manipulation, graphs and tables.',
							},
							{
								title: 'eCommerce & Brochure Site Themes',
								text: 'Have a design of a Shopify Theme?',
							},
							{
								title: 'Apps, Plugins & Extensions',
								text: 'Shopify apps, Wordpress plugins or Chrome extensions',
							},
						]}
						mainContent={[
							{
								title: 'Technologies we love',
								text: 'Our spectrum of frameworks we use for development is large enough to suit any type of requirement you have. We specialise in working with the following: Vanilla JS, ReactJS, jQuery, NextJS, GatsbyJS, NodeJS, GraphQL, MongoDB, CSS/Sass, Tailwind, Bulma, ChakraUI. Is this enough?',
							},
							{
								text: "This doesn't mean we are limited by the ones above. Did we mention we have Python experience too? At this point, it doesn't really matter. We've got you covered. Just ask away and we can definitely build your next project.",
							},
							{
								title: 'Platforms we work with',
								text: 'Some are pretty common: Wordpress, Woocommerce, Shopify or Webflow. But we do love getting our hands dirty and we can also work with Headless CMS like Strapi, Contentful or Hydrogen.',
							},
							{
								title: 'Consulting',
								text: "If you're still not sure which of the platforms & technologies listed above to use in your next project, that's fine. We will work closely with you and understand ideas, vision and requirements then we will propose the development architecture that is best suited for your business.",
							},
							{
								text: "If your're looking to integrate new developers into an ongoing project, that's fine too. In case there is something that's missing on the list above, just ask. We just probably forgot to write it down.",
							},
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageTwoData} alt={'Why Vevol Media'} />}
						title={'Why Vevol Media?'}
						greenLine
						textContent={[
							<p className="mt-5">
								<strong>Because we love writing beautiful code.</strong> We understand working as a team
								and this results in readable, scalable, clean code.
							</p>,
							<p className="mt-5">
								<strong>Because we love building complex functionalities.</strong> We love challenges
								and we take our energy from delivering exceptional results.
							</p>,
							<p className="mt-5">
								<strong>Because we connect and we understand.</strong> Everyone in our team is invested
								into our projects. We strive for our clients' success as we do for ours.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<SplitNav
				leftTitle={'Shopify Migration'}
				leftUrl={'/services/shopify-migration'}
				rightTitle={'Conversion Rate Optimisation'}
				rightUrl={'/services/conversion-rate-optimisation'}
			/>
		</Layout>
	);
}
