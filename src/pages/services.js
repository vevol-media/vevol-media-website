import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import ServicesList from '../components/services-list/services-list';
import SidewayText from '../components/sideways-text-banner/sideway-text-banner';
import { graphql } from 'gatsby';
import services from '../enums/services';
import { Container, Title } from 'bloomer';

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
		topoPattern: allFile(filter: { name: { eq: "topo-pattern" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 150 })
				}
			}
		}
		topoPattern2: allFile(filter: { name: { eq: "06" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 150 })
				}
			}
		}
	}
`;

export default function ServicesPage({ data }) {
	return (
		<Layout>
			<SlimHero
				heading="What can we do"
				subheading="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
			/>
			<div className="vm-section vm-bg--white">
				<Container>
					<div className="heading-block">
						<Title tag="h2" isSize={1}>
							We love beautiful <span>code</span>
						</Title>
						<p>Clean, scalable, flexible and re-usable. That's our way of writing code.</p>
					</div>
					<ServicesList imageData={data} services={services.dev} backgroundWhite topMargin />
				</Container>
			</div>
			<SidewayText lineOne={`ecommerce`} lineTwo={'development'} />
			<div className="vm-section vm-bg--white">
				<Container>
					<div className="heading-block heading-block--align-right">
						<Title tag="h2" isSize={1}>
							We speak <span>eCommerce</span>
						</Title>
						<p>Let us take your brand to the next level. Of awesomeness!</p>
					</div>
					<ServicesList imageData={data} services={services.ecommerce} backgroundWhite topMargin />
				</Container>
			</div>
		</Layout>
	);
}
