import React from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../../components/layout/layout';
import SlimHero from '../../../components/slim-hero/slim-hero';
import SidewayText from '../../../components/sideways-text-banner/sideway-text-banner';
import VevolSection from '../../../components/general-components/vm-section';
import { Container } from 'bloomer';
import HeadingBlock from '../../../components/heading-block/heading-block';
import ImageWithText from '../../../components/general-components/image-text-simple';
import BottomCTA from '../../../components/bottom-cta/bottom-cta';
import SplitNav from '../../../components/general-components/split-nav';
import { Helmet } from 'react-helmet';

export const data = graphql`
	query {
		imageOneQuery: file(name: { eq: "service-development-promise" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		imageTwoQuery: file(name: { eq: "service-outsource-development" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		bottomBannerImageQuery: file(name: { eq: "bottom-banner" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
	}
`;

export default function PageSingleService({ data }) {
	const { imageOneQuery, imageTwoQuery, bottomBannerImageQuery } = data;
	const imageOneData = getImage(imageOneQuery);
	const imageTwoData = getImage(imageTwoQuery);
	const bottomBannerImage = getImage(bottomBannerImageQuery);

	return (
		<Layout>
			<Helmet>
				<title>Digitalizare IMM - Coordonare Proiecte Fonduri Europene | Vevol Media</title>
				<meta
					name="description"
					content="Coordonăm proiectele de digitalizare pentru IMM-uri din București-Ilfov. Gestionăm implementarea soluțiilor digitale eligibile pentru fondurile europene de până la 300.000 EUR."
				/>
			</Helmet>
			<SlimHero
				heading="Digitalizare IMM"
				subheading="Coordonăm proiectele de digitalizare pentru accesarea fondurilor europene"
			/>
			<SidewayText lineOne={`digitalizare`} lineTwo={'imm'} lineOneRepeat={10} lineTwoRepeat={25} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Coordonăm proiectele de digitalizare'}
						highlightedWord={'Coordonăm'}
						subtitle={
							'Gestionăm implementarea soluțiilor digitale eligibile pentru fondurile europene din Programul Regional București-Ilfov'
						}
						className="mb-4em"
					/>
					<ImageWithText
						image={<GatsbyImage image={imageOneData} alt={'Coordonare Digitalizare IMM - Vevol Media'} />}
						title={'Coordonăm cu fondurile europene'}
						textContent={[
							<p className="mt-5">
								Programul Regional București-Ilfov oferă finanțare de până la 300.000 EUR pentru
								digitalizarea IMM-urilor. Coordonăm implementarea soluțiilor eligibile precum HubSpot
								CRM și monday.com work management.
							</p>,
							<p className="mt-5">
								Gestionăm comunicarea între compania ta, furnizorii de soluții digitale și cerințele
								programului european. Asigurăm că toate tehnologiile implementate sunt pe deplin
								eligibile pentru finanțare.
							</p>,
							<p className="mt-5">
								Coordonăm cu specialiștii în fonduri europene pentru a ne asigura că proiectul respectă
								toate cerințele și că implementarea tehnică corespunde documentației pentru finanțare.
							</p>,
						]}
						greenLine
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Să digitalizăm împreună"
				text="Contactați-ne pentru a discuta cum putem porni proiectul de digitalizare cu fondurile europene"
				url="/ro/contact"
				ctaText={'Verifică disponibilitatea'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageTwoData} alt={'Coordonare Implementare Digitalizare'} />}
						title={'Coordonăm implementarea tehnică'}
						textContent={[
							<p className="mt-5">
								Implementăm soluțiile digitale eligibile pentru fonduri - de la CRM și gestionarea
								proiectelor la portaluri e-commerce și securitate cibernetică. Coordonăm cu toți
								furnizorii pentru integrarea perfectă.
							</p>,
							<p className="mt-5">
								Gestionăm instruirea personalului pentru utilizarea noilor tehnologii. Asigurăm că
								echipa ta este pregătită să folosească eficient soluțiile implementate și să maximizeze
								beneficiile digitalizării.
							</p>,
							<p className="mt-5">
								Coordonăm întregul proces de la evaluarea nevoilor la implementare și optimizare. Ne
								asigurăm că digitalizarea aduce valoare reală afacerii tale și respectă cerințele
								programului european.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<SplitNav
				leftTitle={'Migrări Magazin Online'}
				leftUrl={'/ro/servicii-shopify/migrari'}
				rightTitle={'Aplicații și Integrări'}
				rightUrl={'/ro/servicii-shopify/aplicatii-si-integrari'}
			/>
		</Layout>
	);
}
