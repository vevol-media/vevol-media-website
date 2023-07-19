import React, { useEffect } from 'react';
import Header from '../header/header';
import WebsiteFooter from '../footer/footer';
import { Cursor } from '../cursor/cursor';
import { useSpring, animated } from 'react-spring';
import MainForm from '../forms/main-form';
import { Helmet } from 'react-helmet';
import ogImage from '../../images/vevol-media-og-image.jpg';
import favicon from '../../images/icon.png';
import config from 'react-reveal/globals';
import '@splidejs/splide/dist/css/splide.min.css';
import { AppProvider } from '../../context/app-context';

export default function Layout({
	children,
	headerBg,
	headerIsStatic,
	showBlob,
	hasMainForm = true,
	formBackgroundImage,
}) {
	const [animatedProps, setAnimatedProps] = useSpring(() => ({
		transform: `translate3d(0px, 0px, 0)`,
	}));

	const handleMouseMove = (event) => {
		setAnimatedProps({
			transform: `translate3d(${event.clientX}px, ${event.clientY}px, 0)`,
		});
	};

	const metaTitle = 'Innovative Shopify Experts & Developers - Vevol Media';
	const metaDescription =
		'Shopify Experts based in Ireland that provide bespoke eCommerce complete services. From Shopify setup to theme development. Get in touch with us today!';

	const handleScroll = (event) => {
		if (window.scrollY > 100) {
			document.querySelector('.vm-header').classList.add('vm-header--full');
		} else {
			document.querySelector('.vm-header').classList.remove('vm-header--full');
		}
	};

	config({ ssrFadeout: true });

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<AppProvider>
			<div onMouseMove={handleMouseMove} role="presentation">
				{showBlob && (
					<div className="cursor-container">
						<animated.div style={animatedProps} className="cursor-wrapper">
							<Cursor />
						</animated.div>
					</div>
				)}
				<Helmet
					htmlAttributes={{
						lang: 'en',
					}}
				>
					<link rel="icon" href={favicon} />
					<title>{metaTitle}</title>
					<meta name="description" content={metaDescription} />
					<meta property="og:url" content="https://www.vevolmedia.com" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content={metaTitle} />
					<meta property="og:description" content={metaDescription} />
					<meta property="og:image" content={ogImage} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:creator" content="@VevolMedia" />
					<meta property="twitter:domain" content="vevolmedia.com" />
					<meta property="twitter:url" content="https://www.vevolmedia.com" />
					<meta name="twitter:title" content={metaTitle} />
					<meta name="twitter:description" content={metaDescription} />
					<meta name="twitter:image" content={ogImage} />

					<script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=f7f4db75"></script>
					<script async src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=VvRbcB"></script>
					<script type="application/ld+json">
						{`
						{
							"@context": "https://schema.org",
							"@type": "Organization",
							"name": "Vevol Media",
							"address": {
								"@type": "PostalAddress",
								"addressLocality": "Dublin",
								"addressRegion": "Leinster",
								"postalCode": "D02 P593",
								"streetAddress": "Ground Floor, 71 Lower Baggot Street"
							},
							"email": "mailto:hello@vevolmedia.com",
							"aggregateRating": {
								"@type": "AggregateRating",
								"ratingValue": "4.9",
								"reviewCount": "13"
							}
						}
					`}
					</script>
					<script>{`window._nQc="89222768";`}</script>
					<script async src="https://serve.albacross.com/track.js"></script>
				</Helmet>
				<Header background={headerBg} isStatic={headerIsStatic} />
				<main>{children}</main>
				{hasMainForm && (
					<MainForm
						backgroundImage={formBackgroundImage}
						title={'Talk to a Strategist'}
						subtitle={
							"Get in touch with us if you want to get a quote for your project or simply want to say hello! We'd love to hear from you!"
						}
					/>
				)}
				<WebsiteFooter />
			</div>
		</AppProvider>
	);
}
