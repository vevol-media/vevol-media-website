import * as React from 'react';
import Layout from '../../components/layout/layout';
import InfoPageIntro from '../../components/case-study/info-page-intro';
import InfoPageText from '../../components/case-study/info-page-text';
import SimpleImageCarousel from '../../components/case-study/simple-image-carousel';
import InformationalContent from '../../components/case-study/informational-content';
import { Container } from 'bloomer';
import { leftBarArr, pageContent } from '../../enums/margee-case-study'
import { StaticImage } from 'gatsby-plugin-image';
import '../../styles/margee.scss';

const CaseStudy = () => {
	return (
		<Layout vm-header__extra-nav--white >
			<InfoPageIntro
				supraheading="Banding, Email &amp; Marketing, Website Development"
				heading="MARGEE SHOPIFY STORE"
			/>

			<div className="page-intro-img">
				<StaticImage
					className="intro-img"
					src="../../images/hero-background-2.jpg"
					layout="fullWidth"
					alt="hero background"
					placeholder="blurred"
					transformOptions={{ fit: 'cover', cropFocus: 'attention' }}
				/>
			</div>

			<div className=" vm-section--white">
				<Container>
					<InfoPageText
						leftBar={leftBarArr}
						contentTitle="Overview"
						contentText={pageContent}
					/>
				</Container>
			</div>

			<Container>
				<SimpleImageCarousel />
				<InformationalContent />
			</Container>
		</Layout>
	);
};
export default CaseStudy;
