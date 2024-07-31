import React, { useEffect, useState } from 'react';
import { useLocation } from '@reach/router';
import Header from '../header/header';
import WebsiteFooter from '../footer/footer';
import { Cursor } from '../cursor/cursor';
import { useSpring, animated } from 'react-spring';
import HubspotForm from '../forms/hubspot-form';
import { Helmet } from 'react-helmet';
import ogImage from '../../images/vevol-media-og-image.jpg';
import config from 'react-reveal/globals';
import { AppProvider } from '../../context/app-context';
import CookieBar from '../cookie-bar/cookie-bar';
import '@splidejs/splide/dist/css/splide.min.css';
import { graphql, useStaticQuery } from 'gatsby';

export default function Layout({ children, headerBg, headerIsStatic, showBlob, hasMainForm = true, formBackgroundImage, hasHeader = true }) {
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

	const Seo = () => {
		const data = useStaticQuery(graphql`
			query {
				allContentfulPageMeta {
					nodes {
						metaTitle
						metaDescription
						ogImage {
							gatsbyImageData(layout: CONSTRAINED, width: 600, height: 600)
							file {
								url
							}
						}
					}
				}
			}
		`);

		const location = useLocation();
		const pathname = location.pathname.replace(/\/$/, '');

		const pageMeta = data.allContentfulPageMeta.nodes.find((node) => node.handle === pathname);

		React.useEffect(() => {
			if (pageMeta) {
				document.title = pageMeta.metaTitle;

				const metaDescriptionTag = document.querySelector('meta[name="description"]');
				if (metaDescriptionTag) {
					metaDescriptionTag.content = pageMeta.metaDescription;
				} else {
					const meta = document.createElement('meta');
					meta.name = 'description';
					meta.content = pageMeta.metaDescription;
					document.head.appendChild(meta);
				}

				const scriptTag = document.createElement('script');
				scriptTag.type = 'application/ld+json';
				scriptTag.innerHTML = `
			  {
				"@context": "https://schema.org",
				"@type": "FAQ",
				"mainEntity": ${pageMeta.questionsStructuredData.questionsStructuredData}
			  }
			`;
				document.head.appendChild(scriptTag);

				return () => {
					if (scriptTag) {
						document.head.removeChild(scriptTag);
					}
				};
			}
		}, [pageMeta]);

		const renderHelmet = () => {
			if (!pageMeta) {
				const metaTitle = 'Innovative Shopify Experts & Developers - Vevol Media';
				const metaDescription = 'Shopify Experts based in Ireland that provide bespoke eCommerce complete services. From Shopify setup to theme development. Get in touch with us today!';
				return (
					<Helmet
						htmlAttributes={{
							lang: 'en',
						}}
					>
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
					</Helmet>
				);
			}

			return (
				<Helmet
					htmlAttributes={{
						lang: 'en',
					}}
				>
					<title>{pageMeta.metaTitle}</title>
					<meta name="description" content={pageMeta.metaDescription} />
					<meta property="og:url" content={`https://www.vevolmedia.com${pathname}`} />
					<meta property="og:type" content="website" />
					<meta property="og:title" content={pageMeta.metaTitle} />
					<meta property="og:description" content={pageMeta.metaDescription} />
					<meta property="og:image" content={pageMeta.ogImage.file.url} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:creator" content="@VevolMedia" />
					<meta property="twitter:domain" content="vevolmedia.com" />
					<meta property="twitter:url" content={`https://www.vevolmedia.com${pathname}`} />
					<meta name="twitter:title" content={pageMeta.metaTitle} />
					<meta name="twitter:description" content={pageMeta.metaDescription} />
					<meta name="twitter:image" content={pageMeta.ogImage.file.url} />
				</Helmet>
			);
		};

		return renderHelmet();
	};

	return (
		<AppProvider>
			<Seo />
			<div onMouseMove={handleMouseMove} role="presentation">
				{showBlob && (
					<div className="cursor-container">
						<animated.div style={animatedProps} className="cursor-wrapper">
							<Cursor />
						</animated.div>
					</div>
				)}
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
