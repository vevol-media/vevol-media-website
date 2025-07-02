import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../../components/layout/layout';
import SlimHero from '../../../components/slim-hero/slim-hero';
import VevolSection from '../../../components/general-components/vm-section';
import HeadingBlock from '../../../components/heading-block/heading-block';
import { Container, Title } from 'bloomer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import videoAnimatedProduct from '../../../images/noblesse/animated-product.mp4';
import videoCustomization from '../../../images/noblesse/customiser.mp4';
import videoFastLoad from '../../../images/noblesse/fast-load.mp4';
import videoHotspots from '../../../images/noblesse/hotspots.mp4';
import videoResponsiveness from '../../../images/noblesse/responsiveness.mp4';
import videoVideoBanner from '../../../images/noblesse/video-banner.mp4';
import heroVideo from '../../../images/noblesse/hero-video.mp4';

export const data = graphql`
	query {
		videoBannerImage: file(name: { eq: "video-banner-image" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		shopTheLookImage: file(name: { eq: "shop-the-look" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		animatedProductImage: file(name: { eq: "animated-featured-product" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		socialGalleryImage: file(name: { eq: "social-gallery" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		testimonialsImage: file(name: { eq: "testimonials" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		storiesImage: file(name: { eq: "stories" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		rivieraImage: file(name: { eq: "preset-riviera" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		oppulenceImage: file(name: { eq: "preset-oppulence" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
	}
`;

export default function NoblesseThemePageRO({ data }) {
	const {
		videoBannerImage,
		shopTheLookImage,
		animatedProductImage,
		socialGalleryImage,
		testimonialsImage,
		storiesImage,
		rivieraImage,
		oppulenceImage,
	} = data;
	const videoBannerImageData = getImage(videoBannerImage);
	const shopTheLookImageData = getImage(shopTheLookImage);
	const animatedProductImageData = getImage(animatedProductImage);
	const socialGalleryImageData = getImage(socialGalleryImage);
	const testimonialsImageData = getImage(testimonialsImage);
	const storiesImageData = getImage(storiesImage);
	const rivieraImageData = getImage(rivieraImage);
	const oppulenceImageData = getImage(oppulenceImage);

	const featuresData = [
		{
			media: <video src={videoVideoBanner} autoPlay muted loop loading="lazy" />,
			title: 'Design Video-First',
			description:
				'Suport complet pentru banner-uri video cu text suprapus și CTA-uri. Creează secțiuni hero captivante care captivează vizitatorii și stimulează conversiile prin conținut dinamic.',
		},
		{
			media: <video src={videoHotspots} autoPlay muted loop loading="lazy" />,
			title: 'Shop-the-Look Interactiv',
			description:
				'Hotspot-uri clicabile pe imagini de lifestyle cu tooltip-uri pentru produse. Creează experiențe de cumpărare imersive care ghidează clienții de la inspirație la achiziție.',
		},
		{
			media: <video src={videoAnimatedProduct} autoPlay muted loop loading="lazy" />,
			title: 'Componente Animate',
			description:
				'Animații și tranziții fluide în tot site-ul. De la produse animate la caruseluri de testimoniale, fiecare element este conceput să captiveze și să încante.',
		},
		{
			media: <video src={videoResponsiveness} autoPlay muted loop loading="lazy" />,
			title: 'Design Mobile-First',
			description:
				'Design responsive care arată perfect pe toate dispozitivele. Layout-urile optimizate pentru mobile asigură experiențe de cumpărare fără probleme pe desktop, tabletă și mobil.',
		},
		{
			media: <video src={videoFastLoad} autoPlay muted loop loading="lazy" />,
			title: 'Performanță Optimizată',
			description:
				'Încărcare lazy și gestionarea eficientă a resurselor. Timpii de încărcare rapizi și performanța optimizată asigură o experiență utilizator mai bună și rate de conversie mai mari.',
		},
		{
			media: <video src={videoCustomization} autoPlay muted loop loading="lazy" />,
			title: 'Foarte Personalizabil',
			description:
				'Două preset-uri de stil (Riviera & Oppulence) cu opțiuni extensive de personalizare. Creează un aspect unic care se potrivește perfect cu identitatea brandului tău.',
		},
	];

	const sectionsData = [
		{
			image: videoBannerImageData,
			alt: 'Imagine Banner Video',
			title: 'Banner Video',
			description: 'Secțiuni hero cu fundaluri video full-screen și conținut suprapus personalizabil.',
			tags: ['Auto-play', 'Suprapus', 'Responsive'],
		},
		{
			image: shopTheLookImageData,
			alt: 'Imagine Shop The Look',
			title: 'Shop-the-Look',
			description: 'Showcase-uri interactive de produse cu hotspot-uri clicabile și tooltip-uri pentru produse.',
			tags: ['Hotspot-uri', 'Tooltip-uri', 'Slider'],
		},
		{
			image: animatedProductImageData,
			alt: 'Imagine Produs Animat',
			title: 'Produs Animat Featured',
			description: 'Prezintă produsele cu animații sofisticate de imagini și layout-uri dinamice.',
			tags: ['Animație', '3 Imagini', 'Produs'],
		},
		{
			image: testimonialsImageData,
			alt: 'Imagine Testimoniale',
			title: 'Carusel Testimoniale',
			description: 'Showcase de review-uri de clienți cu carusel de imagini și paginare animată.',
			tags: ['Carusel', 'Review-uri', 'Imagini'],
		},
		{
			image: storiesImageData,
			alt: 'Imagine Stories',
			title: 'Stories',
			description: 'Stories în stil Instagram pentru produse, colecții și video-uri cu elemente interactive.',
			tags: ['Interactiv', 'Progres', 'Swipeable'],
		},
		{
			image: socialGalleryImageData,
			alt: 'Imagine Galerie Socială',
			title: 'Galerie Socială',
			description: 'Afișează dovezi sociale cu hashtag-uri animate și titluri cu efect parallax.',
			tags: ['Grid', 'Hashtag-uri', 'Parallax'],
		},
	];

	const promiseData = [
		{
			title: 'Cele Mai Noi Funcții Shopify',
			description:
				'Garanția că rămâne la zi și funcționează cu setul de funcții în continuă creștere al Shopify.',
		},
		{
			title: 'Testat pentru Viteză',
			description:
				'Îndeplinește standardele de performanță Shopify, asigurând o experiență de cumpărare mai rapidă.',
		},
		{
			title: 'Trial Gratuit Nelimitat',
			description: 'Încearcă tema gratuit cu propriile produse, culorile brandului și personalizări.',
		},
		{
			title: 'Actualizări Gratuite',
			description: 'Primește cele mai noi funcții și corectări ale temei. Redescarcă-ți achiziția oricând.',
		},
		{
			title: 'Licență Care Nu Expiră',
			description: 'Folosește tema pe un singur magazin și păstrează-o cât timp vrei.',
		},
		{
			title: 'Suport de Expert',
			description: 'Primește suport de la echipa Vevol Themes cu documentație comprehensivă.',
		},
	];

	const reviewsData = [
		{
			quote: 'Mă bucur că am găsit această temă pentru magazinul meu de nișă, aspectul editorial se potrivește cu estetica brandului meu și pagina de produs are tot ce aveam nevoie pentru magazinul meu cu un singur produs.',
			author: 'hydragrip.ro',
			date: '27 Feb 2025',
		},
		{
			quote: 'Această temă se potrivește perfect cu magazinul meu de bijuterii, este atât de simplă de navigat și de configurat. Echipa a fost și foarte receptivă și de ajutor, așa că aș recomanda-o cu siguranță.',
			author: 'petrahandmade.ro',
			date: '28 Ian 2025',
		},
		{
			quote: 'Îmi place interfața îndrăzneață și modul în care designul captează cu adevărat atenția vizualizatorilor. Este foarte personalizabilă și dezvoltatorii sunt extrem de receptivi și întotdeauna de ajutor.',
			author: 'FYNE Jewellery',
			date: '5 Ian 2025',
		},
	];

	return (
		<Layout headerBg="white">
			<Helmet>
				<title>Noblesse - Temă Premium Shopify | Vevol Media</title>
				<meta
					name="description"
					content="Noblesse este o temă premium Shopify concepută pentru e-commerce modern cu design video-first, funcții interactive shop-the-look și animații elegante."
				/>
			</Helmet>

			{/* Hero Section */}
			<SlimHero
				heading="Noblesse - Temă Premium Shopify"
				subheading="Design video-first cu funcții interactive pentru e-commerce modern"
				backgroundWhite
				hideBlob
			/>
			<video src={heroVideo} autoPlay muted loop loading="lazy" className="theme-hero-video" />

			{/* Theme Overview */}
			<VevolSection backgroundColour={'grey'} borderBottom borderTop>
				<Container>
					<div className="theme-overview">
						<div
							className="theme-stats"
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
								gap: '2rem',
								marginBottom: '3rem',
							}}
						>
							<div className="stat-item" style={{ textAlign: 'center' }}>
								<div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>$180</div>
								<div style={{ color: '#666' }}>Plată unică</div>
							</div>
							<div className="stat-item" style={{ textAlign: 'center' }}>
								<div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>100%</div>
								<div style={{ color: '#666' }}>Review-uri pozitive</div>
							</div>
							<div className="stat-item" style={{ textAlign: 'center' }}>
								<div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>30+</div>
								<div style={{ color: '#666' }}>Secțiuni personalizate</div>
							</div>
							<div className="stat-item" style={{ textAlign: 'center' }}>
								<div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>2</div>
								<div style={{ color: '#666' }}>Preset-uri de stil</div>
							</div>
						</div>

						<div className="theme-description">
							<Title tag="h2" isSize={4} style={{ marginBottom: '2rem' }}>
								Transformă Navigatoarele în Cumpărători
							</Title>
							<p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
								Noblesse este o temă mobile-first și ușor de configurat, concepută să genereze mai multe
								vânzări prin conținut video captivant, funcții interactive și design elegant. Perfectă
								pentru branduri care vor să-și spună povestea prin storytelling vizual și să creeze
								experiențe de cumpărare imersive.
							</p>
							<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
								<a
									href="https://themes.shopify.com/themes/noblesse"
									target="_blank"
									rel="noreferrer"
									className="vm-button vm-button--black"
									style={{ gap: '1rem' }}
								>
									Vezi în Theme Store <FontAwesomeIcon icon={faExternalLinkAlt} />
								</a>
								<a
									href="https://themes.vevolmedia.com/"
									target="_blank"
									rel="noreferrer"
									className="vm-button vm-button--black-transparent"
									style={{ gap: '1rem' }}
								>
									Documentație Live <FontAwesomeIcon icon={faExternalLinkAlt} />
								</a>
							</div>
						</div>
					</div>
				</Container>
			</VevolSection>

			{/* Key Features */}
			<VevolSection backgroundColour={'white'}>
				<Container className="theme-page-container">
					<HeadingBlock
						title={'Funcții Cheie'}
						highlightedWord={'Funcții'}
						subtitle={'Tot ce ai nevoie pentru a crea un magazin online uimitor'}
						className="mb-4em"
					/>

					<div className="features-grid">
						{featuresData.map((feature, index) => (
							<div key={index} className="vm-box">
								<div>{feature.media}</div>
								<div className="vm-box__content">
									<Title tag="h3" isSize={5} style={{ marginBottom: '1rem' }}>
										{feature.title}
									</Title>
									<p style={{ color: '#666', lineHeight: '1.6' }}>{feature.description}</p>
								</div>
							</div>
						))}
					</div>
				</Container>
			</VevolSection>

			{/* Style Presets */}
			<VevolSection backgroundColour={'grey'} borderBottom borderTop>
				<Container className="theme-page-container">
					<HeadingBlock
						title={'Preset-uri de Stil'}
						highlightedWord={'Preset-uri'}
						subtitle={'Alege din două stiluri de design elegante'}
						className="mb-4em"
					/>

					<div className="presets-grid">
						<div className="vm-box">
							<div>
								<GatsbyImage image={rivieraImageData} alt="Preset Stil Riviera" />
							</div>
							<div className="vm-box__content">
								<Title tag="h3" isSize={4} style={{ marginBottom: '1rem' }}>
									Riviera
								</Title>
								<p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
									Design curat și sofisticat cu tipografie elegantă și spațiere rafinată. Perfect
									pentru branduri de lux și produse premium care apreciază simplitatea și eleganța.
								</p>
								<div className="vm-box__tags">
									<span>Elegant</span>
									<span>Minimalist</span>
									<span>Lux</span>
									<span>Modern</span>
									<span>Sofisticat</span>
									<span>Premium</span>
									<span>Elegant</span>
									<span>Minimalist</span>
								</div>
								<a
									href="https://themes.shopify.com/themes/noblesse/style/riviera"
									target="_blank"
									rel="noreferrer"
									className="vm-button vm-button--black"
									style={{ marginTop: '3rem', gap: '1rem' }}
								>
									Vezi Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
								</a>
							</div>
						</div>

						<div className="vm-box">
							<div>
								<GatsbyImage image={oppulenceImageData} alt="Preset Stil Oppulence" />
							</div>
							<div className="vm-box__content">
								<Title tag="h3" isSize={4} style={{ marginBottom: '1rem' }}>
									Oppulence
								</Title>
								<p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
									Design îndrăzneț și dramatic cu tipografie bogată și elemente vibrante. Ideal pentru
									branduri care vor să facă un impact vizual puternic și să iasă în evidență față de
									competiție.
								</p>
								<div className="vm-box__tags">
									<span>Îndrăzneț</span>
									<span>Dramatic</span>
									<span>Bogat</span>
									<span>Vibrant</span>
									<span>Dramatic</span>
									<span>Impactant</span>
									<span>Vibrant</span>
									<span>Dramatic</span>
									<span>Impactant</span>
								</div>
								<a
									href="https://themes.shopify.com/themes/noblesse/style/oppulence"
									target="_blank"
									rel="noreferrer"
									className="vm-button vm-button--black"
									style={{ marginTop: '3rem', gap: '1rem' }}
								>
									Vezi Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
								</a>
							</div>
						</div>
					</div>
				</Container>
			</VevolSection>

			{/* Section Showcase */}
			<VevolSection backgroundColour={'white'}>
				<Container className="theme-page-container">
					<HeadingBlock
						title={'Showcase Secțiuni'}
						highlightedWord={'Showcase'}
						subtitle={'Explorează secțiunile puternice care fac Noblesse unică'}
						className="mb-4em"
					/>

					<div className="sections-grid">
						{sectionsData.map((section, index) => (
							<div key={index} className="vm-box">
								<div>
									<GatsbyImage image={section.image} alt={section.alt} />
								</div>
								<div className="vm-box__content">
									<Title tag="h4" isSize={5}>
										{section.title}
									</Title>
									<p>{section.description}</p>
									<div className="vm-box__tags">
										{section.tags.map((tag, tagIndex) => (
											<span key={tagIndex}>{tag}</span>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</Container>
			</VevolSection>

			{/* Customer Reviews */}
			<VevolSection backgroundColour={'grey'} borderBottom borderTop>
				<Container>
					<HeadingBlock
						title={'Review-uri Clienți'}
						highlightedWord={'Review-uri'}
						subtitle={'Vezi ce spun clienții noștri despre Noblesse'}
						className="mb-4em"
					/>

					<div
						className="reviews-grid"
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
							gap: '2rem',
							marginTop: '3rem',
						}}
					>
						{reviewsData.map((review, index) => (
							<div
								key={index}
								className="review-card"
								style={{
									backgroundColor: '#fff',
									padding: '2rem',
									borderRadius: '8px',
									boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
								}}
							>
								<div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
									{[...Array(5)].map((_, i) => (
										<FontAwesomeIcon key={i} icon={faStar} style={{ color: '#ffc107' }} />
									))}
								</div>
								<p style={{ fontStyle: 'italic', marginBottom: '1rem', lineHeight: '1.6' }}>
									"{review.quote}"
								</p>
								<div style={{ fontWeight: 'bold' }}>{review.author}</div>
								<div style={{ color: '#666', fontSize: '0.9rem' }}>{review.date}</div>
							</div>
						))}
					</div>
				</Container>
			</VevolSection>

			{/* Theme Store Promise */}
			<VevolSection backgroundColour={'white'}>
				<Container className="theme-page-container">
					<HeadingBlock
						title={'Promisiunea Theme Store'}
						highlightedWord={'Promisiunea'}
						subtitle={'Tot ce este inclus cu achiziția temei Noblesse'}
						className="mb-4em"
					/>

					<div className="promise-grid">
						{promiseData.map((promise, index) => (
							<div key={index} className="promise-item" style={{ textAlign: 'center' }}>
								<div
									style={{
										width: '60px',
										height: '60px',
										backgroundColor: '#f8f9fa',
										borderRadius: '50%',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										margin: '0 auto 1rem',
									}}
								>
									<FontAwesomeIcon icon={faCheck} style={{ fontSize: '1.5rem', color: '#28a745' }} />
								</div>
								<Title tag="h4" isSize={5} style={{ marginBottom: '0.5rem' }}>
									{promise.title}
								</Title>
								<p style={{ color: '#666', fontSize: '0.9rem' }}>{promise.description}</p>
							</div>
						))}
					</div>
				</Container>
			</VevolSection>

			{/* Call to Action */}
			<VevolSection backgroundColour={'grey'} borderBottom borderTop>
				<Container>
					<div style={{ textAlign: 'center', padding: '4rem 0' }}>
						<Title tag="h2" isSize={3} style={{ marginBottom: '1rem' }}>
							Gata să-ți Transformi Magazinul?
						</Title>
						<p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
							Alătură-te sutelor de magazine de succes care folosesc Noblesse pentru a crea experiențe de
							cumpărare uimitoare.
						</p>
						<div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
							<a
								href="https://themes.shopify.com/themes/noblesse"
								target="_blank"
								rel="noreferrer"
								className="vm-button vm-button--black"
							>
								Vezi în Theme Store
							</a>
						</div>
					</div>
				</Container>
			</VevolSection>
		</Layout>
	);
}
