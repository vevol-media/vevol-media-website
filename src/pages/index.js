import React from 'react';
import { Helmet } from 'react-helmet';
import { getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import CaseStudiesCarousel from '../components/case-studies-carousel/case-studies-carousel';
import MainForm from '../components/forms/main-form';
import PagespeedChecker from '../components/forms/pagespeed-checker';
import HomepageHero from '../components/homepage-hero/homepage-hero';
import HomepageServices from '../components/homepage-services/homepage-services';
import Layout from '../components/layout/layout';
import ReviewsSection from '../components/reviews-section/reviews-section';
import SidewayText from '../components/sideways-text-banner/sideway-text-banner';
import BottomCTA from '../components/bottom-cta/bottom-cta';
import ImagesMiniBanner from '../components/images-mini-banner/images-mini-banner';

export default function Homepage({ data }) {
	const { bottomBanner } = useStaticQuery(
		graphql`
			query {
				bottomBanner: file(name: { eq: "vevol-media-locations" }) {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		`
	);

	const bottomBannerBackgroundImage = getImage(bottomBanner);
    const images = ["../images/partners/shopify.png", "../images/partners/woocomerce.png", "../images/partners/wordpress.png"]

	return (
		<Layout>
			<Helmet>
				<title>Shopify Experts - Vevol Media</title>
				<script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script>
			</Helmet>
			<HomepageHero />
			<SidewayText lineOne={`ecommerce`} lineTwo={'development'} />
			<HomepageServices />
			<ReviewsSection />
			<CaseStudiesCarousel />
			<PagespeedChecker />
			<MainForm
				title={"Let's Talk About Your Business"}
				subtitle={
					'Get in touch with us if you want to get a quote for your project or if you simply want to say hello! We are friendly!'
				}
			/>
			<BottomCTA
				bgImage={bottomBannerBackgroundImage}
				title="Let's Work Together"
				text="Book a free consultation with one of out team members now"
				url="/"
				gradientColour="black"
			/>
			<ImagesMiniBanner images={images}/>
		</Layout>
	);
}
