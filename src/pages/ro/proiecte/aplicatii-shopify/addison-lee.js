import React from 'react';
import Layout from '../../../../components/layout/layout';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import VevolSection from '../../../../components/general-components/vm-section';
import { Container, Title } from 'bloomer';
import SimpleImageCarousel from '../../../../components/simple-image-carousel/simple-image-carousel';
import Quote from '../../../../components/general-components/quote';
import appsPortfolio from '../../../../enums/apps';
import SlimHero from '../../../../components/slim-hero/slim-hero';
import { Link } from 'gatsby';

export const query = graphql`
	query AddisonLeeImagesRo {
		images: allFile(filter: { relativeDirectory: { eq: "apps-case-studies/addison-lee" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, width: 800, quality: 90)
				}
			}
		}
	}
`;

export default function AddisonLeePage({ data }) {
	const app = appsPortfolio.ro.find((a) => a.internalUrl === '/ro/proiecte/aplicatii-shopify/addison-lee');
	const caseStudy = app?.caseStudy;
	const images = data.images.nodes;

	console.log(images);

	return (
		<Layout>
			<Helmet>
				<title>{caseStudy?.title || app.name} | Vevol Media</title>
				<meta name="description" content={caseStudy?.description || app.description} />
			</Helmet>
			<SlimHero heading={caseStudy?.title || app.name} subheading={caseStudy?.description || app.description} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<div className="mt-5">
						<Title tag="h2" isSize={5}>
							Problema detectată
						</Title>
						<ul style={{ listStyleType: 'circle', paddingLeft: 24 }}>
							{caseStudy?.problem?.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					</div>
					<div className="mt-5">
						<Title tag="h2" isSize={5}>
							Soluția implementată
						</Title>
						<ul style={{ listStyleType: 'circle', paddingLeft: 24 }}>
							{caseStudy?.solution?.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					</div>
					<div className="mt-5">
						<Title tag="h2" isSize={5}>
							Tehnologii folosite
						</Title>
						<div className="case-study__tech-tags">
							{caseStudy?.technologies?.map((tech, i) => (
								<span key={i} className="case-study__tech-tag">
									{tech}
								</span>
							))}
						</div>
					</div>
					{app.isPublic && app.externalUrl && (
						<div className="mt-5">
							<a
								href={app.externalUrl}
								target="_blank"
								rel="noreferrer"
								className="vm-button vm-button--black"
							>
								Vezi pe Shopify App Store
							</a>
						</div>
					)}
					<Link
						to="/ro/proiecte/aplicatii-shopify"
						style={{
							display: 'inline-block',
							margin: '24px 0 0 0',
							color: '#222',
							textDecoration: 'none',
							fontWeight: 500,
							fontSize: '1rem',
						}}
					>
						&#8592; Înapoi la aplicații
					</Link>
				</Container>
			</VevolSection>
			{/* Screenshots section, only if images exist */}
			{images.length > 0 && (
				<VevolSection backgroundColour={'grey'}>
					<Container>
						<SimpleImageCarousel imagesArray={images} />
					</Container>
				</VevolSection>
			)}
			{/* Optional: Quote section if available in the future */}
			{caseStudy?.quote && (
				<VevolSection backgroundColour={'white'}>
					<Container>
						<Quote firstPart={caseStudy.quote} />
					</Container>
				</VevolSection>
			)}
			{/* Optional: Quote section if available in the future */}
			{caseStudy?.quote && (
				<VevolSection backgroundColour={'white'}>
					<Container>
						<Quote firstPart={caseStudy.quote} />
					</Container>
				</VevolSection>
			)}
		</Layout>
	);
}
