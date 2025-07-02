import Layout from '../../../../components/layout/layout';
import React from 'react';
import SlimHero from '../../../../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import FeaturedWork from '../../../../components/featured-work/featured-work';
import HeadingBlock from '../../../../components/heading-block/heading-block';
import VevolSection from '../../../../components/general-components/vm-section';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import SidewayText from '../../../../components/sideways-text-banner/sideway-text-banner';
import portfolio from '../../../../enums/portfolio';
import GridList from '../../../../components/grid-list/grid-list';
import TagNav from '../../../../components/general-components/tag-nav';

export const data = graphql`
	query {
		simpleImagesQuery: allFile(filter: { relativeDirectory: { eq: "portfolio-featured-images" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 750, quality: 100)
				}
			}
		}
		featuredImagesQuery: allFile(filter: { relativeDirectory: { eq: "case-studies-featured-images" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
				}
			}
		}
	}
`;

export default function WorkPage({ data }) {
	const { simpleImagesQuery, featuredImagesQuery } = data;
	const withCaseStudy = portfolio.filter((item) => item.hasCaseStudy);
	const withoutCaseStudy = portfolio.filter((item) => !item.hasCaseStudy);

	return (
		<Layout>
			<Helmet>
				<title>Proiecte în portofoliu - Vevol Media - Experți Shopify</title>
				<meta
					name="description"
					content="Construim magazine online cu pasiune și suntem mândri de rezultate. Vezi proiectele noastre recente."
				/>
			</Helmet>
			<SlimHero
				heading="Vezi Proiectele Noastre"
				subheading="Construim magazine online cu pasiune și suntem mândri de rezultate. Vezi proiectele noastre recente."
			/>
			<TagNav isBuildsPage={true} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Vezi Proiectele Noastre'}
						highlightedWord={'Proiecte'}
						subtitle={'Citește mai multe despre context, proces și rezultate'}
					/>
					<FeaturedWork projectsList={withCaseStudy} images={featuredImagesQuery.nodes} />
					<p style={{ marginBottom: '2rem', fontWeight: 500 }}>
						Construim{' '}
						<a
							href="/ro/proiecte/magazine-shopify"
							style={{ color: '#00b386', textDecoration: 'underline' }}
						>
							magazine online
						</a>{' '}
						cu pasiune și suntem mândri de rezultate.
					</p>
				</Container>
			</VevolSection>
			<SidewayText lineOne={`magazine`} lineTwo={'online'} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Vezi Proiectele Noastre'}
						highlightedWord={'Proiecte'}
						subtitle={'Citește mai multe despre context, proces și rezultate'}
					/>
					<GridList items={withoutCaseStudy} imagesData={simpleImagesQuery.nodes} />
				</Container>
			</VevolSection>
		</Layout>
	);
}
