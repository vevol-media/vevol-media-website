import React from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout/layout';
import SlimHero from '../../components/slim-hero/slim-hero';
import SidewayText from '../../components/sideways-text-banner/sideway-text-banner';
import VevolSection from '../../components/general-components/vm-section';
import { Container } from 'bloomer';
import HeadingBlock from '../../components/heading-block/heading-block';
import ImageWithText from '../../components/general-components/image-text-simple';
import BottomCTA from '../../components/bottom-cta/bottom-cta';
import SplitNav from '../../components/general-components/split-nav';
import { Helmet } from 'react-helmet';

export const data = graphql`
	query {
		imageOneQuery: file(name: { eq: "service-web-design-image-two" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		imageTwoQuery: file(name: { eq: "service-web-design-image-one" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		bottomBannerImageQuery: file(name: { eq: "bottom-banner" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
	}
`;

export default function PageSingleService({ data }) {
	const { imageOneQuery, imageTwoQuery, bottomBannerImageQuery } = data;
	const imageOneData = getImage(imageOneQuery);
	const imageTwoData = getImage(imageTwoQuery);
	const bottomBannerImage = getImage(bottomBannerImageQuery);

	return (
		<Layout>
			<Helmet>
				<title>UI/UX Web Design Services - Vevol Media</title>
				<meta
					name="description"
					content="Fresh, modern web design for your website. High conversion rate and lead generation are at the core of our designs. Get in touch today."
				/>
			</Helmet>
			<SlimHero
				heading="UI/UX Web Design Services"
				subheading="Turn your website into a brilliant one with a brand new look and feel."
			/>
			<SidewayText lineOne={`web`} lineTwo={'design'} lineOneRepeat={30} lineTwoRepeat={15} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Focused On Web'}
						highlightedWord={'Web'}
						subtitle={
							'eCommerce or brochure websites, when it comes to design, they need to stand out and to convert.'
						}
						className="mb-4em"
					/>
					<ImageWithText
						image={<GatsbyImage image={imageOneData} alt={'Web Design Vevol Media'} />}
						title={'Idea Conception'}
						textContent={[
							<p className="mt-5">
								We kick off our design process by learning about your brand identity, your core values
								and your customers.
							</p>,
							<p className="mt-5">
								We apply modern techniques and approaches to make sure all parts involved in the process
								are happy with the results: from owner to user.
							</p>,
							<p className="mt-5">
								We like thinking outside the box and our designs match our views. They are catchy, fresh
								and on point and they convert.
							</p>,
						]}
						greenLine
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Let's Work Together"
				text="Get in touch to learn more about our bespoke development services"
				url="/contact"
				ctaText={'Ask for availability'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageTwoData} alt={'UI/UX Design Package'} />}
						title={'The whole package'}
						textContent={[
							<p className="mt-5">
								You don't have to worry about anything. We will create mobile designs, wireframes,
								mockups and the process will be transparent.
							</p>,
							<p className="mt-5">
								There are unlimited revisions you can request. We don't stop until the design matches
								the expectations.
							</p>,
							<p className="mt-5">
								Results will be accessible and available to preview, share, download or even edit.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<SplitNav
				leftTitle={'Conversion Rate Optimisation'}
				leftUrl={'/services/conversion-rate-optimisation'}
				rightTitle={'Shopify Development'}
				rightUrl={'/services/shopify-development'}
			/>
		</Layout>
	);
}
