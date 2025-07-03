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
import SidebarInfoText from '../../../components/general-components/sidebar-info-text';
import SplitNav from '../../../components/general-components/split-nav';

export const data = graphql`
	query {
		imageOneQuery: file(name: { eq: "vevol-media-team-image-2" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
			}
		}
		imageTwoQuery: file(name: { eq: "shopify-store-example" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
			}
		}
		bottomBannerImageQuery: file(name: { eq: "shopify-development-code" }) {
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
			<SlimHero
				heading="Aplicații și Integrări Shopify"
				subheading="Construim aplicații personalizate și integrăm sistemul tău Shopify cu toate instrumentele de care ai nevoie. Suntem puntea tehnică între afacerea ta și toate serviciile care te ajută să crești."
			/>
			<SidewayText lineOne={`shopify`} lineTwo={'development'} lineOneRepeat={15} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Aplicații și Integrări care Conectează Totul'}
						highlightedWord={'Shopify'}
						subtitle={
							'Extindem funcționalitatea magazinului tău Shopify cu funcționalități care te ajută să crești'
						}
						className="mb-2em"
					/>
					<p className="mb-6">
						Ca parteneri Shopify din 2018, înțelegem că magazinul tău online nu funcționează singur.
						Construim aplicațiile personalizate și integrăm toate sistemele care îți fac afacerea să
						funcționeze ca o mașină bine unsă. Suntem cei care ne asigurăm că totul comunică cu succes.
					</p>
					<ImageWithText
						image={
							<GatsbyImage
								image={imageOneData}
								alt={'Shopify Development - Vevol Media'}
								loading="lazy"
							/>
						}
						title={'Soluții care Se Potrivesc cu Afacerea Ta'}
						textContent={[
							<p className="mt-5">
								De la aplicații personalizate la integrări cu sistemele tale existente, construim
								soluțiile tehnice care îți permit să te concentrezi pe creșterea afacerii.
							</p>,
							<p className="mt-5">
								Lucrăm cu echipa ta de marketing, SEO și CRO pentru a ne asigura că toate modificările
								tehnice sprijină strategiile lor și nu le împiedică.
							</p>,
							<p className="mt-5">
								Construim aplicații care se integrează perfect cu Shopify și cu toate instrumentele pe
								care le folosești deja, fără să trebuiască să schimbi nimic în modul în care lucrezi.
							</p>,
						]}
						greenLine
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Să Construim Împreună"
				text="Hai să vorbim despre cum putem conecta toate sistemele tale și să construim aplicațiile de care ai nevoie"
				url="/ro/contact"
				ctaText={'Verifică disponibilitatea'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Aplicații Personalizate',
								text: 'Construim aplicații unice care reflectă brandul tău și îmbunătățesc experiența clienților',
							},
							{
								title: 'Shopify Functions',
								text: 'Dezvoltăm funcții personalizate pentru checkout care îți permit să controlezi logica de business',
							},
							{
								title: 'Checkout Extensions',
								text: 'Creează experiențe de checkout unice cu extensii personalizate care îți aparțin',
							},
							{
								title: 'Thank You Page Extensions',
								text: 'Optimizează pagina de mulțumire pentru conversii mai bune și experiențe post-cumpărare',
							},
							{
								title: 'Integrări Sistem',
								text: 'Conectăm Shopify cu toate instrumentele tale - de la ERP la marketing automation',
							},
							{
								title: 'Optimizare Performanță',
								text: 'Ne asigurăm că toate integrările funcționează rapid și nu încetinesc magazinul',
							},
							{
								title: 'Testare Completă',
								text: 'Testăm totul pe toate dispozitivele pentru a ne asigura că funcționează perfect.',
							},
						]}
						mainContent={[
							{
								title: 'Abordare de Coordonare Tehnică',
								text: 'Suntem puntea între nevoile tale de afacere și soluțiile tehnice. Lucrăm cu echipa ta pentru a înțelege exact ce ai nevoie și apoi construim soluțiile care se potrivesc perfect.',
							},
							{
								text: 'Fiecare proiect începe cu o înțelegere clară a obiectivelor tale și a modului în care toate sistemele tale trebuie să lucreze împreună.',
							},
							{
								title: 'Shopify Functions - Controlul Complet al Checkout-ului',
								text: 'Shopify Functions îți oferă controlul total asupra logicii de business în checkout. Construim funcții personalizate care îți permit să implementezi reguli de discount complexe, calcule de taxe personalizate, validări de inventar și multe altele, toate fără să afectezi performanța.',
							},
							{
								text: 'Aceste funcții rulează pe infrastructura Shopify, asigurându-ne că sunt rapide și fiabile. Poți implementa logica de business specifică afacerii tale fără să te îngrijorezi de scalabilitate sau securitate.',
							},
							{
								title: 'Checkout Extensions - Experiențe Unice',
								text: 'Checkout Extensions îți permit să personalizezi complet experiența de checkout. Construim extensii care se integrează perfect cu designul tău, adăugând funcționalități precum recomandări de produse, informații suplimentare despre comandă, sau integrarea cu sistemele tale de fidelitate.',
							},
							{
								text: 'Aceste extensii îți aparțin complet și nu sunt afectate de actualizările temelor. Poți crea experiențe de checkout care reflectă perfect brandul tău și îți ajută clienții să finalizeze cumpărăturile.',
							},
							{
								title: 'Thank You Page Extensions - Optimizare Post-Cumpărare',
								text: 'Pagina de mulțumire este ultima șansă de a interacționa cu clienții după cumpărare. Construim extensii care optimizează această experiență - de la recomandări de produse și programe de fidelitate la integrarea cu sistemele tale de email marketing și analytics.',
							},
							{
								text: 'Aceste extensii îți ajută să maximizezi valoarea fiecărei comenzi și să construiești relații mai puternice cu clienții tăi.',
							},
							{
								title: 'Construire & Integrare',
								text: 'Construim aplicații personalizate care reflectă identitatea brandului tău și se integrează perfect cu Shopify, menținând în același timp performanța optimă.',
							},
							{
								text: `Integrăm cu atenție aplicațiile Shopify esențiale și alte instrumente pentru a îmbunătăți funcționalitatea magazinului tău fără să compromitem viteza sau experiența utilizatorului.`,
							},
							{
								title: 'Optimizare & Viteză',
								text: 'Procesul nostru include optimizarea pentru viteză, SEO și experiență utilizator, asigurându-ne că toate integrările îți ajută să obții rezultate mai bune.',
							},
							{
								text: 'Implementăm design responsiv pentru a ne asigura că magazinul tău funcționează perfect pe toate dispozitivele și dimensiunile ecranului.',
							},
							{
								title: 'Asigurare Calitate',
								text: 'Testăm riguros pe toate dispozitivele și browsere pentru a ne asigura că totul funcționează perfect în toate scenariile.',
							},
							{
								title: 'Suport Continuu',
								text: 'Oferim suport și mentenanță continuă pentru a menține toate integrările în funcțiune eficient, astfel încât să te poți concentra pe creșterea afacerii.',
							},
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageTwoData} alt={'Shopify Development Promise Vevol Media'} />}
						title={'Cum Lucrăm'}
						greenLine
						textContent={[
							<p className="mt-5">
								<strong>Calitate înainte de toate.</strong> Construim soluții scalabile și flexibile
								folosind tehnologii moderne și abordări testate în timp.
							</p>,
							<p className="mt-5">
								<strong>Cod pentru viitor.</strong> Scriem cod care rezistă testelor timpului, reducând
								nevoia de modificări frecvente și asigurând valoare pe termen lung.
							</p>,
							<p className="mt-5">
								<strong>Soluții eficiente.</strong> Abordarea noastră ajută la reducerea costurilor de
								mentenanță, oferindu-ți flexibilitatea de a face actualizări viitoare ușor și rapid.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<SplitNav
				leftTitle={'Dezvoltare Shopify Plus'}
				leftUrl={'/ro/servicii-shopify/shopify-plus'}
				rightTitle={'Migrare Shopify'}
				rightUrl={'/ro/servicii-shopify/migrari'}
			/>
		</Layout>
	);
}
