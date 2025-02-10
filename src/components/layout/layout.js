import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import WebsiteFooter from '../footer/footer';
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

export default function Layout({
	children,
	headerBg,
	headerIsStatic,
	showBlob,
	hasMainForm = true,
	formBackgroundImage,
	hasHeader = true,
	customClass,
}) {
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

	const metaTitle = 'Innovative Shopify Experts & Developers - Vevol Media';
	const metaDescription =
		'Shopify Experts based in Ireland that provide bespoke eCommerce complete services. From Shopify setup to theme development. Get in touch with us today!';

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

	const sendEvent = async () => {
		const API_VERSION = "v22.0";
		const PIXEL_ID = "2127249697728474";
		const ACCESS_TOKEN = "EAAUJ7H6mPxUBO2bdSNkxZCU3ZCZBV87tmBtmF8FaU81AvGFZAmV4h4oEZCSyy9BZALaIZATe0tzqymk3Pav3SRdHjtAENy3ZAwbZAyfElareIWp2QgO8iNhJZC3W6GbqLxXvPMriGuxnZAIWwVWJ7dfaIJyeZAXfV1g3nM5Yht8FbcYuYA4BL3jysTvAxid1CXU0cEQHgwZDZD";
	  
		const url = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;
	  
		const payload = {
		  data: [
			{
				"event_name": "Purchase",
				"event_time": 1739197687,
				"user_data": {
				  "em": [
					"309a0a5c3e211326ae75ca18196d301a9bdbd1a882a4d2569511033da23f0abd"
				  ],
				  "ph": [
					"254aa248acb47dd654ca3ea53f48c2c26d641d23d7e2e93a1ec56258df7674c4",
					"6f4fcb9deaeadc8f9746ae76d97ce1239e98b404efe5da3ee0b7149740f89ad6"
				  ],
				  "client_ip_address": "123.123.123.123",
				  "client_user_agent": "$CLIENT_USER_AGENT",
				  "fbc": "fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890",
				  "fbp": "fb.1.1558571054389.1098115397"
				},
				"custom_data": {
				  "currency": "usd",
				  "value": 123.45,
				  "contents": [
					{
					  "id": "product123",
					  "quantity": 1,
					  "delivery_category": "home_delivery"
					}
				  ]
				},
				"event_source_url": "http://jaspers-market.com/product/123",
				"action_source": "website"
			  },
		  ],
		};
	  
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
				  "Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			  });
		  
	  
		  console.log("Response:", response.data);
		} catch (error) {
		  console.error("Error:", error.response?.data || error.message);
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
		sendEvent();
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
				
				{hasHeader && <Header background={headerBg} isStatic={headerIsStatic} />}
				<main>{children}</main>
				{hasMainForm && (
					<>
						<HubspotForm
							backgroundImage={formBackgroundImage}
							title={'Talk to a Strategist'}
							subtitle={
								"Get in touch with us if you want to get a quote for your project or simply want to say hello! We'd love to hear from you!"
							}
						/>
					</>
				)}
				{showCookieBar && (
					<CookieBar
						setCookie={setCookie}
						cookieConsentValue={cookieConsentValue}
						setCookieConsentValue={setCookieConsentValue}
						setShowCookieBar={setShowCookieBar}
					/>
				)}
				<WebsiteFooter />
			</div>
		</AppProvider>
	);
}
