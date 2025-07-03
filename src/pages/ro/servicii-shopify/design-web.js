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
				<title>Design Web UI/UX - Coordonare Design eCommerce | Vevol Media</title>
				<meta
					name="description"
					content="Coordonăm procesul de design web UI/UX pentru magazine online. Gestionăm comunicarea între designeri, dezvoltatori și echipa de marketing pentru rezultate optimale."
				/>
			</Helmet>
			<SlimHero
				heading="Design Web UI/UX"
				subheading="Coordonăm procesul de design pentru a transforma viziunea în realitate digitală"
			/>
			<SidewayText lineOne={`web`} lineTwo={'design'} lineOneRepeat={30} lineTwoRepeat={15} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Coordonăm procesul de design'}
						highlightedWord={'Coordonăm'}
						subtitle={
							'Gestionăm comunicarea între designeri, dezvoltatori și echipa de marketing pentru rezultate care convertează'
						}
						className="mb-4em"
					/>
					<ImageWithText
						image={<GatsbyImage image={imageOneData} alt={'Coordonare Design Web - Vevol Media'} />}
						title={'Coordonăm viziunea cu implementarea'}
						textContent={[
							<p className="mt-5">
								Începem prin a înțelege identitatea brandului, valorile și clienții, apoi coordonăm 
								între echipa de design și echipa de dezvoltare pentru a transforma viziunea în realitate.
							</p>,
							<p className="mt-5">
								Gestionăm comunicarea între toate părțile implicate - de la proprietar la designer, 
								de la dezvoltator la utilizator final. Asigurăm că fiecare persoană înțelege și 
								contribuie la obiectivul comun.
							</p>,
							<p className="mt-5">
								Coordonăm cu echipa de marketing pentru a ne asigura că designul nu doar arată bine, 
								ci și convertează. Gestionăm feedback-ul și reviziile pentru a ajunge la rezultatul optim.
							</p>,
						]}
						greenLine
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Să coordonăm designul împreună"
				text="Contactați-ne pentru a discuta cum putem coordona procesul de design cu echipa dumneavoastră"
				url="/ro/contact"
				ctaText={'Cere discuție'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageTwoData} alt={'Coordonare Proces Design'} />}
						title={'Coordonăm întregul proces'}
						textContent={[
							<p className="mt-5">
								Gestionăm comunicarea între toate echipele implicate - designeri, dezvoltatori, 
								marketing și voi. Asigurăm că fiecare persoană știe ce trebuie să facă și când.
							</p>,
							<p className="mt-5">
								Coordonăm reviziile și feedback-ul între toate părțile implicate. Nu ne oprim 
								până când designul corespunde așteptărilor tuturor și este gata pentru implementare.
							</p>,
							<p className="mt-5">
								Asigurăm că toate materialele de design sunt organizate, accesibile și gata 
								pentru dezvoltatori. Gestionăm versiunile și asigurăm că toată lumea lucrează 
								cu fișierele corecte.
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
