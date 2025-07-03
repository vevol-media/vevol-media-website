import Layout from '../../../components/layout/layout';
import React from 'react';
import SlimHero from '../../../components/slim-hero/slim-hero';
import ServicesList from '../../../components/services-list/services-list';
import SidewayText from '../../../components/sideways-text-banner/sideway-text-banner';
import { graphql } from 'gatsby';
import services from '../../../enums/services';
import { Container } from 'bloomer';
import HeadingBlock from '../../../components/heading-block/heading-block';
import { Helmet } from 'react-helmet';
import VevolSection from '../../../components/general-components/vm-section';

export const data = graphql`
	query {
		servicesIcons: allFile(filter: { relativeDirectory: { eq: "services-icons" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 20 }, width: 40, quality: 100)
				}
			}
		}
	}
`;

export default function ServicesPage({ data }) {
	const { servicesIcons } = data;

	return (
		<Layout>
			<Helmet>
				<title>Servicii Shopify România - Partener Certificat Dezvoltare eCommerce</title>
				<meta
					name="description"
					content="Servicii complete Shopify în România: dezvoltare magazine, Shopify Plus, migrare, aplicații, SEO și CRO. Partener oficiali pentru soluții enterprise."
				/>
			</Helmet>
			<SlimHero
				heading="Servicii Shopify România"
				subheading="Parteneri Certificați pentru Soluții eCommerce Complete"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Ce oferim companiilor din România'}
						highlightedWord={'companiilor'}
						subtitle={'Soluții eCommerce de la startup la enterprise'}
					/>
					<p className="py-6">
						Oferim servicii complete Shopify adaptate pieței românești: de la dezvoltarea de magazine online personalizate la implementarea soluțiilor enterprise Shopify Plus. Echipa noastră de experți certificați asigură că magazinul dvs. este optimizat pentru performanță, SEO și conversii în contextul specific al pieței românești.
					</p>
					<ServicesList
						imageData={servicesIcons.nodes}
						services={services.ro.dev}
						backgroundWhite
						topMargin
						linkText={'Citește mai mult'}
					/>
				</Container>
			</VevolSection>
			<SidewayText lineOne={`shopify`} lineTwo={'expertise'} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Expertise Tehnică Avansată'}
						highlightedWord={'Tehnică'}
						subtitle={
							'Cod curat, scalabil și performant'
						}
						alignRight
					/>
					<p className="py-6">
						Scriem cod curat, scalabil și reutilizabil pentru toate proiectele Shopify. Abordarea noastră tehnică combină cele mai bune practici din industrie cu soluții personalizate pentru fiecare client, asigurând că magazinele sunt pregătite pentru creștere pe termen lung.
					</p>
					<ServicesList
						imageData={servicesIcons.nodes}
						services={services.ro.ecommerce}
						backgroundWhite
						topMargin
					/>
				</Container>
			</VevolSection>
		</Layout>
	);
}
