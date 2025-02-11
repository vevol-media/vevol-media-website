import Layout from '../components/layout/layout';
import React, { useRef } from 'react';
import { Container, Title, Content } from 'bloomer';
import { Fade } from 'react-reveal';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { Helmet } from 'react-helmet';
import { IconTopo } from '../helpers/icons';
import FeaturesIndex from '../components/features-index/features-index';
import GeneralMembers from '../components/team-section/general-members';
import HeadingBlock from '../components/heading-block/heading-block';
import ImagesMiniBanner from '../components/images-mini-banner/images-mini-banner';
import LandingHero from '../components/homepage-hero/landing-hero';
import ServicesList from '../components/services-list/services-list';
import SidewayText from '../components/sideways-text-banner/sideway-text-banner';
import VevolSection from '../components/general-components/vm-section';
import SlimHero from '../components/slim-hero/slim-hero';
import meetupSchedule from '../enums/meetup-schedule-2025';
import speakersList from '../enums/speakers-list';
import panelMembers from '../enums/panel-members';
import eventInfo from '../enums/event-info';
import '../components/forms/main-form.scss';
import {sendEventConversionAPI} from '../helpers/helpers';
import {useEffect} from 'react';

export const data = graphql`
	query {
		heroImageQuery: file(name: { eq: "meetup-2025-background" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		ogImageQuery: file(name: { eq: "shopify-meetup-2025" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		servicesIconsQuery: allFile(filter: { relativeDirectory: { eq: "services-icons" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 20 }, width: 40, quality: 100)
				}
			}
		}
		formBannerImageQuery: file(name: { eq: "vevol-media-strategist" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 1000 }, quality: 100)
			}
		}
		partnersImagesQuery: allFile(filter: { relativeDirectory: { eq: "event-partners" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: DOMINANT_COLOR, height: 200, quality: 100)
				}
			}
		}
	}
`;

export default function ShopifyMeetupPage({ data }) {
	const { heroImageQuery, servicesIconsQuery, formBannerImageQuery, partnersImagesQuery, ogImageQuery } = data;
	const heroImageData = getImage(heroImageQuery);
	const ogImage = getImage(ogImageQuery);
	const formBannerImageData = getImage(formBannerImageQuery);
	const partnersImagesData = partnersImagesQuery.nodes;
	const featuresIndexRef = useRef();

	const metaTitle = 'Shopify MeetUp - Central & Eastern Europe: E-commerce Insights and Networking';
	const metaDescription =
		'Join us for key insights in Shopify and e-commerce. Benefit from networking with industry experts. Limited tickets available. Register now!';


	useEffect(() => {
		sendEventConversionAPI("ViewContent");
		}, []);

	return (
		<Layout hasMainForm={false} hasHeader={false} customClass={'shopify-meetup-page'}>
			<Helmet>
				<title>{metaTitle}</title>
				<meta name="description" content={metaDescription} />

				<meta property="og:url" content="https://www.vevolmedia.com/shopify-meetup" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={metaTitle} />
				<meta property="og:description" content={metaDescription} />
				<meta property="og:image" content={ogImage.images.fallback.src} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@VevolMedia" />
				<meta property="twitter:domain" content="vevolmedia.com" />
				<meta property="twitter:url" content="https://www.vevolmedia.com/shopify-meetup" />
				<meta name="twitter:title" content={metaTitle} />
				<meta name="twitter:description" content={metaDescription} />
				<meta name="twitter:image" content={ogImage.images.fallback.src} />
			</Helmet>
			<LandingHero
				imageBottom={heroImageData}
				title={'CENTRAL & EASTERN EUROPE SHOPIFY MEETUP'}
				upperText={'April 3rd 2025 @ Hotel Caro, Bucharest'}
				buttonText={'Register now'}
				buttonLink={'#shopify-meetup-cta'}
				subtitle={'Powered by Vevol Media'}
				customClassName={'homepage-hero--shopify-meetup'}
			/>
			<SidewayText lineOne={`shopify`} lineTwo={'meetup'} lineOneRepeat={20} lineTwoRepeat={20} />
			<SlimHero
				heading="Join us for the first-ever Shopify Meetup Central & Eastern Europe 2025"
				subheading="April 3rd 2025 @ Hotel Caro, Bucharest"
				backgroundWhite
				hideBlob
			/>

			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock title={'What to Expect...'} highlightedWord={'What'} className={'mb-6'} />
					<p className="mb-5">
						Discover a unique experience at the <strong>premier Shopify event in the region</strong>, hosted
						in the elegant Hotel Caro, a premium venue in the heart of Bucharest, Romania.
					</p>
					<ul className="mb-6">
						<li className="mb-3">
							<p>
								🤝 Network with{' '}
								<strong>200+ merchants, developers, solution providers, and industry experts</strong>.
							</p>
						</li>
						<li className="mb-3">
							<p>
								🤝 Gain exclusive insights from <strong>top e-commerce leaders</strong>.
							</p>
						</li>
						<li className="mb-3">
							<p>
								🤝 Learn from <strong>inspiring keynote speakers</strong> who are shaping the future of
								e-commerce industry.
							</p>
						</li>
						<li>
							<p>
								🤝 Get <strong>actionable strategies</strong> and tips to grow your Shopify store or
								business.
							</p>
						</li>
					</ul>
					<p>
						This is your chance to connect with like-minded professionals, exchange ideas, and elevate your
						e-commerce journey.
					</p>

					<div>
						<p className="mb-4 mt-5">
							<strong>Format of the event:</strong>
						</p>
						<p className="mb-2">➤ e-comm panel</p>
						<p className="mb-2">➤ keynote speakers</p>
						<p>➤ after party events</p>
					</div>
				</Container>
			</VevolSection>

			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock title={'Meet the Speakers...'} highlightedWord={'Speakers'} className={'mb-6'} />
					<GeneralMembers members={speakersList} altLayout />
					<p className="mb-5 mt-6 text-center">
						🎟️ <strong>Reserve your spot now</strong> and be part of this exciting experience! Limited seats
						available.
					</p>
				</Container>
			</VevolSection>
			{/* <VevolSection backgroundColour={'grey'}>
				<Container>
					<HeadingBlock title={'...and the panel members'} highlightedWord={'panel'} className={'mb-6'} />
					<GeneralMembers members={panelMembers} altLayout />
				</Container>
			</VevolSection> */}
			<SidewayText lineOne={`03/04/2025`} lineTwo={'Bucharest'} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock title={'Why attend?'} highlightedWord={'Why'} />
					<ServicesList
						imageData={servicesIconsQuery.nodes}
						services={eventInfo.february2024}
						backgroundWhite
						topMargin
						className={'services-list--meetup'}
						linkText={'Register now'}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<HeadingBlock
						title={'Meetup Schedule'}
						highlightedWord={'Schedule'}
						className="mb-4em"
						subtitle={'Find out what we have prepared for you'}
					/>
					<p className="mt-6 mb-6">
						Save the date & location: <strong>April 3rd 2025, 10:00 - 18:00</strong>, Hotel Caro, Bucharest.
					</p>
					<FeaturesIndex
						customID={'meetup-schedule'}
						featuresIndexRef={featuresIndexRef}
						featuresIndex={meetupSchedule}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'} customId={'shopify-meetup-cta'}>
				<Container>
					<HeadingBlock
						title={'Sign up now to secure your place.'}
						highlightedWord={'now'}
						subtitle={'Limited tickets available'}
						ctaText={'Register now'}
						ctaUrl={
							'https://www.eventbrite.ie/e/shopify-meetup-central-eastern-europe-2025-tickets-1138409265759'
						}
						sendConversionEvent={true}
						conversionEventName={'InitiateCheckout'}
						ctaIsExternal={true}
					/>
				</Container>
			</VevolSection>
			<ImagesMiniBanner images={partnersImagesData} arrowsVisible={true} isSlider={false} />
			{/* <VevolSection className={'main-contact'} customId={'form'}>
				<IconTopo className="main-contact__pattern-one" />
				<BgImage className="main-contact__background-image" image={formBannerImageData} />
				<Container>
					<Content className="main-contact__intro">
						<Fade bottom>
							<Title tag="h2" isSize={1}>
								Register now
							</Title>
						</Fade>
						<Fade bottom delay={100}>
							<p>
								Join us for a day full of expert information on Shopify. Don't miss out: April 3rd
								2025 @ Hotel Caro, Bucharest
							</p>
						</Fade>
					</Content>
					<div className="main-contact__form main-contact__form--meetup">
						<div className="klaviyo-form-TE3A28"></div>
					</div>
				</Container>
			</VevolSection> */}
		</Layout>
	);
}
