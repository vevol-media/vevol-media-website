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
					content="Coordonăm strategiile CRO cu echipa ta de marketing. Implementăm tehnic sugestiile și urmărim progresul pentru rezultate măsurabile."
				/>
			</Helmet>
			<SlimHero
				heading="Optimizare Ratei de Conversie"
				subheading="Transformă vizitatorii în clienți prin coordonarea strategiilor CRO cu implementarea tehnică."
			/>
			<SidewayText lineOne={`conversion`} lineTwo={'rate'} lineTwoRepeat={30} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'CRO coordonat pentru rezultate'}
						highlightedWord={'rezultate'}
						subtitle={
							'Când ai trafic dar nu convertește, problema nu e întotdeauna marketingul. Suntem aici să implementăm tehnic strategiile CRO.'
						}
						className="mb-4em"
					/>
					<ImageWithText
						image={<GatsbyImage image={imageOneData} alt={'CRO Vevol Media'} />}
						title={'Analiză și Coordonare'}
						textContent={[
							<p className="mt-5">
								Începem cu o analiză completă a datelor tale. Nu inventăm metrici - lucrăm cu ce ai deja
								și identificăm unde se pierd clienții.
							</p>,
							<p className="mt-5">
								Integrăm hărți de căldură și tool-uri de analiză pentru a vedea exact cum se comportă
								utilizatorii. Apoi traducem aceste date în acțiuni concrete.
							</p>,
							<p className="mt-5">
								Generăm rapoarte clare cu priorități de implementare. Nu doar sugestii - planuri de
								acțiune pe care le putem implementa împreună cu echipa ta.
							</p>,
							<p className="mt-5">
								Strategiile sunt personalizate pentru afacerea ta, nu template-uri generice. Luăm în
								considerare tipul de produse, publicul țintă și experiența utilizatorului.
							</p>,
						]}
						greenLine
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Spune-ne despre proiectul tău"
				text="Discută cu noi despre cum putem implementa strategiile CRO pentru magazinul tău"
				url="/ro/contact"
				ctaText={'Verifică disponibilitatea'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageTwoData} alt={'Vevol Media CRO Results'} />}
						title={'Implementare și Urmărire'}
						textContent={[
							<p className="mt-5">
								Implementăm tehnic toate modificările necesare - de la ajustări simple în Shopify până
								la dezvoltări personalizate. Unele le poți face tu, altele le facem noi.
							</p>,
							<p className="mt-5">
								Vezi îmbunătățiri rapide, mai ales dacă elementele de bază lipsesc. Nu promitem miracole
								- doar implementare corectă a strategiilor CRO.
							</p>,
							<p className="mt-5">
								Nu te lăsăm singur după implementare. Urmărim progresul și ajustăm strategiile pe măsură
								ce evoluează afacerea ta.
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
