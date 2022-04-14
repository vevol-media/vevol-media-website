import * as React from 'react';
import Layout from '../components/layout/layout';
import InfoPageIntro from '../components/case-study/info-page-intro';
import InfoPageText from '../components/case-study/info-page-text';
import SimpleImageCarousel from '../components/case-study/simple-image-carousel';
import InformationalContent from '../components/case-study/informational-content';
import '../styles/case-study.scss';

const CaseStudy = () => {
	return (
		<Layout>
			<InfoPageIntro/>
            <InfoPageText/>
            <SimpleImageCarousel/>
            <InformationalContent/>
		</Layout>
	);
};
export default CaseStudy;