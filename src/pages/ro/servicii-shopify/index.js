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
				<title>Servicii Focusate pe eCommerce - Dezvoltare și Creștere - Vevol Media</title>
				<meta
					name="description"
					content="Augmentează veniturile online cu serviciile noastre eficiente. Companie irlandeză B2B. Contactează-ne cu specialiștii noștri!"
				/>
			</Helmet>
			<SlimHero
				heading="Ce putem face pentru tine"
				subheading="Lăsați-ne să vă ajutăm să vă ridicați brandul la noi înălțimi cu varietatea de servicii eCommerce de ultimă oră. De la Dezvoltare Bespoke și Shopify până la Servicii SEO și Design UX/UI - Vevol Media este destinul dacă doriți să vă ridicați la următorul nivel."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Ne place codul frumos'}
						highlightedWord={'Cod'}
						subtitle={'Curat, scalabil, flexibil și reutilizabil. Asta este modul nostru de a scrie cod.'}
					/>
					<ServicesList
						imageData={servicesIcons.nodes}
						services={services.ro.dev}
						backgroundWhite
						topMargin
						linkText={'Citește mai mult'}
					/>
				</Container>
			</VevolSection>
			<SidewayText lineOne={`ecommerce`} lineTwo={'development'} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Vorbim eCommerce'}
						highlightedWord={'eCommerce'}
						subtitle={
							'Lăsați-ne să vă ajutăm să vă ridicați brandul la următorul nivel. De la frumos la minunat!'
						}
						alignRight
					/>
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
