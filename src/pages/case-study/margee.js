import * as React from 'react';
import Layout from '../../components/layout/layout';
import InfoPageIntro from '../../components/case-study/info-page-intro';
import InfoPageText from '../../components/case-study/info-page-text';
import SimpleImageCarousel from '../../components/case-study/simple-image-carousel';
import InformationalContent from '../../components/case-study/informational-content';
import ProjectsList from '../../components/projects-list/projects-list';
import { graphql, useStaticQuery } from 'gatsby';
import { leftBarArr, pageContent } from '../../enums/margee-case-study';

const nodeBgPhotos = graphql`
	query CasesPhotos {
		allFile(filter: { relativeDirectory: { eq: "stores-banners" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: TRACED_SVG)
				}
			}
		}
	}
`;

const CaseStudy = (props) => {
	const storesPhotos = useStaticQuery(nodeBgPhotos);

	return (
		<Layout>
			<InfoPageIntro
				data={storesPhotos}
				storePath={props.location.pathname}
				supraheading="Branding, Email &amp; Marketing, Website Development"
				heading="MARGEE SHOPIFY STORE"
			/>

			<InfoPageText
				background="vm-bg--white"
				leftBarArray={leftBarArr}
				contentTitle="Overview"
				contentText={pageContent}
			/>

			<SimpleImageCarousel storePath={props.location.pathname} backgroundCarousel="black" backgroundContent="white"/>

			<InformationalContent 
				data={storesPhotos}
				storePath={props.location.pathname}
				informationalText={'Is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'}
				rateConversion={'4.00%'}
				conversionConversion={'220%+'}
				orderConversion={' 30%'}
			/>

			<ProjectsList data={storesPhotos} background="vm-bg--white" />
		</Layout>
	);
};
export default CaseStudy;
