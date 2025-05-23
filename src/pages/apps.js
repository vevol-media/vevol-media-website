import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import AppsSection from '../components/partners-section/apps-section';
import appsPortfolio from '../enums/apps';
import VevolSection from '../components/general-components/vm-section';
import { Container, Title } from 'bloomer';
import TagNav from '../components/general-components/tag-nav';

export const data = graphql`
	query {
		appsImages: allFile(filter: { relativeDirectory: { eq: "apps" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, width: 600, quality: 90)
				}
			}
		}
	}
`;

export default function AppsPage({ data }) {
	const { appsImages } = data;

	const appsWithImages = appsPortfolio.map((app) => {
		const imageNode = appsImages.nodes.find((img) => img.name === app.featuredImage);
		return {
			...app,
			featuredImage: imageNode ? imageNode.childImageSharp : null,
		};
	});

	return (
		<Layout>
			<Helmet>
				<title>Shopify Apps Directory - Vevol Media</title>
				<meta name="description" content="Browse Vevol Media's public, external, and custom Shopify apps." />
			</Helmet>
			<SlimHero
				heading="Shopify Apps Directory"
				subheading="Explore our public, external, and custom Shopify apps."
			/>
			<TagNav isBuildsPage={false} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<Title tag="h3" isSize={3} hasTextAlign="centered">
						Our apps
					</Title>
					<p
						className="apps-page__subtitle"
						style={{ textAlign: 'center', margin: '0 auto 2em auto', color: '#444' }}
					>
						We build apps for our customers to bring value and enhance Shopify as a platform. Our team has
						experience building both public and custom apps, so we know the process inside out. We create
						apps to connect Shopify with other external platforms, and we also build public apps to bring
						solutions to existing problems in the market.
					</p>
					<AppsSection apps={appsWithImages} />
				</Container>
			</VevolSection>
		</Layout>
	);
}
