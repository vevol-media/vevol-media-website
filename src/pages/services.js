import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import ServicesList from '../components/services-list/services-list';
import SidewayText from '../components/sideways-text-banner/sideway-text-banner';
import { graphql } from 'gatsby';
import services from '../enums/services';
import { Container } from 'bloomer';
import HeadingBlock from '../components/heading-block/heading-block';
import ImagesMiniBanner from '../components/images-mini-banner/images-mini-banner';
import VevolSection from '../components/general-components/vm-section';

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
		technologies: allFile(filter: { relativeDirectory: { eq: "technologies" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(
						placeholder: DOMINANT_COLOR
						blurredOptions: { width: 20 }
						height: 60
						quality: 100
					)
				}
			}
		}
	}
`;

export default function ServicesPage({ data }) {
	const { servicesIcons, technologies } = data;

	return (
		<Layout handle="services">
			<SlimHero
				heading="What We Can Do For You"
				subheading="Let us help you take your brand to new heights with our variety of cutting-edge eCommerce services. From Bespoke and Shopify Development to SEO Services and UX/UI Design - Vevol Media is your go-to destination if you want to take your business to the next level."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'We Love Beautiful Code'}
						highlightedWord={'Code'}
						subtitle={"Clean, scalable, flexible and re-usable. That's our way of writing code."}
					/>
					<ServicesList
						imageData={servicesIcons.nodes}
						services={services.dev}
						backgroundWhite
						topMargin
						linkText={'Read more'}
					/>
				</Container>
			</VevolSection>
			<SidewayText lineOne={`ecommerce`} lineTwo={'development'} />
			<VevolSection backgroundColour={'white'}>
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
			</VevolSection>
			<ImagesMiniBanner images={technologies.nodes} />
		</Layout>
	);
}
