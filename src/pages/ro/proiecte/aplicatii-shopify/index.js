import Layout from '../../../../components/layout/layout';
import React from 'react';
import SlimHero from '../../../../components/slim-hero/slim-hero';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import AppsSection from '../../../../components/partners-section/apps-section';
import appsPortfolio from '../../../../enums/apps';
import VevolSection from '../../../../components/general-components/vm-section';
import { Container, Title } from 'bloomer';
import TagNav from '../../../../components/general-components/tag-nav';

export const data = graphql`
	query {
		appsImages: allFile(filter: { relativeDirectory: { eq: "apps" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, width: 600, quality: 90)
				}
			}
		}
	}
`;

export default function AppsPage({ data }) {
	const { appsImages } = data;

	const appsWithImages = appsPortfolio.ro.map((app) => {
		const imageNode = appsImages.nodes.find((img) => img.name === app.featuredImage);

		return {
			...app,
			featuredImage: imageNode ? imageNode.childImageSharp : null,
		};
	});

	return (
		<Layout>
			<Helmet>
				<title>Aplicații Shopify - Vevol Media</title>
				<meta
					name="description"
					content="Navighează prin aplicațiile noastre publice, externe și customizate."
				/>
			</Helmet>
			<SlimHero
				heading="Aplicații Shopify"
				subheading="Explorează aplicațiile noastre publice, externe și customizate."
			/>
			<TagNav isBuildsPage={false} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<Title tag="h3" isSize={3} hasTextAlign="centered">
						Aplicațiile noastre
					</Title>
					<p
						className="apps-page__subtitle"
						style={{ textAlign: 'center', margin: '0 auto 2em auto', color: '#444' }}
					>
						Construim aplicații pentru clienții noștri pentru a aduce valoare și a îmbunătăți Shopify ca
						platformă. Echipa noastră are experiență în construirea atât a aplicațiilor publice, cât și a
						celor customizate, așa că știm procesul de la A la Z. Creăm aplicații pentru a conecta Shopify
						cu alte platforme externe, și construim aplicațiile publice pentru a aduce soluții la probleme
						existente pe piață.
					</p>
					<AppsSection apps={appsWithImages} />
				</Container>
			</VevolSection>
		</Layout>
	);
}
