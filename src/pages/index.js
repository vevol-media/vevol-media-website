import React from 'react';
import { Helmet } from 'react-helmet';
import { getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import MainForm from '../components/forms/main-form';
import PagespeedChecker from '../components/forms/pagespeed-checker';
import HomepageHero from '../components/homepage-hero/homepage-hero';
import HomepageServices from '../components/homepage-services/homepage-services';
import Layout from '../components/layout/layout';
import ReviewsSection from '../components/reviews-section/reviews-section';
import SidewayText from '../components/sideways-text-banner/sideway-text-banner';
import BottomCTA from '../components/bottom-cta/bottom-cta';
import PortfolioCarousel from '../components/portfolio-carousel/portfolio-carousel';
import portfolio from '../enums/portfolio';

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
			<PortfolioCarousel
				projectsList={portfolio}
				imagesData={portfolioFeaturedImagesQuery.nodes}
				backgroundWhite
			/>
			{/* <PagespeedChecker /> */}
			<MainForm
				title={"Let's Talk About Your Business"}
				subtitle={
					'Get in touch with us if you want to get a quote for your project or if you simply want to say hello! We are friendly!'
				}
			/>
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
