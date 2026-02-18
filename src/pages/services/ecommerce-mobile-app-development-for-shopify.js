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
import SplitNav from '../../components/general-components/split-nav';
import { Helmet } from 'react-helmet';

export const data = graphql`
	query {
		imageOneQuery: file(name: { eq: "vevol-media-team-image-2" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
			}
		}
		imageTwoQuery: file(name: { eq: "vevol-media-team-shopify" }) {
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

const WHAT_YOU_GET_ROWS = [
	{ feature: 'Home & Promotional Screens', description: 'Dynamic banners, promos, content zones' },
	{ feature: 'Catalog & Search', description: 'Collection filters, full-text search, sorting' },
	{ feature: 'Product Pages', description: 'Variants, images, reviews, descriptions' },
	{ feature: 'Cart & Checkout', description: 'Persistent cart, editing, integrated checkout' },
	{ feature: 'User Account & Orders', description: 'Login, order history, profile' },
	{ feature: 'Push Notifications', description: 'Alerts, promos, transactional messages' },
	{ feature: 'Branding & Theming', description: 'Custom styles / layouts per client' },
	{ feature: 'App Store Setup', description: 'Submission, compliance, versioning' },
];

const PROCESS_STEPS = [
	'Discovery & scope',
	'Architecture & prototype',
	'Core build',
	'Theming & client UI',
	'QA & testing',
	'App store deployment',
	'Launch & optimization',
	'Ongoing updates',
];

const WHY_VEVOL_BULLETS = [
	'Deep Shopify expertise (themes, custom dev, migrations)',
	'Reusable modular system reduces future build cost',
	'End-to-end support: design, API integration, publishing, maintenance',
	'Partnership mindset — we grow with you, evolve the product over time',
	'Proven delivery and quality (see our Shopify portfolio)',
];

export default function PageEcommerceMobileApp({ data }) {
	const { imageOneQuery, imageTwoQuery, bottomBannerImageQuery } = data;
	const imageOneData = getImage(imageOneQuery);
	const imageTwoData = getImage(imageTwoQuery);

	const bottomBannerImage = getImage(bottomBannerImageQuery);

	return (
		<Layout>
			<Helmet>
				<title>eCommerce Mobile App Development for Shopify - Vevol Media</title>
				<meta
					name="description"
					content="Transform your Shopify store into a high-performance mobile app. Boost retention, conversions, and customer loyalty with custom iOS & Android apps built for speed, scalability, and seamless Shopify integration."
				/>
			</Helmet>
			<SlimHero
				heading="Turn Your Shopify Store into a Powerful Native App"
				subheading="Deliver a high-performance mobile experience your customers will love. Push notifications, fast browsing, seamless checkout — all synced with your Shopify backend."
			/>
			<SidewayText lineOne="mobile" lineTwo="app" lineOneRepeat={15} lineTwoRepeat={20} />
			<VevolSection backgroundColour="white">
				<Container>
					<HeadingBlock
						title="Why Build a Mobile App?"
						highlightedWord="Mobile"
						subtitle="Mobile traffic dominates. But mobile web has friction: slow loading, re-login, limited engagement. A native app cuts that lag, enhances retention, and gives you a direct channel (push). For brands aiming to deepen loyalty, increase repeat purchases, or stand out in a crowded market, a well-built app is the logical next step."
						className="mb-4em"
					/>
					<ImageWithText
						image={<GatsbyImage image={imageOneData} alt="eCommerce Mobile App Development - Vevol Media" />}
						title="Our Approach: Modular, Scalable, Future-Proof"
						textContent={[
							<p className="mt-5">
								We don&apos;t reinvent the wheel every time. We build a robust, modular backend + API layer
								that we reuse. On top of that, we layer UI theming so each client gets a distinct brand
								feel. As we evolve features (new modules, upgrades), we push updates across all clients.
							</p>,
						]}
						greenLine
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour="grey">
				<Container>
					<HeadingBlock
						title="What You Get"
						highlightedWord="Get"
						subtitle=""
						className="mb-4em"
					/>
					<div className="vm-service-table-wrapper">
						<table className="vm-service-table">
							<thead>
								<tr>
									<th>Feature</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								{WHAT_YOU_GET_ROWS.map((row) => (
									<tr key={row.feature}>
										<td>{row.feature}</td>
										<td>{row.description}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="mt-5">
						<strong>Add-ons:</strong> loyalty / rewards, AR / 3D previews, subscription module, chat
						integration, localization, advanced analytics.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour="white">
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageTwoData} alt="Mobile app process - Vevol Media" />}
						title="Process & Timeline"
						greenLine
						textContent={[
							<ul key="process" className="mt-5 vm-service-list">
								{PROCESS_STEPS.map((step) => (
									<li key={step}>{step}</li>
								))}
							</ul>,
							<p className="mt-5">
								A typical launch (for a standard app) often spans 4–8 weeks, depending on complexity,
								number of modules, and review cycles.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour="grey">
				<Container>
					<HeadingBlock
						title="Why Vevol Media?"
						highlightedWord="Vevol"
						subtitle=""
						className="mb-4em"
					/>
					<ul className="vm-service-list vm-service-list--bullets">
						{WHY_VEVOL_BULLETS.map((bullet) => (
							<li key={bullet}>{bullet}</li>
						))}
					</ul>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Let's build your app"
				text="Ready to transform your store into an app? Share your catalog size, key flows, design preferences, and we'll map out a tailored mobile strategy."
				url="/contact"
				ctaText="Book a call"
				gradientColour="black"
			/>
			<SplitNav
				leftTitle="Shopify Apps"
				leftUrl="/services/shopify-apps"
				rightTitle="Conversion Rate Optimisation"
				rightUrl="/services/conversion-rate-optimisation"
			/>
		</Layout>
	);
}
