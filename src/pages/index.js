import React from 'react';
import { Helmet } from 'react-helmet';
import CaseStudiesCarousel from '../components/case-studies-carousel/case-studies-carousel';
import HomepageHero from '../components/homepage-hero/homepage-hero';
import HomepageServices from '../components/homepage-services/homepage-services';
import Layout from '../components/layout/layout';
import ReviewsSection from '../components/reviews-section/reviews-section';
import SidewayText from '../components/sideways-text-banner/sideway-text-banner';

export default function Homepage({ data }) {
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
		</Layout>
	);
}
