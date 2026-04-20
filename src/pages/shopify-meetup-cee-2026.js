import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/layout';

export const data = graphql`
	query {
		shopifyLogo: file(name: { eq: "shopify_transparent_logo" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 128 }, width: 128, quality: 100)
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
	}
`;

export default function ShopifyMeetupCEE2026Page({ data }) {
	const { shopifyLogo, ecommerceTodayLogo, vevolMediaLogo } = data;
	const shopifyLogoData = getImage(shopifyLogo);
	const ecommerceTodayLogoData = getImage(ecommerceTodayLogo);
	const vevolMediaLogoData = getImage(vevolMediaLogo);

	return (
		<Layout hasMainForm={false} customClass={'shopify-meetup-page'}>
			<Helmet>
				<title>Shopify Meetup CEE 2026</title>
				<meta name="description" content="Shopify Meetup CEE 2026 landing page." />
			</Helmet>
			<section id="shopify-meetup-cta" className="vm-section vm-section--background-black meetup-sponsorship-deck">
				<div className="container">
					<div className="meetup-sponsorship-deck__inner">
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
								<span className="meetup-sponsorship-deck__logo-separator">X</span>
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
					</div>
				</div>
			</section>
		</Layout>
	);
}
