import React from 'react';
import { Helmet } from 'react-helmet';
import CaseStudiesCarousel from '../components/case-studies-carousel/case-studies-carousel';
import MainForm from '../components/forms/main-form';
import PagespeedChecker from '../components/forms/pagespeed-checker';
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
			<PagespeedChecker />
			<MainForm
				title={"Let's Talk About Your Business"}
				subtitle={
					'Get in touch with us if you want to get a quote for your project or if you simply want to say hello! We are friendly!'
				}
			/>
			<Helmet>
				<script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script>
			</Helmet>
		</Layout>
	);
}
