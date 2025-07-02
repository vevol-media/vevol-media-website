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
		imageOneQuery: file(name: { eq: "service-web-design-image-two" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		imageTwoQuery: file(name: { eq: "service-web-design-image-one" }) {
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
				<title>Design Web UI/UX - Vevol Media</title>
				<meta
					name="description"
					content="Design web UI/UX pentru website-ul dumneavoastră. Conversie ridicată și generare de leaduri sunt la coadă de design-ul nostru."
				/>
			</Helmet>
			<SlimHero
				heading="Design Web UI/UX"
				subheading="Transformă website-ul dumneavoastră într-unul minunat cu o nouă privire și sentiment."
			/>
			<SidewayText lineOne={`web`} lineTwo={'design'} lineOneRepeat={30} lineTwoRepeat={15} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Focusat pe Web'}
						highlightedWord={'Web'}
						subtitle={
							'Website-uri eCommerce sau brochure, atunci când vine vorba de design, trebuie să se deosebească și să convertească.'
						}
						className="mb-4em"
					/>
					<ImageWithText
						image={<GatsbyImage image={imageOneData} alt={'Web Design Vevol Media'} />}
						title={'Concepție Idei'}
						textContent={[
							<p className="mt-5">
								Începem procesul nostru de design prin a învăța despre identitatea dumneavoastră de
								brand, valorile dumneavoastră și clienții dumneavoastră. and your customers.
							</p>,
							<p className="mt-5">
								Folosim tehnici și abordări moderne pentru a ne asigura că toate părțile implicate în
								proces sunt mulțumite de rezultate: de la proprietar la utilizator.
							</p>,
							<p className="mt-5">
								Ne place să gândim în afara cutiei și design-urile noastre corespund viziunii noastre.
								Ele sunt captivante, noi și pe punct și convertează.
							</p>,
						]}
						greenLine
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Să lucrăm împreună"
				text="Contactați-ne pentru a afla mai multe despre serviciile noastre de dezvoltare bespoke"
				url="/ro/contact"
				ctaText={'Cere disponibilitate'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageTwoData} alt={'UI/UX Design Package'} />}
						title={'Totul într-un pachet'}
						textContent={[
							<p className="mt-5">
								Nu trebuie să vă faceți griji despre nimic. Vom crea design-uri mobile, wireframes,
								mockups și procesul va fi transparent.
							</p>,
							<p className="mt-5">
								Există o infinitate de revizii pe care le puteți solicita. Nu ne oprim până când
								design-ul corespunde așteptărilor.
							</p>,
							<p className="mt-5">
								Rezultatele vor fi accesibile și disponibile pentru previzualizare, partajare,
								descărcare și chiar editare.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<SplitNav
				leftTitle={'Optimizare Rate de Conversie'}
				leftUrl={'/ro/servicii-shopify/cro-optimizare-rata-conversie'}
				rightTitle={'Dezvoltare Teme'}
				rightUrl={'/ro/servicii-shopify/dezvoltare-teme'}
			/>
		</Layout>
	);
}
