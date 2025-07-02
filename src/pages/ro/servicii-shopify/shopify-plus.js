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
				heading="Dezvoltare Enterprise-Level Shopify Plus"
				subheading="Vă ridicați afacerea dumneavoastră de comerț electronic cu soluțiile noastre avansate de Shopify Plus. Vom exploata toate capacitățile platformei pentru a livra magazine online scalabile, performante pentru clienți de nivel enterprise."
			/>
			<SidewayText lineOne={`shopify`} lineTwo={'plus'} lineOneRepeat={15} lineTwoRepeat={25} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Excelență în Comerț Electronic de Nivel Enterprise'}
						highlightedWord={'Enterprise'}
						subtitle={
							'Ca parteneri Shopify Plus experimentați, înțelegem provocările și oportunitățile unice ale scalării unei afaceri de comerț electronic de nivel enterprise. Soluțiile noastre sunt construite pentru performanță, scalabilitate și creștere.'
						}
						className="mb-4em"
					/>
					<ImageWithText
						image={
							<GatsbyImage
								image={imageOneData}
								alt={'Shopify Plus Development - Vevol Media'}
								loading="lazy"
							/>
						}
						title={'Soluții Avansate pentru Afaceri în Creștere'}
						textContent={[
							<p className="mt-5">
								Serviciile noastre de dezvoltare Shopify Plus merg mai departe decât funcționalitatea
								standard a comerțului electronic, oferind funcționalități avansate și de nivel
								enterprise care dirijează creșterea afacerii.
							</p>,
							<p className="mt-5">
								De la experiențe de checkout personalizate la expansiune internațională, exploatăm
								capacitățile îmbunătățite ale Shopify Plus pentru a crea soluții care se pot scală cu
								afacerile dumneavoastră.
							</p>,
							<p className="mt-5">
								Fiecare implementare este testată și optimizată pentru performanță, asigurându-se că
								magazinul dumneavoastră poate gestiona traficul de volum ridicat și tranzacțiile fluent.
							</p>,
						]}
						greenLine
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Să lucrăm împreună"
				text="Contactați-ne pentru a afla mai multe despre serviciile noastre de dezvoltare Shopify Plus"
				url="/ro/contact"
				ctaText={'Cere disponibilitate'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Personalizare Avansată',
								text: 'Funcționalitate și design personalizate pentru a răspunde cerințelor complexe ale afacerii de nivel enterprise',
							},
							{
								title: 'Extensibilitate Checkout',
								text: 'Experiențe de checkout personalizate cu promovări personalizate și reduceri automate',
							},
							{
								title: 'Integrare API',
								text: 'Integrare fără griji cu sisteme ERP, CRM și PIM pentru operațiuni eficiente',
							},
							{
								title: 'Internationalizare',
								text: 'Configurare multi-magazin cu conținut localizat, monede și soluții de plată',
							},
							{
								title: 'Funcționalitate B2B',
								text: 'Canale dedicate de vânzare cu prețuri personalizate și produse exclusive',
							},
						]}
						mainContent={[
							{
								title: 'Soluții de Nivel Enterprise',
								text: 'Specializăm în crearea de magazine Shopify Plus sofisticate care gestionează cerințele complexe ale afacerii, menținând performanța și experiența utilizatorului la nivelul cel mai înalt.',
							},
							{
								text: `Echipa noastră exploatează funcționalitățile avansate ale Shopify Plus pentru a crea soluții personalizate care se pot scală cu afacerile dumneavoastră, de la fluxuri automate la comerț multi-canal.`,
							},
							{
								title: 'Funcționalități Avansate și Integrare',
								text: 'Implementăm funcționalități sofisticate care includ Shopify Flow pentru automatizarea proceselor de afaceri, Shopify Functions pentru reguli de preț personalizate sau Shopify Markets pentru expansiune internațională.',
							},
							{
								text: 'Expertiza noastră în integrare asigură faptul că magazinul dumneavoastră funcționează fără griji cu sisteme enterprise, menținând coerența datelor în toate operațiunile afacerii.',
							},
							{
								title: 'Experiență de Checkout',
								text: 'Creatăm experiențe de checkout personalizate care îmbunătățesc procesul de cumpărare, inclusiv promovări personalizate, reduceri automate, reguli personalizate și multe altele.',
							},
							{
								title: 'Integrări de Terți',
								text: 'Exploatăm Shopify Plus pentru a integra fără griji cu sisteme ERP, CRM și PIM de terți.',
							},
							{
								title: 'Soluții de Comerț Global',
								text: 'Ajutăm afacerile să se extindă global cu suport pentru mai multe monede, conținut localizat și portale de plată internaționale.',
							},
							{
								text: 'Soluțiile noastre B2B permit operațiuni de vânzare cu amănuntul cu prețuri personalizate, cataloage exclusive și procese de comandă streamline.',
							},
							{
								title: 'Performanță și Securitate',
								text: 'Asigurăm că magazinul dumneavoastră menține performanța de vârf chiar în evenimente de trafic ridicat, cu măsuri de securitate de nivel enterprise și hosting fiabil.',
							},
							{
								title: 'Suport Continuu',
								text: 'Echipa noastră oferă suport dedicat și întreținere pentru a menține magazinul dumneavoastră Shopify Plus în funcțiune optim, cu răspunsuri rapide pentru probleme critice.',
							},
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<ImageWithText
						alignRight
						image={
							<GatsbyImage image={imageTwoData} alt={'Shopify Plus Development Promise Vevol Media'} />
						}
						title={'Excelență în Comerț Electronic de Nivel Enterprise'}
						greenLine
						textContent={[
							<p className="mt-5">
								<strong>Capacități Avansate.</strong> Exploatăm întreaga putere a Shopify Plus cu
								experiențe de checkout personalizate, fluxuri automate și integrații enterprise.
							</p>,
							<p className="mt-5">
								<strong>Soluții Scalabile.</strong> Construiți pentru creștere cu arhitectură care
								gestionează trafic de volum ridicat și tranzacții, menținând performanța de vârf.
							</p>,
							<p className="mt-5">
								<strong>Extindere Globală.</strong> Extindeți afacerea dumneavoastră global cu
								configurări multi-magazin, conținut localizat și soluții de plată internaționale.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<SplitNav
				leftTitle={'Aplicații și Integrări'}
				leftUrl={'/ro/servicii-shopify/aplicatii-si-integrari'}
				rightTitle={'Migrare Shopify'}
				rightUrl={'/ro/servicii-shopify/migrari'}
			/>
		</Layout>
	);
}
