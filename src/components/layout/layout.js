import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import WebsiteFooter from '../footer/footer';
import WebsiteFooterRO from '../footer/footerRO';
import { Cursor } from '../cursor/cursor';
import { useSpring, animated } from 'react-spring';
import HubspotForm from '../forms/hubspot-form';
import { Helmet } from 'react-helmet';
import ogImage from '../../images/vevol-media-og-image.jpg';
import favicon from '../../images/icon.png';
import config from 'react-reveal/globals';
import { AppProvider } from '../../context/app-context';
import CookieBar from '../cookie-bar/cookie-bar';
import '@splidejs/splide/dist/css/splide.min.css';
import { useTranslations } from '../../helpers/useTranslations';

export default function Layout({
	children,
	headerBg,
	headerIsStatic,
	showBlob,
	hasMainForm = true,
	formBackgroundImage,
	hasHeader = true,
	customClass,
	isTransparent,
}) {
	const { t, currentLocale } = useTranslations();
	const [cookieConsentValue, setCookieConsentValue] = useState('');
	const [showCookieBar, setShowCookieBar] = useState(false);
	const [animatedProps, setAnimatedProps] = useSpring(() => ({
		transform: `translate3d(0px, 0px, 0)`,
	}));

	const handleMouseMove = (event) => {
		setAnimatedProps({
			transform: `translate3d(${event.clientX}px, ${event.clientY}px, 0)`,
		});
	};

	const metaTitle = 'Shopify Migration & Development Agency - Vevol Media';
	const metaDescription =
		'Shopify migration experts trusted by 35+ ecommerce brands. Vevol Media handles full data transfers, custom theme & app builds, complex development and performance optimisation.';

	const handleScroll = (event) => {
		const pageHeader = document.querySelector('.vm-header');

		if (pageHeader) {
			if (window.scrollY > 100) {
				pageHeader.classList.add('vm-header--full');
			} else {
				pageHeader.classList.remove('vm-header--full');
			}
		}
	};

	const setCookie = (value) => {
		const date = new Date();
		const days = value === 'all' ? 60 : 10;
		date.setTime(date.getTime() + 24 * days * 60 * 60 * 1e3);
		document.cookie = `_cookieconsent=${value};expires=${date.toUTCString()};path=/;domain=.vevolmedia.com;`;
	};

	config({ ssrFadeout: true });

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		const bigValue = `; ${document.cookie}`;
		const parts = bigValue.split(`; _cookieconsent=`);
		const value = parts.length === 2 ? parts.pop().split(';').shift() : false;

		if (!value) {
			setShowCookieBar(true);
			setCookieConsentValue('essentials');
		} else {
			setShowCookieBar(false);
			setCookieConsentValue(value);
		}
	}, []);

	return (
		<AppProvider>
			<div onMouseMove={handleMouseMove} role="presentation" className={customClass}>
				{showBlob && (
					<div className="cursor-container">
						<animated.div style={animatedProps} className="cursor-wrapper">
							<Cursor />
						</animated.div>
					</div>
				)}
				<Helmet
					htmlAttributes={{
						lang: currentLocale,
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
					{/* Comment this on localhost, otherwise we end up with an error while developing */}
					{cookieConsentValue === 'all' && (
						<script defer>{`gtag('config', 'G-XTXF9YF0NB', {
							'anonymize_ip': false,
							'allow_ad_personalization_signals': true
						});`}</script>
					)}
					{cookieConsentValue === 'all' && (
						<script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=f7f4db75"></script>
					)}
					<script async src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=VvRbcB"></script>
					{cookieConsentValue === 'all' && <script>{`window._nQc="89222768";`}</script>}
					{cookieConsentValue === 'all' && <script async src="https://serve.albacross.com/track.js"></script>}
				</Helmet>

				{hasHeader && <Header background={headerBg} isStatic={headerIsStatic} isTransparent={isTransparent} />}
				<main>{children}</main>
				{hasMainForm && (
					<HubspotForm
						backgroundImage={formBackgroundImage}
						title={t('mainForm.title')}
						subtitle={t('mainForm.subtitle')}
					/>
				)}
				{showCookieBar && (
					<CookieBar
						setCookie={setCookie}
						cookieConsentValue={cookieConsentValue}
						setCookieConsentValue={setCookieConsentValue}
						setShowCookieBar={setShowCookieBar}
					/>
				)}
				{currentLocale === 'ro' ? <WebsiteFooterRO /> : <WebsiteFooter />}
			</div>
		</AppProvider>
	);
}
