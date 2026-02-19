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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const data = graphql`
	query {
		imageOneQuery: file(name: { eq: "vevol-media-team-image-2" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
			}
		}
		imageTwoQuery: file(name: { eq: "vevol-media-team-shopify" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
			}
		}
		bottomBannerImageQuery: file(name: { eq: "bottom-banner" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
	}
`;

const WHAT_YOU_GET_ROWS = [
	{
		feature: 'Ecran principal și secțiuni promoționale',
		description: 'Bannere dinamice, promoții și zone dedicate de conținut',
	},
	{
		feature: 'Catalog și căutare',
		description: 'Filtre pe colecții, căutare full-text și opțiuni de sortare',
	},
	{
		feature: 'Pagini de produs',
		description: 'Variante, galerie de imagini, recenzii și descrieri detaliate',
	},
	{
		feature: 'Coș și finalizare comandă',
		description: 'Coș persistent, editare produse și checkout integrat',
	},
	{
		feature: 'Cont utilizator și comenzi',
		description: 'Autentificare, istoric comenzi și gestionare profil',
	},
	{
		feature: 'Notificări push',
		description: 'Alerte, promoții și mesaje tranzacționale',
	},
	{
		feature: 'Branding și teme',
		description: 'Stiluri și layout-uri personalizate pentru fiecare client',
	},
	{
		feature: 'Publicare în App Store',
		description: 'Trimitere spre aprobare, conformitate și gestionare versiuni',
	},
];


const PROCESS_STEPS = [
	'Descoperire și definire obiective',
	'Arhitectură și prototip',
	'Dezvoltare funcționalități principale',
	'Branding și interfață client',
	'Testare și control calitate',
	'Publicare în App Store / Google Play',
	'Lansare și optimizare',
	'Actualizări și întreținere continuă',
];

const WHY_VEVOL_BULLETS = [
	'Expertiză profundă Shopify (teme, dezvoltare personalizată, migrații)',
	'Sistem modular reutilizabil care reduce costurile viitoare de dezvoltare',
	'Suport complet: design, integrare API, publicare și întreținere',
	'Mentalitate de parteneriat — creștem împreună cu tine și evoluăm produsul în timp',
	'Livrare și calitate dovedite (vezi portofoliul nostru Shopify)',
];

export default function PageAppMobilEcommerceShopify({ data }) {
	const { imageOneQuery, imageTwoQuery, bottomBannerImageQuery } = data;
	const imageOneData = getImage(imageOneQuery);
	const imageTwoData = getImage(imageTwoQuery);
	const bottomBannerImage = getImage(bottomBannerImageQuery);

	return (
		<Layout>
			<Helmet>
				<title>Dezvoltare aplicații mobile eCommerce pentru Shopify - Vevol Media</title>
				<meta
					name="description"
					content="Transformă magazinul Shopify într-o aplicație mobile performantă. Crește retenția, conversiile și loialitatea clienților cu aplicații iOS și Android personalizate, rapide, scalabile și integrate perfect cu Shopify."
				/>
			</Helmet>
			<SlimHero
				heading="Transformă magazinul tău Shopify într-o aplicație nativă puternică"
				subheading="Oferă o experiență mobile de înaltă performanță pe care clienții o vor iubi. Notificări push, navigare rapidă, checkout fără cusur — totul sincronizat cu backend-ul Shopify."
			/>
			<SidewayText lineOne="aplicație" lineTwo="mobilă" lineOneRepeat={12} lineTwoRepeat={20} />
			<VevolSection backgroundColour="white">
				<Container>
					<HeadingBlock
						title="De ce să construiești o aplicație mobilă?"
						highlightedWord="mobilă"
						subtitle="Traficul mobil domină. Însă web-ul mobil are încă fricțiuni: încărcare lentă, reconectări frecvente, nivel scăzut de angajament. O aplicație nativă elimină acest decalaj, crește retenția și îți oferă un canal direct de comunicare (push notifications). Pentru brandurile care urmăresc loialitate mai profundă, achiziții repetate sau să se diferențieze într-o piață aglomerată, o aplicație bine construită este următorul pas logic."
						className="mb-4em"
					/>
					<ImageWithText
						image={
							<GatsbyImage image={imageOneData} alt="Dezvoltare aplicații mobile eCommerce - Vevol Media" />
						}
						title="Abordarea noastră: modulară, scalabilă, orientată spre viitor"
						textContent={[
							<p className="mt-5">
								Nu refacem roata de fiecare dată. Construim un backend + strat API modular și robust pe care
								îl refolosim. Peste acesta adăugăm teme UI astfel încât fiecare client să aibă un
								branding distinct. Pe măsură ce evoluăm funcționalitățile (module noi, upgrade-uri),
								propagăm actualizările la toți clienții.
							</p>,
						]}
						greenLine
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour="grey">
				<Container>
					<HeadingBlock
						title="Ce primești"
						highlightedWord="primești"
						subtitle=""
						className="mb-4em"
					/>
					<div className="vm-service-table-wrapper">
						<table className="vm-service-table">
							<thead>
								<tr>
									<th>Funcționalitate</th>
									<th>Descriere</th>
								</tr>
							</thead>
							<tbody>
								{WHAT_YOU_GET_ROWS.map((row) => (
									<tr key={row.feature}>
										<td>{row.feature}</td>
										<td>{row.description}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="mt-5">
						<strong>Suplimente:</strong> loialitate / recompense, AR / previzualizări 3D, modul abonamente,
						integrare chat, localizare, analitică avansată.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour="white">
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageTwoData} alt="Proces aplicație mobilă - Vevol Media" />}
						title="Proces și plan de implementare"
						greenLine
						textContent={[
							<ul key="process" className="mt-5 vm-service-list">
								{PROCESS_STEPS.map((step) => (
									<li key={step}>
										<FontAwesomeIcon icon={faCheck} className="mr-2" />{step}</li>
								))}
							</ul>,
							<p className="mt-5">
								O lansare tipică (pentru o aplicație standard) durează de obicei 4–8 săptămâni, în funcție
								de complexitate, număr de module și ciclurile de review.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour="grey">
				<Container>
					<HeadingBlock
						title="De ce Vevol Media?"
						highlightedWord="Vevol"
						subtitle=""
						className="mb-4em"
					/>
					<ul className="vm-service-list vm-service-list--bullets">
						{WHY_VEVOL_BULLETS.map((bullet) => (
							<li key={bullet}>{bullet}</li>
						))}
					</ul>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Hai să construim aplicația ta"
				text="Gata să transformi magazinul într-o aplicație? Spune-ne dimensiunea catalogului, fluxurile cheie, preferințele de design, și îți vom schița o strategie mobile personalizată."
				url="/ro/contact"
				ctaText="Programează un apel"
				gradientColour="black"
			/>
			<SplitNav
				leftTitle="Aplicații Shopify"
				leftUrl="/ro/servicii-shopify/aplicatii-si-integrari"
				rightTitle="Optimizare rată conversie"
				rightUrl="/ro/servicii-shopify/cro-optimizare-rata-conversie"
			/>
		</Layout>
	);
}
