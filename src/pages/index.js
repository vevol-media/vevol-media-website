import React from 'react';
import { Helmet } from 'react-helmet';
import { getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import CaseStudiesCarousel from '../components/case-studies-carousel/case-studies-carousel';
import HomepageHero from '../components/homepage-hero/homepage-hero';
import HomepageServices from '../components/homepage-services/homepage-services';
import Layout from '../components/layout/layout';
import ReviewsSection from '../components/reviews-section/reviews-section';
import SidewayText from '../components/sideways-text-banner/sideway-text-banner';
import BottomCTA from '../components/bottom-cta/bottom-cta';

export default function Homepage({ data }) {
	const { placeholderImage } = useStaticQuery(
		graphql`
			query {
				placeholderImage: file(relativePath: { eq: "bottom-cta-banner.jpg" }) {
					childImageSharp {
						gatsbyImageData(transformOptions: {cropFocus: CENTER}, placeholder: BLURRED)
					}
				}
			}
		`
	);

	const bgImage = getImage(placeholderImage);

	return (
		<Layout>
			<HomepageHero />
			<SidewayText lineOne={`ecommerce`} lineTwo={'development'} />
			<HomepageServices />
			<ReviewsSection />
			<CaseStudiesCarousel />
			<Helmet>
				<script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script>
			</Helmet>
			<BottomCTA
				bgImage={bgImage}
				title="Let's Work Together"
				text="Book a free consultation with one of out team members now"
				url="/"
			/>
		</Layout>
	);
}
