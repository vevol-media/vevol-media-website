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
import meetupSchedule from '../enums/meetup-schedule';
import speakersList from '../enums/speakers-list';
import panelMembers from '../enums/panel-members';
import eventInfo from '../enums/event-info';
import '../components/forms/main-form.scss';

export const data = graphql`
	query {
		heroImageQuery: file(name: { eq: "event-image-updated" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		ogImageQuery: file(name: { eq: "og-image" }) {
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
					gatsbyImageData(placeholder: DOMINANT_COLOR, height: 120, quality: 100)
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

	const metaTitle = 'Shopify MeetUp Romania: E-commerce Insights and Networking';
	const metaDescription =
		'Join us for key insights in Shopify and e-commerce. Benefit from networking with industry experts. Free and limited registration available. Register now!';

	return (
		<Layout hasMainForm={false} hasHeader={false}>
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
				title={'SHOPIFY MEETUP ROMANIA'}
				upperText={'February 19th 2024 @ Hotel Capitol, Bucharest'}
				buttonText={'Register now'}
				buttonLink={'#form'}
				subtitle={'Powered by Vevol Media'}
				customClassName={'homepage-hero--shopify-meetup'}
			/>
			<SidewayText lineOne={`shopify`} lineTwo={'romania'} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock title={'Meet the Speakers...'} highlightedWord={'Speakers'} className={'mb-6'} />
					<GeneralMembers members={speakersList} altLayout />
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<HeadingBlock title={'...and the panel members'} highlightedWord={'panel'} className={'mb-6'} />
					<GeneralMembers members={panelMembers} altLayout />
				</Container>
			</VevolSection>
			<SidewayText lineOne={`19/02/2024`} lineTwo={'Bucharest'} />
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
					<p className='mt-6 mb-6'>Save the date & location: <strong>19th February 2024, 09:00 - 16:00</strong>, Hotel Capitol, Bucharest, Calea Victoriei 29, București 010061, Romania. After-drinks at <strong>Saint Patrick's Irish Pub</strong> in the Old Town.</p>
					<FeaturesIndex featuresIndexRef={featuresIndexRef} featuresIndex={meetupSchedule} />
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Registration is complimentary but seats are limited'}
						highlightedWord={'limited'}
						subtitle={'Sign up now and wait for your confirmation to secure your place.'}
						ctaText={'Register now'}
						ctaUrl={'#form'}
					/>
				</Container>
			</VevolSection>
			<ImagesMiniBanner images={partnersImagesData} arrowsVisible={true} />
			<VevolSection className={'main-contact'} customId={'form'}>
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
								Join us for a day full of expert information on Shopify. Don't miss out: February 19th
								2024 @ Hotel Capitol, Bucharest
							</p>
						</Fade>
					</Content>
					<div className="main-contact__form main-contact__form--meetup">
						<div className="klaviyo-form-TE3A28"></div>
					</div>
				</Container>
			</VevolSection>
		</Layout>
	);
}
