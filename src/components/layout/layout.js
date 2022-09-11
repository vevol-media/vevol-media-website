import React, { useEffect } from 'react';
import Header from '../header/header';
import WebsiteFooter from '../footer/footer';
import Fade from 'react-reveal/Fade';
import { Cursor } from '../cursor/cursor';
import { useSpring, animated } from 'react-spring';
import MainForm from '../forms/main-form';
import { Helmet } from 'react-helmet';
import ogImage from '../../images/vevol-media-og-image.jpg';
import favicon from '../../images/icon.png';

export default function Layout({ children, headerBg, showBlob }) {
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
		'Shopify Experts based in Ireland that provide bespoke eCommerce complete services. ✔️ From Shopify setup to theme development. ☝ Get in touch with us today!';

	const handleScroll = (event) => {
		if (window.scrollY > 100) {
			document.querySelector('.vm-header').classList.add('vm-header--full');
		} else {
			document.querySelector('.vm-header').classList.remove('vm-header--full');
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	});

	return (
		<Fade>
			<div onMouseMove={handleMouseMove} role="presentation">
				{showBlob && (
					<div className="cursor-container">
						<animated.div style={animatedProps} className="cursor-wrapper">
							<Cursor />
						</animated.div>
					</div>
				)}
				<Helmet>
					<link rel="icon" href={favicon} />
					<title>{metaTitle}</title>

					<meta property="og:url" content="https://www.vevolmedia.com" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content={metaTitle} />
					<meta property="og:description" content={metaDescription} />
					<meta property="og:image" content={ogImage} />

					<meta name="twitter:card" content="summary_large_image" />
					<meta property="twitter:domain" content="vevolmedia.com" />
					<meta property="twitter:url" content="https://www.vevolmedia.com" />
					<meta name="twitter:title" content={metaTitle} />
					<meta name="twitter:description" content={metaDescription} />
					<meta name="twitter:image" content={ogImage} />
				</Helmet>
				<Header background={headerBg} />
				<main>{children}</main>
				<MainForm
					title={"Let's Talk About Your Business"}
					subtitle={
						"Get in touch with us if you want to get a quote for your project or simply want to say hello! We'd love to hear from you!"
					}
				/>
				<WebsiteFooter />
			</div>
		</Fade>
	);
}
