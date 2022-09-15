import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import VevolSection from '../components/general-components/vm-section';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import PartnersSection from '../components/partners-section/partners-section';
import partnersList from '../enums/partners';

export const data = graphql`
	query {
		partnersQuery: allFile(filter: { relativeDirectory: { eq: "partners-network" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: TRACED_SVG, height: 60, quality: 100)
				}
			}
		}
	}
`;

export default function Page({ data }) {
	const { partnersQuery } = data;
	const partnersLogos = partnersQuery.nodes;

	return (
		<Layout>
			<Helmet>
				<title>Trusted Partners Network - Vevol Media</title>
				<meta
					name="description"
					content="Find a digital company recommended by Vevol Media. Our trusted partners range from Shopify Apps to Theme Developers, Development Agencies or SAAS providers."
				/>
			</Helmet>
			<SlimHero
				heading="Trusted Partners"
				subheading="We have created a curated list of partners that offer services or software at high quality and in high demand."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<PartnersSection
						logos={partnersLogos}
						partnersList={partnersList.sort((a, b) => a.name.localeCompare(b.name))}
					/>
				</Container>
			</VevolSection>
		</Layout>
	);
}
