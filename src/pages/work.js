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
import TagNav from '../components/general-components/tag-nav';
import VideoBanner from '../components/video-banner/video-banner';

export const data = graphql`
	query {
		simpleImagesQuery: allFile(filter: { relativeDirectory: { eq: "portfolio-featured-images" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 750, quality: 100)
				}
			}
		}
		featuredImagesQuery: allFile(filter: { relativeDirectory: { eq: "case-studies-featured-images" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
				}
			}
		}
	}
`;

export default function WorkPage({ data }) {
	const { simpleImagesQuery, featuredImagesQuery } = data;
	const withCaseStudy = portfolio.filter((item) => item.hasCaseStudy);
	const withoutCaseStudy = portfolio.filter((item) => !item.hasCaseStudy);

	return (
		<Layout isTransparent>
			<Helmet>
				<title>Success Stories in our Portfolio - Vevol Media - Shopify Experts</title>
				<meta
					name="description"
					content="We love building quality, conversion-oriented websites. See our work and let's build a success story for your business."
				/>
			</Helmet>
			{/* <SlimHero
				heading="Check Out Our Work"
				subheading="We build eCommerce and brochure websites with passion and we are proud of the results. Have a look at our latest projects."
			/> */}
			<VideoBanner />
			<TagNav isBuildsPage={true} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Check Out Our Featured Work'}
						highlightedWord={'Featured'}
						subtitle={'Read more about the context, the process and the results'}
					/>
					<FeaturedWork projectsList={withCaseStudy} images={featuredImagesQuery.nodes} />
					<p style={{ marginBottom: '2rem', fontWeight: 500 }}>
						We build{' '}
						<a href="/apps" style={{ color: '#00b386', textDecoration: 'underline' }}>
							Shopify apps
						</a>{' '}
						too, check them out
					</p>
				</Container>
			</VevolSection>
			<SidewayText lineOne={`building`} lineTwo={'ecommerce'} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'See More Awesomness'}
						highlightedWord={'Awesomness'}
						subtitle={'We love showcasing what we can do. Click away and see for yourself.'}
					/>
					<GridList items={withoutCaseStudy} imagesData={simpleImagesQuery.nodes} />
				</Container>
			</VevolSection>
		</Layout>
	);
}
