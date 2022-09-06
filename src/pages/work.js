import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import FeaturedWork from '../components/featured-work/featured-work';
import HeadingBlock from '../components/heading-block/heading-block';
import VevolSection from '../components/general-components/vm-section';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import SidewayText from '../components/sideways-text-banner/sideway-text-banner';
import portfolio from '../enums/portfolio';
import GridList from '../components/grid-list/grid-list';

export const data = graphql`
	query {
		images: allFile(filter: { relativeDirectory: { eq: "portfolio-featured-images" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 750, quality: 100)
				}
			}
		}
	}
`;

export default function WorkPage({ data }) {
	const portfolioImages = data.images.nodes;
	const withCaseStudy = portfolio.filter((item) => item.hasCaseStudy);
	const withoutCaseStudy = portfolio.filter((item) => !item.hasCaseStudy);

	return (
		<Layout>
			<Helmet>
				<title>A list of our succesful projects - Vevol Media - Shopify Experts</title>
			</Helmet>
			<SlimHero
				heading="Check out our work"
				subheading="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
			/>
			<VevolSection whiteBackground>
				<Container>
					<HeadingBlock
						title={'Check out our featured work'}
						highlightedWord={'featured'}
						subtitle={'Read more about the context, the process and the results'}
					/>
					<FeaturedWork projectsList={withCaseStudy} images={portfolioImages} />
				</Container>
			</VevolSection>
			<SidewayText lineOne={`building`} lineTwo={'ecommerce'} />
			<VevolSection whiteBackground>
				<Container>
					<HeadingBlock
						title={'Check out our featured work'}
						highlightedWord={'featured'}
						subtitle={'Read more about the context, the process and the results'}
					/>
					<GridList items={withoutCaseStudy} imagesData={portfolioImages} />
				</Container>
			</VevolSection>
		</Layout>
	);
}
