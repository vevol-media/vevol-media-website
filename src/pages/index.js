import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/layout';
import HomepageHero from '../components/homepage-hero/homepage-hero';
import SidewayText from '../components/sideways-text-banner/sideway-text-banner';
import HomepageServices from '../components/homepage-services/homepage-services';
import ReviewsSection from '../components/reviews-section/reviews-section';
import VevolSection from '../components/general-components/vm-section';
import { Container } from 'bloomer/lib/layout/Container';
import HeadingBlock from '../components/heading-block/heading-block';
import PortfolioCarousel from '../components/portfolio-carousel/portfolio-carousel';
import portfolio from '../enums/portfolio';
import ImagesMiniBanner from '../components/images-mini-banner/images-mini-banner';

export const data = graphql`
	query {
		portfolioFeaturedImagesQuery: allFile(filter: { relativeDirectory: { eq: "portfolio-featured-images" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 750, quality: 100)
				}
			}
		}
		partnersImages: allFile(filter: { relativeDirectory: { eq: "platforms" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, height: 60, quality: 100)
				}
			}
		}
	}
`;

export default function Homepage({ data }) {
	const { portfolioFeaturedImagesQuery, partnersImages } = data;

	return (
		<Layout>
			<Helmet>
				<title>Shopify Experts - Vevol Media</title>
			</Helmet>
			<HomepageHero />
			<SidewayText lineOne={`ecommerce`} lineTwo={'development'} />
			<HomepageServices />
			<ImagesMiniBanner images={partnersImages.nodes} />
			<ReviewsSection />
			<VevolSection whiteBackground>
				<Container>
					<HeadingBlock
						title={'Our previously successful projects'}
						highlightedWord={'successful'}
						subtitle={'Proven track record of our hard work.'}
						className="mb-4em"
					/>
					<PortfolioCarousel
						projectsList={portfolio}
						imagesData={portfolioFeaturedImagesQuery.nodes}
						backgroundWhite
						cutBottomPadding
					/>
				</Container>
			</VevolSection>
		</Layout>
	);
}
