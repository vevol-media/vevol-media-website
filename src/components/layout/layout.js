import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import WebsiteFooter from '../footer/footer';
import { Cursor } from '../cursor/cursor';
import { useSpring, animated } from 'react-spring';
import HubspotForm from '../forms/hubspot-form';
import { Helmet } from 'react-helmet';
import favicon from '../../images/icon.png';
import config from 'react-reveal/globals';
import { AppProvider } from '../../context/app-context';
import CookieBar from '../cookie-bar/cookie-bar';
import '@splidejs/splide/dist/css/splide.min.css';
import { graphql, useStaticQuery } from 'gatsby';

export default function Layout({
	children,
	headerBg,
	headerIsStatic,
	showBlob,
	hasMainForm = true,
	formBackgroundImage,
	hasHeader = true,
	handle
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

	const data = useStaticQuery(graphql`
		query {
		  allContentfulPageMeta {
			nodes {
				metaTitle
				metaDescription
				ogTitle
				ogDescription
				ogUrl
				ogType
			 	ogImage {
					gatsbyImageData(layout: CONSTRAINED, width: 600, height: 600)
					file {
						url
					}
			    }
				questionsStructuredData {
					questionsStructuredData
				}
			  	handle
			}
		  }
		}
	`);

	const pageMeta = data.allContentfulPageMeta.nodes.find(node => node.handle === handle);

	if (!pageMeta) {
	  return null; 
	}

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
					<title>{pageMeta.metaTitle}</title>
					<meta name="description" content={pageMeta.metaDescription} />
					<meta property="og:url" content={pageMeta.ogUrl} />
					<meta property="og:type" content={pageMeta.ogType} />
					<meta property="og:title" content={pageMeta.ogTitle} />
					<meta property="og:description" content={pageMeta.ogDescription} />
					<meta property="og:image" content={pageMeta.ogImage.file.url} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:creator" content="@Website" />
					<meta property="twitter:domain" content="website" />
					<meta property="twitter:url" content={pageMeta.ogUrl} />
					<meta name="twitter:title" content={pageMeta.ogTitle} />
					<meta name="twitter:description" content={pageMeta.ogDescription} />
					<meta name="twitter:image" content={pageMeta.ogImage.file.url} />
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
