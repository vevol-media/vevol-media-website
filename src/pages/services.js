import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import ServicesList from '../components/services-list/services-list';
import SidewayText from '../components/sideways-text-banner/sideway-text-banner';
import { graphql } from 'gatsby';
import services from '../enums/services';
import { Container } from 'bloomer';
import MainForm from '../components/forms/main-form';
import HeadingBlock from '../components/heading-block/heading-block';

export const data = graphql`
	query {
		servicesIcons: allFile(filter: { relativeDirectory: { eq: "services-icons" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 20 }, width: 40)
				}
			}
		}
		devFrameworks: allFile(filter: { relativeDirectory: { eq: "dev-frameworks" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 20 }, width: 150)
				}
			}
		}
	}
`;

export default function ServicesPage({ data }) {
	const { servicesIcons, devFrameworks } = data;

	return (
		<Layout>
			<SlimHero
				heading="What can we do"
				subheading="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
			/>
			<div className="vm-section vm-bg--white">
				<Container>
					<HeadingBlock
						title={'We love beautiful code'}
						highlightedWord={'code'}
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
			<MainForm
				title={"Let's Talk About Your Business"}
				subtitle={
					'Get in touch with us if you want to get a quote for your project or if you simply want to say hello! We are friendly!'
				}
			/>
		</Layout>
	);
}
