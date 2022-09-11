import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import ServicesList from '../components/services-list/services-list';
import SidewayText from '../components/sideways-text-banner/sideway-text-banner';
import { graphql } from 'gatsby';
import services from '../enums/services';
import { Container } from 'bloomer';
import HeadingBlock from '../components/heading-block/heading-block';
import { Helmet } from 'react-helmet';

export const data = graphql`
	query {
		servicesIcons: allFile(filter: { relativeDirectory: { eq: "services-icons" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 20 }, width: 40, quality: 100)
				}
			}
		}
		devFrameworks: allFile(filter: { relativeDirectory: { eq: "dev-frameworks" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 20 }, width: 150, quality: 100)
				}
			}
		}
	}
`;

export default function ServicesPage({ data }) {
	const { servicesIcons, devFrameworks } = data;

	return (
		<Layout>
			<Helmet>
				<title>eCommerce Focused Services - Development & Growth - Vevol Media</title>
				<meta
					name="description"
					content="Increase your online revenue with our effective eCommerce services. ✔️ Ireland based B2B Company. ☝ Get in touch with our specialists!"
				/>
			</Helmet>
			<SlimHero
				heading="What We Can Do For You"
				subheading="Let us help you take your brand to new heights with our variety of cutting-edge eCommerce services. From Bespoke and Shopify Development to SEO Services and UX/UI Design - Vevol Media is your go-to destination if you want to take your business to the next level."
			/>
			<div className="vm-section vm-bg--white">
				<Container>
					<HeadingBlock
						title={'We Love Beautiful Code'}
						highlightedWord={'Code'}
						subtitle={"Clean, scalable, flexible and re-usable. That's our way of writing code."}
					/>
					<ServicesList imageData={servicesIcons.nodes} services={services.dev} backgroundWhite topMargin />
				</Container>
			</div>
			<SidewayText lineOne={`ecommerce`} lineTwo={'development'} />
			<div className="vm-section vm-bg--white">
				<Container>
					<HeadingBlock
						title={'We speak eCommerce'}
						highlightedWord={'eCommerce'}
						subtitle={'Let us take your brand to the next level. Of awesomeness!'}
						alignRight
					/>
					<ServicesList
						imageData={servicesIcons.nodes}
						services={services.ecommerce}
						backgroundWhite
						topMargin
					/>
				</Container>
			</div>
		</Layout>
	);
}
