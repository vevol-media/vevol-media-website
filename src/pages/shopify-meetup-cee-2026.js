import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/layout';
import SponsorshipTier from '../components/sponsorship-tier/sponsorship-tier';
import { MAX_PARTNER_LOGOS, otherSponsorships, sponsorLogoOrder, tierConfigs } from '../data/shopify-meetup-cee-2026';

const staggerStyle = (index) => /** @type {React.CSSProperties} */ ({ '--stagger-index': index });

const ANIMATED_SELECTORS = [
	'.meetup-sponsorship-deck__about-photo',
	'.meetup-sponsorship-deck__pillars-photo',
	'.meetup-sponsorship-deck__sponsor-grid',
	'.meetup-sponsorship-deck__circle',
	'.meetup-sponsorship-deck__stack-photo',
	'.meetup-sponsorship-deck__tier-image--single .gatsby-image-wrapper',
	'.meetup-sponsorship-deck__tier-title',
	'.meetup-sponsorship-deck__tier-body',
	'.meetup-sponsorship-deck__other-frame',
];

export const data = graphql`
	query {
		shopifyLogo: file(name: { eq: "shopify_transparent_logo" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 300 }, width: 300, quality: 85)
			}
		}
		ecommerceTodayLogo: file(name: { eq: "ecommerce_today_transparent" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 160 }, width: 160, quality: 85)
			}
		}
		vevolMediaLogo: file(name: { eq: "vevol_media_transparent" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 160 }, width: 160, quality: 85)
			}
		}
		aboutImageA: file(name: { eq: "about_1" }, relativeDirectory: { eq: "shopify-meetup-cee-2026" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 220 }, width: 860, quality: 80)
			}
		}
		aboutImageB: file(name: { eq: "about_2" }, relativeDirectory: { eq: "shopify-meetup-cee-2026" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 220 }, width: 980, quality: 80)
			}
		}
		pillarImage1: file(name: { eq: "pillars_1" }, relativeDirectory: { eq: "shopify-meetup-cee-2026" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 220 }, width: 860, quality: 80)
			}
		}
		pillarImage2: file(name: { eq: "pillars_2" }, relativeDirectory: { eq: "shopify-meetup-cee-2026" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 220 }, width: 860, quality: 80)
			}
		}
		pillarImage3: file(name: { eq: "pillars_3" }, relativeDirectory: { eq: "shopify-meetup-cee-2026" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 220 }, width: 720, quality: 80)
			}
		}
		tierPremier1: file(name: { eq: "tier_premier_1" }, relativeDirectory: { eq: "shopify-meetup-cee-2026" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 220 }, width: 820, quality: 80)
			}
		}
		tierPremier2: file(name: { eq: "tier_premier_2" }, relativeDirectory: { eq: "shopify-meetup-cee-2026" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 220 }, width: 620, quality: 80)
			}
		}
		tierPlus1: file(name: { eq: "tier_plus_1" }, relativeDirectory: { eq: "shopify-meetup-cee-2026" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 220 }, width: 820, quality: 80)
			}
		}
		tierPlus2: file(name: { eq: "tier_plus_2" }, relativeDirectory: { eq: "shopify-meetup-cee-2026" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 220 }, width: 820, quality: 80)
			}
		}
		tierBronze1: file(name: { eq: "tier_bronze_1" }, relativeDirectory: { eq: "shopify-meetup-cee-2026" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 220 }, width: 900, quality: 80)
			}
		}
		otherImages: allFile(
			filter: { relativeDirectory: { eq: "shopify-meetup-cee-2026" }, name: { regex: "/^other_[0-9]+$/" } }
			sort: { fields: name, order: ASC }
		) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 220 }, width: 600, quality: 80)
				}
			}
		}
		footerBanner: file(
			name: { eq: "Shopify Meetup CEE 2026 - Sponsorship Deck by Vevol Media & Ecommerce Today" }
			relativeDirectory: { eq: "shopify-meetup-cee-2026" }
		) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 240 }, width: 1920, quality: 80)
			}
		}
		sponsorLogos: allFile(filter: { relativeDirectory: { eq: "shopify-meetup-cee-2026/logos" } }, sort: { fields: name, order: ASC }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 180 }, height: 80, quality: 85)
				}
			}
		}
	}
`;

export default function ShopifyMeetupCEE2026Page({ data }) {
	const {
		shopifyLogo,
		ecommerceTodayLogo,
		vevolMediaLogo,
		aboutImageA,
		aboutImageB,
		pillarImage1,
		pillarImage2,
		pillarImage3,
		tierPremier1,
		tierPremier2,
		tierPlus1,
		tierPlus2,
		tierBronze1,
		otherImages: otherImagesData,
		footerBanner,
		sponsorLogos,
	} = data;
	const shopifyLogoData = getImage(shopifyLogo);
	const ecommerceTodayLogoData = getImage(ecommerceTodayLogo);
	const vevolMediaLogoData = getImage(vevolMediaLogo);
	const sponsorLogoNodes = sponsorLogos?.nodes || [];
	const partnerLogos = sponsorLogoOrder
		.map((name) => sponsorLogoNodes.find((node) => node.name === name))
		.filter(Boolean)
		.slice(0, MAX_PARTNER_LOGOS);

	const aboutImageAData = getImage(aboutImageA);
	const aboutImageBData = getImage(aboutImageB);
	const pillarImageA = getImage(pillarImage1);
	const pillarImageB = getImage(pillarImage3);
	const pillarImageC = getImage(pillarImage2);
	const otherImages = (otherImagesData?.nodes || []).map((node) => getImage(node));
	const footerImage = getImage(footerBanner);

	const tierImages = {
		premier: [getImage(tierPremier1), getImage(tierPremier2)],
		plus: [getImage(tierPlus1), getImage(tierPlus2)],
		bronze: [getImage(tierBronze1)],
	};
	const resolvedTierConfigs = tierConfigs.map((config) => ({
		...config,
		images: tierImages[config.variant] || [],
	}));

	useEffect(() => {
		const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		let observer;

		const attach = () => {
			if (motionQuery.matches) return;

			const targets = document.querySelectorAll(ANIMATED_SELECTORS.join(', '));

			observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						entry.target.classList.toggle('is-visible', entry.isIntersecting);
					});
				},
				{ threshold: 0.25 },
			);

			targets.forEach((el) => observer.observe(el));
		};

		const detach = () => {
			if (observer) {
				observer.disconnect();
				observer = undefined;
			}
		};

		const handleChange = () => {
			detach();
			attach();
		};

		attach();
		motionQuery.addEventListener('change', handleChange);

		return () => {
			detach();
			motionQuery.removeEventListener('change', handleChange);
		};
	}, []);

	return (
		<Layout hasHeader={false} hasMainForm={false} customClass={'shopify-meetup-page'}>
			<Helmet>
				<title>Shopify Meetup CEE 2026 - Sponsorship Deck</title>
				<meta
					name="description"
					content="The biggest official Shopify meetup in Central & Eastern Europe - 28th of May 2026 in Bucharest. Become a sponsor."
				/>
			</Helmet>
			<section id="shopify-meetup-cta" className="vm-section meetup-sponsorship-deck">
				<div className="container">
					<section className="meetup-sponsorship-deck__section meetup-sponsorship-deck__hero">
						<h1 className="meetup-sponsorship-deck__heading">
							<span className="meetup-sponsorship-deck__heading-line">SHOPIFY MEETUP</span>
							<span className="meetup-sponsorship-deck__heading-line meetup-sponsorship-deck__heading-line--sub">
								CENTRAL & EASTERN EUROPE 2026
								{shopifyLogoData && (
									<GatsbyImage image={shopifyLogoData} alt="Shopify Logo" className="meetup-sponsorship-deck__shopify-logo" />
								)}
							</span>
						</h1>

						<p className="meetup-sponsorship-deck__tagline">THE BIGGEST OFFICIAL SHOPIFY MEETUP IN EUROPE</p>
						<div className="meetup-sponsorship-deck__powered-by">
							<span className="meetup-sponsorship-deck__powered-by-label">POWERED BY</span>
							<div className="meetup-sponsorship-deck__logos">
								<div className="meetup-sponsorship-deck__logo-placeholder">
									{vevolMediaLogoData && (
										<GatsbyImage image={vevolMediaLogoData} alt="Vevol Media Logo" className="meetup-sponsorship-deck__logo" />
									)}
								</div>
								<span className="meetup-sponsorship-deck__logo-separator">x</span>
								<div className="meetup-sponsorship-deck__logo-placeholder">
									{ecommerceTodayLogoData && (
										<GatsbyImage
											image={ecommerceTodayLogoData}
											alt="Ecommerce Today Logo"
											className="meetup-sponsorship-deck__logo"
										/>
									)}
								</div>
							</div>
						</div>
						<h2 className="meetup-sponsorship-deck__title">
							<span className="meetup-sponsorship-deck__title-highlight">SPONSORSHIP</span> DECK
						</h2>
					</section>
				</div>

				<section className="meetup-sponsorship-deck__section meetup-sponsorship-deck__about">
					<div className="meetup-sponsorship-deck__about-inner">
						<div className="meetup-sponsorship-deck__about-collage">
							{aboutImageAData && (
								<div className="meetup-sponsorship-deck__about-photo meetup-sponsorship-deck__about-photo--a">
									<GatsbyImage image={aboutImageAData} alt="Shopify Meetup CEE registration desk" />
								</div>
							)}
							{aboutImageBData && (
								<div className="meetup-sponsorship-deck__about-photo meetup-sponsorship-deck__about-photo--b">
									<GatsbyImage image={aboutImageBData} alt="Shopify Meetup CEE attendees" />
								</div>
							)}
						</div>
						<div className="meetup-sponsorship-deck__about-copy">
							<h3 className="meetup-sponsorship-deck__eyebrow">ABOUT</h3>
							<p>
								After successfully delivering the Shopify Meetup CEE 2025, where we gathered 200+ Shopify agencies, tech vendors, app
								builders and merchants from all around Europe, we decided to put together the Shopify Meetup CEE 2026.
							</p>
							<p>
								We received a LOT of positive feedback from tech vendors and agencies, and we are aiming to bring 250 Shopify folks to
								the 2026 edition. Sponsors will have the privilege to participate in our private dinner the evening prior to the
								event, host a workshop, talk on stage and of course, the afterparty!
							</p>
							<p>We&rsquo;re inviting you to join us!</p>
							<p className="meetup-sponsorship-deck__about-meta">
								When? 28th of May 2026
								<br />
								From 9 AM - 5 PM (Bucharest Time Zone | GMT+2)
								<br />
								Where? Bucharest, Romania
							</p>
							<p className="meetup-sponsorship-deck__about-note">Limited sponsorship spots on a first-come, first-served basis.</p>
						</div>
					</div>
				</section>

				<section className="meetup-sponsorship-deck__section meetup-sponsorship-deck__pillars-slide">
					<div className="meetup-sponsorship-deck__pillars-inner">
						<div className="meetup-sponsorship-deck__pillars-collage">
							{pillarImageA && (
								<div className="meetup-sponsorship-deck__pillars-photo meetup-sponsorship-deck__pillars-photo--a">
									<GatsbyImage image={pillarImageA} alt="Shopify Meetup networking" />
								</div>
							)}
							{pillarImageB && (
								<div className="meetup-sponsorship-deck__pillars-photo meetup-sponsorship-deck__pillars-photo--b">
									<GatsbyImage image={pillarImageB} alt="Shopify Meetup networking" />
								</div>
							)}
							{pillarImageC && (
								<div className="meetup-sponsorship-deck__pillars-photo meetup-sponsorship-deck__pillars-photo--c">
									<GatsbyImage image={pillarImageC} alt="Shopify Meetup partners" />
								</div>
							)}
						</div>
						<ul className="meetup-sponsorship-deck__pillars">
							<li className="meetup-sponsorship-deck__pillar">BUILD NEW PARTNERSHIPS</li>
							<li className="meetup-sponsorship-deck__pillar">WIN CUSTOMERS</li>
							<li className="meetup-sponsorship-deck__pillar">LEARN AI IN ECOMMERCE</li>
						</ul>
					</div>
				</section>

				<section className="meetup-sponsorship-deck__section meetup-sponsorship-deck__past-sponsors">
					<div className="meetup-sponsorship-deck__past-sponsors-inner">
						<h3 className="meetup-sponsorship-deck__section-title meetup-sponsorship-deck__section-title--center">
							OUR PREVIOUS SHOPIFY MEETUP SPONSORS
						</h3>
						<div className="meetup-sponsorship-deck__sponsor-grid">
							{partnerLogos.map((logo, index) => {
								const logoImg = getImage(logo);

								return logoImg ? (
									<div key={logo.name} className="meetup-sponsorship-deck__sponsor-logo" style={staggerStyle(index)}>
										<GatsbyImage image={logoImg} alt={logo.name} objectFit="contain" />
									</div>
								) : null;
							})}
						</div>
					</div>
				</section>

				{resolvedTierConfigs.map((config) => (
					<SponsorshipTier key={config.variant} config={config} />
				))}

				<section className="meetup-sponsorship-deck__section meetup-sponsorship-deck__other">
					<div className="meetup-sponsorship-deck__other-inner">
						<h3 className="meetup-sponsorship-deck__section-title meetup-sponsorship-deck__section-title--center">
							OTHER <span className="meetup-sponsorship-deck__section-title-highlight">SPONSORSHIPS</span>
						</h3>
						<div className="meetup-sponsorship-deck__other-frame">
							<div className="meetup-sponsorship-deck__other-grid">
								{otherSponsorships.map((item, index) => {
									const image = otherImages[index];
									const cardClasses = [
										'meetup-sponsorship-deck__other-card',
										item.sold && 'meetup-sponsorship-deck__other-card--sold',
									]
										.filter(Boolean)
										.join(' ');

									return (
										<div key={item.label} className={cardClasses} style={staggerStyle(index)}>
											<div className="meetup-sponsorship-deck__other-image">
												{image && <GatsbyImage image={image} alt={item.label} />}
												<div className="meetup-sponsorship-deck__other-meta">
													<span className="meetup-sponsorship-deck__other-label">{item.label}</span>
													<span className="meetup-sponsorship-deck__other-price">{item.price}</span>
												</div>
												{item.sold && (
													<span
														className="meetup-sponsorship-deck__other-sold"
														role="status"
														aria-label={`${item.label} sold out`}
													>
														SOLD OUT!
													</span>
												)}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</section>

				<section className="meetup-sponsorship-deck__section meetup-sponsorship-deck__next-steps">
					<div className="meetup-sponsorship-deck__next-steps-inner">
						<h3 className="meetup-sponsorship-deck__section-title meetup-sponsorship-deck__section-title--center meetup-sponsorship-deck__section-title--sm">
							NEXT STEPS
						</h3>
						<p>
							Please contact us ASAP to express your interest in sponsoring the event at <strong>dan.nistor@vevolmedia.com</strong>
						</p>
						<p>
							<strong>Note</strong>: Your sponsorship is not guaranteed until it has been reviewed and approved by our team, ensuring
							alignment with our criteria for carefully vetted partners.
						</p>
						<p>Thanks for understanding.</p>
					</div>
				</section>

				<section
					className="meetup-sponsorship-deck__section meetup-sponsorship-deck__footer-banner"
					aria-label="Shopify Meetup CEE 2026 sponsorship deck"
				>
					{footerImage && (
						<GatsbyImage image={footerImage} alt="Shopify Meetup CEE 2026 - Sponsorship Deck by Vevol Media & Ecommerce Today" />
					)}
				</section>
			</section>
		</Layout>
	);
}
