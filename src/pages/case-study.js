import * as React from 'react';
import Layout from '../components/layout/layout';
import InfoPageIntro from '../components/case-study/info-page-intro';
import InfoPageText from '../components/case-study/info-page-text';
import SimpleImageCarousel from '../components/case-study/simple-image-carousel';
import InformationalContent from '../components/case-study/informational-content';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import '../styles/case-study.scss';

const CaseStudy = () => {
	return (
		<Layout>
			<SlimHero
				heading="MARGEE SHOPIFY STORE"
				subheading="Branding, Email &amp; SMS Marketing, Website Development"
			/>

			<Container>
				<InfoPageIntro/>
				<InfoPageText/>
				<SimpleImageCarousel/>
				<InformationalContent/>
			</Container>
		</Layout>
	);
};
export default CaseStudy;