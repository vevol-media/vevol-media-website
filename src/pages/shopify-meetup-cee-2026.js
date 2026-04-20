import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/layout';
import SponsorshipTier from '../components/sponsorship-tier/sponsorship-tier';
import {
	MAX_PARTNER_LOGOS,
	aboutImageRefs,
	footerImageRef,
	otherImageRefs,
	otherSponsorships,
	pillarImageRefs,
	tierConfigs,
} from '../data/shopify-meetup-cee-2026';

export const data = graphql`
	query {
		shopifyLogo: file(name: { eq: "shopify_transparent_logo" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 300 }, width: 300, quality: 100)
			}
		}
		ecommerceTodayLogo: file(name: { eq: "ecommerce_today_transparent" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 160 }, width: 160, quality: 100)
			}
		}
		vevolMediaLogo: file(name: { eq: "vevol_media_transparent" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 160 }, width: 160, quality: 100)
			}
		}
		event2024: allFile(filter: { relativeDirectory: { eq: "event/2024" } }, sort: { fields: name, order: ASC }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 200 }, quality: 85)
				}
			}
		}
		event2025: allFile(filter: { relativeDirectory: { eq: "event/2025" } }, sort: { fields: name, order: ASC }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 200 }, quality: 85)
				}
			}
		}
		eventPartners: allFile(filter: { relativeDirectory: { eq: "event-partners" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 150 }, height: 80, quality: 100)
				}
			}
		}
	}
`;

export default function ShopifyMeetupCEE2026Page({ data }) {
	const { shopifyLogo, ecommerceTodayLogo, vevolMediaLogo, event2024, event2025, eventPartners } = data;
	const shopifyLogoData = getImage(shopifyLogo);
	const ecommerceTodayLogoData = getImage(ecommerceTodayLogo);
	const vevolMediaLogoData = getImage(vevolMediaLogo);
	const photoSources = {
		'2024': event2024?.nodes || [],
		'2025': event2025?.nodes || [],
	};
	const partnerLogos = (eventPartners?.nodes || []).slice(0, MAX_PARTNER_LOGOS);

	const resolveImage = (ref) => getImage(photoSources[ref.source]?.[ref.index]);
	const resolveImages = (refs) => refs.map(resolveImage);

	const [aboutImageA, aboutImageB] = resolveImages(aboutImageRefs);
	const [pillarImageA, pillarImageB, pillarImageC] = resolveImages(pillarImageRefs);
	const otherImages = resolveImages(otherImageRefs);
	const footerImage = resolveImage(footerImageRef);

	const resolvedTierConfigs = tierConfigs.map((config) => ({
		...config,
		images: resolveImages(config.imageRefs),
	}));

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

					<section className="meetup-sponsorship-deck__section meetup-sponsorship-deck__about">
						<div className="meetup-sponsorship-deck__about-collage">
							{aboutImageA && (
								<div className="meetup-sponsorship-deck__about-photo meetup-sponsorship-deck__about-photo--a">
									<GatsbyImage image={aboutImageA} alt="Shopify Meetup CEE photo" />
								</div>
							)}
							{aboutImageB && (
								<div className="meetup-sponsorship-deck__about-photo meetup-sponsorship-deck__about-photo--b">
									<GatsbyImage image={aboutImageB} alt="Shopify Meetup CEE photo" />
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
					</section>

					<section className="meetup-sponsorship-deck__section meetup-sponsorship-deck__pillars-slide">
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
					</section>

					<section className="meetup-sponsorship-deck__section meetup-sponsorship-deck__past-sponsors">
						<h3 className="meetup-sponsorship-deck__section-title meetup-sponsorship-deck__section-title--center">
							OUR PREVIOUS <span className="meetup-sponsorship-deck__section-title-highlight">SHOPIFY MEETUP</span> SPONSORS
						</h3>
						<div className="meetup-sponsorship-deck__sponsor-grid">
							{partnerLogos.map((logo) => {
								const logoImg = getImage(logo);

								return logoImg ? (
									<div key={logo.name} className="meetup-sponsorship-deck__sponsor-logo">
										<GatsbyImage image={logoImg} alt={logo.name} objectFit="contain" />
									</div>
								) : null;
							})}
						</div>
					</section>

					{resolvedTierConfigs.map((config) => (
						<SponsorshipTier key={config.variant} config={config} />
					))}

					<section className="meetup-sponsorship-deck__section meetup-sponsorship-deck__other">
						<h3 className="meetup-sponsorship-deck__section-title">
							<span className="meetup-sponsorship-deck__section-title-highlight">OTHER</span> SPONSORSHIPS
						</h3>
						<div className="meetup-sponsorship-deck__other-frame">
							<div className="meetup-sponsorship-deck__other-grid">
								{otherSponsorships.map((item) => {
									const image = otherImages[item.imageIndex];
									const cardClasses = ['meetup-sponsorship-deck__other-card'];

									if (item.sold) cardClasses.push('meetup-sponsorship-deck__other-card--sold');

									return (
										<div key={item.label} className={cardClasses.join(' ')}>
											<div className="meetup-sponsorship-deck__other-image">
												{image && <GatsbyImage image={image} alt={item.label} />}
												{item.sold && <span className="meetup-sponsorship-deck__other-sold">SOLD!</span>}
											</div>
											<div className="meetup-sponsorship-deck__other-meta">
												<span className="meetup-sponsorship-deck__other-label">{item.label}</span>
												<span className="meetup-sponsorship-deck__other-price">{item.price}</span>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</section>

					<section className="meetup-sponsorship-deck__section meetup-sponsorship-deck__next-steps">
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
					</section>
				</div>

				<div className="meetup-sponsorship-deck__footer-banner">
					{footerImage && <GatsbyImage image={footerImage} alt="Shopify Meetup attendees" />}
				</div>
			</section>
		</Layout>
	);
}
