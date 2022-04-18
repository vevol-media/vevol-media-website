import * as React from 'react';
import Layout from '../../components/layout/layout';
import InfoPageIntro from '../../components/case-study/info-page-intro';
import InfoPageText from '../../components/case-study/info-page-text';
// import SimpleImageCarousel from '../../components/case-study/simple-image-carousel';
import InformationalContent from '../../components/case-study/informational-content';
import ProjectsList from '../../components/projects-list/projects-list';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from 'bloomer';
import { leftBarArr, pageContent } from '../../enums/margee-case-study';
import { StaticImage } from 'gatsby-plugin-image';
import '../../styles/margee.scss';
// import data from '../../pages/index';

const splidePhotos = graphql`
	query CasesPhotos {
		allFile(filter: { relativeDirectory: { eq: "projects-example" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: TRACED_SVG)
				}
			}
		}
	}
`;

const CaseStudy = () => {
	const data = useStaticQuery(splidePhotos);

	return (
		<Layout vm-header__extra-nav--white>
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
				<InformationalContent />
			</Container>

			<div className=" vm-section--white">
				<Container>
					<ProjectsList data={data} />
				</Container>
			</div>

		</Layout>
	);
};
export default CaseStudy;
