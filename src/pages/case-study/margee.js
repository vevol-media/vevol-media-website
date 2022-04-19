import * as React from 'react';
import Layout from '../../components/layout/layout';
import InfoPageIntro from '../../components/case-study/info-page-intro';
import InfoPageText from '../../components/case-study/info-page-text';
import SimpleImageCarousel from '../../components/case-study/simple-image-carousel';
import InformationalContent from '../../components/case-study/informational-content';
import ProjectsList from '../../components/projects-list/projects-list';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from 'bloomer';
import { leftBarArr, pageContent } from '../../enums/margee-case-study';
import '../../styles/margee.scss';

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
				supraheading="Banding, Email &amp; Marketing, Website Development"
				heading="MARGEE SHOPIFY STORE"
			/>

			<div className="vm-section--white">
				<InfoPageText
					leftBar={leftBarArr}
					contentTitle="Overview"
					contentText={pageContent}
				/>
			</div>

			<SimpleImageCarousel storePath={props.location.pathname} />

			<InformationalContent data={storesPhotos} storePath={props.location.pathname} />

			<div className="vm-section--white">
				<ProjectsList data={storesPhotos} />
			</div>
		</Layout>
	);
};
export default CaseStudy;
