import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import ServicesList from '../components/services-list/services-list';
import { graphql } from 'gatsby';

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
	}
`;

export default function ServicesPage({ data }) {
	return (
		<Layout>
			<SlimHero
				heading="What can we do"
				subheading="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
			/>
			<ServicesList data={data} backgroundWhite />
		</Layout>
	);
}
