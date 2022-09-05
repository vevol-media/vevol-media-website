import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
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
import PagespeedChecker from '../components/forms/pagespeed-checker';
import BottomCTA from '../components/bottom-cta/bottom-cta';

export const data = graphql`
	query {
		portfolioFeaturedImagesQuery: allFile(filter: { relativeDirectory: { eq: "portfolio-featured-images" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 750)
				}
			}
		}
		bottomBannerImageQuery: file(name: { eq: "bottom-banner" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 })
			}
		}
	}
`;

export default function Homepage({ data }) {
	const { bottomBannerImageQuery, portfolioFeaturedImagesQuery } = data;
	const bottomBannerImage = getImage(bottomBannerImageQuery);

	return (
		<Layout>
			<Helmet>
				<title>Shopify Experts - Vevol Media</title>
				<script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js" async></script>
			</Helmet>
			<HomepageHero />
			<SidewayText lineOne={`ecommerce`} lineTwo={'development'} />
			<HomepageServices />
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
					/>
				</Container>
			</VevolSection>
			{/* <PagespeedChecker /> */}
			{/* <BottomCTA
				bgImage={bottomBannerImage}
				title="Let's Work Together"
				text="Book a free consultation with one of out team members now"
				url="/"
				gradientColour="black"
			/> */}
		</Layout>
	);
}
