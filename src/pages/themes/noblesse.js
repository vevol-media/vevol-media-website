import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout/layout';
import SlimHero from '../../components/slim-hero/slim-hero';
import VevolSection from '../../components/general-components/vm-section';
import HeadingBlock from '../../components/heading-block/heading-block';
import { Container, Title } from 'bloomer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import videoAnimatedProduct from '../../images/noblesse/animated-product.mp4';
import videoCustomization from '../../images/noblesse/customiser.mp4';
import videoFastLoad from '../../images/noblesse/fast-load.mp4';
import videoHotspots from '../../images/noblesse/hotspots.mp4';
import videoResponsiveness from '../../images/noblesse/responsiveness.mp4';
import videoVideoBanner from '../../images/noblesse/video-banner.mp4';
import heroVideo from '../../images/noblesse/hero-video.mp4';

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

export default function NoblesseThemePage({ data }) {
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
			title: 'Video-First Design',
			description:
				'Full video banner support with overlay text and CTAs. Create engaging hero sections that captivate visitors and drive conversions through dynamic content.',
		},
		{
			media: <video src={videoHotspots} autoPlay muted loop loading="lazy" />,
			title: 'Interactive Shop-the-Look',
			description:
				'Clickable hotspots on lifestyle images with product tooltips. Create immersive shopping experiences that guide customers from inspiration to purchase.',
		},
		{
			media: <video src={videoAnimatedProduct} autoPlay muted loop loading="lazy" />,
			title: 'Animated Components',
			description:
				'Smooth animations and transitions throughout. From animated featured products to testimonial carousels, every element is designed to engage and delight.',
		},
		{
			media: <video src={videoResponsiveness} autoPlay muted loop loading="lazy" />,
			title: 'Mobile-First Design',
			description:
				'Responsive design that looks perfect on all devices. Mobile-optimized layouts ensure seamless shopping experiences across desktop, tablet, and mobile.',
		},
		{
			media: <video src={videoFastLoad} autoPlay muted loop loading="lazy" />,
			title: 'Performance Optimized',
			description:
				'Lazy loading and efficient asset management. Fast loading times and optimized performance ensure better user experience and higher conversion rates.',
		},
		{
			media: <video src={videoCustomization} autoPlay muted loop loading="lazy" />,
			title: 'Highly Customizable',
			description:
				'Two style presets (Riviera & Oppulence) with extensive customization options. Create a unique look that perfectly matches your brand identity.',
		},
	];

	const sectionsData = [
		{
			image: videoBannerImageData,
			alt: 'Video Banner Image',
			title: 'Video Banner',
			description: 'Hero sections with full-screen video backgrounds and customizable overlay content.',
			tags: ['Auto-play', 'Overlay', 'Responsive'],
		},
		{
			image: shopTheLookImageData,
			alt: 'Shop The Look Image',
			title: 'Shop-the-Look',
			description: 'Interactive product showcases with clickable hotspots and product tooltips.',
			tags: ['Hotspots', 'Tooltips', 'Slider'],
		},
		{
			image: animatedProductImageData,
			alt: 'Animated Product Image',
			title: 'Animated Featured Product',
			description: 'Showcase products with sophisticated image animations and dynamic layouts.',
			tags: ['Animation', '3 Images', 'Product'],
		},
		{
			image: testimonialsImageData,
			alt: 'Testimonials Image',
			title: 'Testimonials Carousel',
			description: 'Customer review showcase with image carousel and animated pagination.',
			tags: ['Carousel', 'Reviews', 'Images'],
		},
		{
			image: storiesImageData,
			alt: 'Stories Image',
			title: 'Stories',
			description: 'Instagram-style stories for products, collections, and videos with interactive elements.',
			tags: ['Interactive', 'Progress', 'Swipeable'],
		},
		{
			image: socialGalleryImageData,
			alt: 'Social Gallery Image',
			title: 'Social Gallery',
			description: 'Display social proof with animated hashtags and parallax headings.',
			tags: ['Grid', 'Hashtags', 'Parallax'],
		},
	];

	const promiseData = [
		{
			title: 'Latest Shopify Features',
			description: "Guaranteed to stay up to date and work with Shopify's ever-growing feature set.",
		},
		{
			title: 'Speed Tested',
			description: "Meets Shopify's performance standards, ensuring a faster shopping experience.",
		},
		{
			title: 'Unlimited Free Trial',
			description: 'Try the theme for free with your own products, brand colors, and customizations.',
		},
		{
			title: 'Free Updates',
			description: 'Get the latest theme features and fixes. Redownload your purchase at any time.',
		},
		{
			title: 'Non-Expiring License',
			description: 'Use the theme on a single store and keep it as long as you like.',
		},
		{
			title: 'Expert Support',
			description: 'Get support from Vevol Themes team with comprehensive documentation.',
		},
	];

	const reviewsData = [
		{
			quote: 'Glad I found this theme for my niche store, the editorial look matches the aesthetics of my brand and the product page has everything I needed for my one product store.',
			author: 'hydragrip.ro',
			date: 'Feb 27, 2025',
		},
		{
			quote: "This theme fits perfect to my jewelry store, it's so simple to navigate and tosetup. The team was also very responsive and helpful so I would definitely recommend it.",
			author: 'petrahandmade.ro',
			date: 'Jan 28, 2025',
		},
		{
			quote: "I love the bold interface and the way the design really catches the viewers attention. It's highly customisable and the developers are extremely responsive and always helpful.",
			author: 'FYNE Jewellery',
			date: 'Jan 5, 2025',
		},
	];

	return (
		<Layout headerBg="white">
			<Helmet>
				<title>Noblesse - Premium Shopify Theme | Vevol Media</title>
				<meta
					name="description"
					content="Noblesse is a premium Shopify theme designed for modern e-commerce with video-first design, interactive shop-the-look features, and elegant animations."
				/>
			</Helmet>

			{/* Hero Section */}
			<SlimHero
				heading="Noblesse - Premium Shopify Theme"
				subheading="Video-first design with interactive features for modern e-commerce"
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
								<div style={{ color: '#666' }}>One-time payment</div>
							</div>
							<div className="stat-item" style={{ textAlign: 'center' }}>
								<div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>100%</div>
								<div style={{ color: '#666' }}>Positive reviews</div>
							</div>
							<div className="stat-item" style={{ textAlign: 'center' }}>
								<div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>30+</div>
								<div style={{ color: '#666' }}>Custom sections</div>
							</div>
							<div className="stat-item" style={{ textAlign: 'center' }}>
								<div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>2</div>
								<div style={{ color: '#666' }}>Style presets</div>
							</div>
						</div>

						<div className="theme-description">
							<Title tag="h2" isSize={4} style={{ marginBottom: '2rem' }}>
								Turn Browsers Into Buyers
							</Title>
							<p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
								Noblesse is a mobile-first and easy-to-setup theme designed to drive more sales through
								engaging video content, interactive features, and elegant design. Perfect for brands
								that want to tell their story through visual storytelling and create immersive shopping
								experiences.
							</p>
							<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
								<a
									href="https://themes.shopify.com/themes/noblesse"
									target="_blank"
									rel="noreferrer"
									className="vm-button vm-button--black"
									style={{ gap: '1rem' }}
								>
									View on Theme Store <FontAwesomeIcon icon={faExternalLinkAlt} />
								</a>
								<a
									href="https://themes.vevolmedia.com/"
									target="_blank"
									rel="noreferrer"
									className="vm-button vm-button--black-transparent"
									style={{ gap: '1rem' }}
								>
									Live Documentation <FontAwesomeIcon icon={faExternalLinkAlt} />
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
						title={'Key Features'}
						highlightedWord={'Features'}
						subtitle={'Everything you need to create a stunning online store'}
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
						title={'Style Presets'}
						highlightedWord={'Presets'}
						subtitle={'Choose from two elegant design styles'}
						className="mb-4em"
					/>

					<div className="presets-grid">
						<div className="vm-box">
							<div>
								<GatsbyImage image={rivieraImageData} alt="Riviera Style Preset" />
							</div>
							<div className="vm-box__content">
								<Title tag="h3" isSize={4} style={{ marginBottom: '1rem' }}>
									Riviera
								</Title>
								<p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
									Clean and sophisticated design with elegant typography and refined spacing. Perfect
									for luxury brands and premium products that value simplicity and elegance.
								</p>
								<div className="vm-box__tags">
									<span>Elegant</span>
									<span>Minimalist</span>
									<span>Luxury</span>
									<span>Sleek</span>
									<span>Sophisticated</span>
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
									View Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
								</a>
							</div>
						</div>

						<div className="vm-box">
							<div>
								<GatsbyImage image={oppulenceImageData} alt="Oppulence Style Preset" />
							</div>
							<div className="vm-box__content">
								<Title tag="h3" isSize={4} style={{ marginBottom: '1rem' }}>
									Oppulence
								</Title>
								<p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
									Bold and dramatic design with rich typography and vibrant elements. Ideal for brands
									that want to make a strong visual impact and stand out from the competition.
								</p>
								<div className="vm-box__tags">
									<span>Bold</span>
									<span>Dramatic</span>
									<span>Rich</span>
									<span>Vibrant</span>
									<span>Dramatic</span>
									<span>Impactful</span>
									<span>Vibrant</span>
									<span>Dramatic</span>
									<span>Impactful</span>
								</div>
								<a
									href="https://themes.shopify.com/themes/noblesse/style/oppulence"
									target="_blank"
									rel="noreferrer"
									className="vm-button vm-button--black"
									style={{ marginTop: '3rem', gap: '1rem' }}
								>
									View Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
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
						title={'Section Showcase'}
						highlightedWord={'Showcase'}
						subtitle={'Explore the powerful sections that make Noblesse unique'}
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
						title={'Customer Reviews'}
						highlightedWord={'Reviews'}
						subtitle={'See what our customers are saying about Noblesse'}
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
						title={'Theme Store Promise'}
						highlightedWord={'Promise'}
						subtitle={'Everything included with your Noblesse theme purchase'}
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
							Ready to Transform Your Store?
						</Title>
						<p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
							Join hundreds of successful stores using Noblesse to create stunning shopping experiences.
						</p>
						<div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
							<a
								href="https://themes.shopify.com/themes/noblesse"
								target="_blank"
								rel="noreferrer"
								className="vm-button vm-button--black"
							>
								View on Theme Store
							</a>
						</div>
					</div>
				</Container>
			</VevolSection>
		</Layout>
	);
}
