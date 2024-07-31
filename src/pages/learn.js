import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import FeaturedWork from '../components/featured-work/featured-work';
import HeadingBlock from '../components/heading-block/heading-block';
import VevolSection from '../components/general-components/vm-section';
import { graphql } from 'gatsby';

export const data = graphql`
	query {
		learnImagesQuery: allFile(filter: { relativeDirectory: { eq: "learn" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
				}
			}
		}
	}
`;

export default function LearnPage({ data }) {
	const { learnImagesQuery } = data;

	const learnPages = [
		{
			name: 'eCommerce Glossary',
			description:
				'Master eCommerce Jargon: Your Definitive Glossary of 100+ Terms to Excel in the Shopify Landscape',
			internalUrl: '/ecommerce-glossary/',
			featuredImage: 'ecommerce-glossary',
		},
		{
			name: 'Shopify Setup Checklist',
			description:
				'Get your Shopify store up and running with our comprehensive checklist. Optimise your store for success with our easy-to-follow guide.',
			internalUrl: '/blog/the-complete-shopify-checklist-for-an-easy-shopify-store-setup',
			featuredImage: 'shopify-setup-checklist',
		},
	];

	return (
		<Layout>
			<SlimHero
				heading="Shared Knowledge"
				subheading="Our eCommerce and Shopify Experts share their knowledge and experience to help you grow your business. Check out the latest insights."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Learn with Vevol Media'}
						highlightedWord={'Learn'}
						subtitle={'Find out more about eCommerce, Shopify and how to grow your business'}
					/>
					<FeaturedWork projectsList={learnPages} images={learnImagesQuery.nodes} ctaText={'Find Out More'} />
				</Container>
			</VevolSection>
		</Layout>
	);
}
