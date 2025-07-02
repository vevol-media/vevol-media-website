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
		imageOneQuery: file(name: { eq: "service-cro-analysis" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		imageTwoQuery: file(name: { eq: "service-cro-results" }) {
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
				<title>Optimizare Ratei de Conversie - Vevol Media</title>
				<meta
					name="description"
					content="Specializăm în CRO eCommerce. Vom analiza și vom genera rapoarte, vom planifica acțiuni și vom implementa sugestiile acordate."
				/>
			</Helmet>
			<SlimHero
				heading="Optimizare Ratei de Conversie"
				subheading="Creșteți numărul de vânzări prin ajustarea website-ului dumneavoastră pentru CRO."
			/>
			<SidewayText lineOne={`conversion`} lineTwo={'rate'} lineTwoRepeat={30} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'CRO la centru al succesului'}
						highlightedWord={'succes'}
						subtitle={
							'Când website-ul dumneavoastră are un trafic ridicat, dar vânzări scăzute, CRO este primul pe lista de acțiuni.'
						}
						className="mb-4em"
					/>
					<ImageWithText
						image={<GatsbyImage image={imageOneData} alt={'CRO Vevol Media'} />}
						title={'Analiză și Rapoarte'}
						textContent={[
							<p className="mt-5">
								Datele nu mint. Când vine vorba de CRO, noi întotdeauna rulăm analiza inițială a
								datelor, în scopul de a înțelege situația actuală.
							</p>,
							<p className="mt-5">
								Colectarea datelor poate fi făcută într-o captură sau putem ajuta să vă integrați
								servicii de hărți de căldură. Acestea ne vor oferi o imagine mai detaliată despre cum
								utilizatorul potential gândește și de ce nu convertește.
							</p>,
							<p className="mt-5">
								Rapoartele periodice vor fi generate, pe baza tipului de date colectat. Aceste rapoarte
								vor include acțiuni și strategii de implementat pentru rate de conversie mai ridicate.
							</p>,
							<p className="mt-5">
								Toate strategiile noastre sunt aliniate cu standardele industriale cele mai recente, pe
								baza nichului dumneavoastră, tipologiei utilizatorilor și UX/UI.
							</p>,
						]}
						greenLine
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Să lucrăm împreună"
				text="Contactați-ne pentru a afla mai multe despre serviciile noastre de CRO"
				url="/ro/contact"
				ctaText={'Cere disponibilitate'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageTwoData} alt={'Vevol Media CRO Results'} />}
						title={'Implementare și Rezultate'}
						textContent={[
							<p className="mt-5">
								Toate acțiunile și strategiile din rapoartele noastre pot fi implementate imediat de
								către echipa noastră. Unele vor necesita dezvoltare, altele pot fi luate de dvs.
							</p>,
							<p className="mt-5">
								Ar trebui să vedeți rezultate de la început, în special în cazul în care elementele de
								bază ale ratei de conversie sunt lipsite.
							</p>,
							<p className="mt-5">
								Misiunea noastră nu se termină aici. Continuăm să lucrăm cu dvs. și urmărim progresul în
								mod constant, în scopul ajustării oricăror strategii necesare.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<SplitNav
				leftTitle={'Dezvoltare Shopify Plus'}
				leftUrl={'/ro/servicii-shopify/shopify-plus'}
				rightTitle={'Dezvoltare Teme Shopify'}
				rightUrl={'/ro/servicii-shopify/dezvoltare-teme'}
			/>
		</Layout>
	);
}
