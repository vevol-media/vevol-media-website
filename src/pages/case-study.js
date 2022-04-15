import * as React from 'react';
import Layout from '../components/layout/layout';
import InfoPageIntro from '../components/case-study/info-page-intro';
import InfoPageText from '../components/case-study/info-page-text';
import SimpleImageCarousel from '../components/case-study/simple-image-carousel';
import InformationalContent from '../components/case-study/informational-content';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/case-study.scss';
import heroBg from '../images/hero-background-2.jpg'

const CaseStudy = () => {
	return (
		<Layout>
			<InfoPageIntro
				supraheading="Banding, Email &amp; Marketing, Website Development"
				heading="MARGEE SHOPIFY STORE"
				src ={heroBg}
			/>

			<div className=' vm-section--white'>
				<Container>
					<InfoPageText/>
				</Container>
			</div>

			<Container>
					<SimpleImageCarousel/>
					<InformationalContent/>
			</Container>
		</Layout>
	);
};
export default CaseStudy;