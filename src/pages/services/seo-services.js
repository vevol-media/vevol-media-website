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
		imageOneQuery: file(name: { eq: "service-seo-analysis" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
			}
		}
		imageTwoQuery: file(name: { eq: "service-technical-seo" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
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
				<title>Expert eCommerce SEO Services - Vevol Media</title>
				<meta
					name="description"
					content="We offer professional SEO services with visible results in the first 3 months. ✔️ Ireland based B2B Company. ☝ Get in touch with our specialists!"
				/>
			</Helmet>
			<SlimHero
				heading="eCommerce SEO Services"
				subheading="Take your business to next level with help from our search engine optimisation experts. Audits, reports, strategies and, most importantly, results are what we offer."
			/>
			<SidewayText lineOne={`ecommerce`} lineTwo={'seo'} lineTwoRepeat={30} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Reach New Heights'}
						highlightedWord={'Heights'}
						subtitle={
							"Your website has unlimited potential. Let's work together and enable your business to grow further and further."
						}
						className="mb-4em"
					/>
					<ImageWithText
						image={<GatsbyImage image={imageOneData} alt={'SEO Services Vevol Media'} />}
						title={'In-depth Analysis Of Your Business Niche & Performance Report'}
						textContent={[
							<p className="mt-5">
								We perform a competitive analysis of your website against the most relevant competitors
								in your niche.
							</p>,
							<p className="mt-5">
								We create reports which include how your site performs according to a series of SEO
								metrics such as domain authority, inbound links, keyword rankings, monthly organic
								traffic, site speed, social sharing and more.
							</p>,
						]}
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
						sidebarContentTitle="Our SEO Services Include:"
						sidebarContentIsList
						sidebarContent={[
							{
								text: 'SEO Keyword Research',
							},
							{
								text: 'Competitor Analysis',
							},
							{
								text: 'SEO Audit & Planning',
							},
							{
								text: 'On-Page SEO and Off-Page SEO',
							},
							{
								text: 'Technical SEO',
							},
							{
								text: 'Link Building Campaigns',
							},
							{
								text: 'Local SEO Services',
							},
							{
								text: 'eCommerce SEO',
							},
							{
								text: 'Content Management',
							},
							{
								text: 'Content Planning and Content Creation',
							},
							{
								text: 'Search Engine Marketing (SEM)',
							},
						]}
						mainContent={[
							{
								title: 'Why Should You Invest In SEO Services?',
								text: 'We have a broad range of effective SEO techniques to help you drive organic traffic and boost your website’s rankings.',
							},
							{
								text: 'So, why should you invest in SEO services? An optimised website provides a fantastic user experience and drives more traffic which means that more people discover your products or services at no additional cost.',
							},
							{
								text: 'If you combine your SEO efforts with excellent content marketing strategies, you’ll also increase your authority and gain the trust of potential customers in the research phase.',
							},
							{
								text: 'What matters most regarding SEO is discovering, communicating and building strong relationships with your target audience. ',
							},
							{
								text: 'So let us help communicate with your customers of tomorrow and prove to Google how valuable your content is for your audience. ',
							},
							{
								text: 'Want to improve your Search Engine Optimisation, your content strategy or find the keywords your audience is searching for? ',
							},
							{
								text: 'Get in touch with us today!',
							},
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<ImageWithText
						alignRight
						greenLine
						image={<GatsbyImage image={imageTwoData} alt={'Technical SEO Audit'} />}
						title={'Technical SEO'}
						textContent={[
							<p className="mt-5">
								Organic SEO depends not only on content but also how the content is layed out on your
								website. A fast, responsive and well built website will help you grow at a quicker pace.
							</p>,
							<p className="mt-5">
								We keep informed with latest Google's requirements when it comes to the technical side
								of SEO and our experts have extensive knowledge implementing it.
							</p>,
							<p className="mt-5">
								Structured data, site speed, indexation, accessiblity and canonicalisation are just a
								few of the areas we can help you with. Get in touch today!
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<SplitNav
				leftTitle={'Conversion Rate Optimisation'}
				leftUrl={'/services/conversion-rate-optimisation'}
				rightTitle={'UI/UX Web Design'}
				rightUrl={'/services/ui-ux-web-design'}
			/>
		</Layout>
	);
}
