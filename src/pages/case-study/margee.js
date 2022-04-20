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
				bg="vm-bg--white"
				leftBar={leftBarArr}
				contentTitle="Overview"
				contentText={pageContent}
			/>

			<SimpleImageCarousel storePath={props.location.pathname} bgCarousel="vm-bg--black" bgContent="vm-bg--white"/>

			<InformationalContent data={storesPhotos} storePath={props.location.pathname} />

			<ProjectsList data={storesPhotos} bg="vm-bg--white" />
		</Layout>
	);
};
export default CaseStudy;
