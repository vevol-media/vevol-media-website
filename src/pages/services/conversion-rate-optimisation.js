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

export const data = graphql`
	query {
		imageOneQuery: file(name: { eq: "service-cro-analysis" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		imageTwoQuery: file(name: { eq: "service-cro-results" }) {
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
		<Layout handle="conversion-rate">
			<SlimHero
				heading="Conversion Rate Optimisation"
				subheading="Increase sales numbers by tweaking your website for CRO."
			/>
			<SidewayText lineOne={`conversion`} lineTwo={'rate'} lineTwoRepeat={30} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'CRO at the core of success'}
						highlightedWord={'success'}
						subtitle={'When your website has high traffic but low sales, CRO is first on the to-do list.'}
						className="mb-4em"
					/>
					<ImageWithText
						image={<GatsbyImage image={imageOneData} alt={'CRO Vevol Media'} />}
						title={'Analysing and Reporting'}
						textContent={[
							<p className="mt-5">
								Data doesn't lie. When it comes to CRO, we always run initial data analysis, in order to
								understand what the current situation is.
							</p>,
							<p className="mt-5">
								Collecting data can be done in a snapshot or we can help you integrate heatmap services.
								These will give us a more detailed picture of how your potential customer thinks and why
								it doesn't convert.
							</p>,
							<p className="mt-5">
								Periodic reports will be generated, based on the type of data that is collected. These
								reports will include actions and strategies to be implemented for higher conversion
								rates.
							</p>,
							<p className="mt-5">
								All our strategies are aligned with latest industry standards, based on your niche, user
								typology and UX/UI.
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
				ctaText={'Contact Us'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageTwoData} alt={'Vevol Media CRO Results'} />}
						title={'Implementation & Results'}
						textContent={[
							<p className="mt-5">
								All actions and strategies from our reports can immediately be implemented by our team.
								Some will require development, some can be taken care by yourself.
							</p>,
							<p className="mt-5">
								You should see results from the get-go, especially in cases where core conversion rate
								elments are missing.
							</p>,
							<p className="mt-5">
								Our job doesn't stop here. We continue to work with you and follow the progress closely,
								in order to tweak any required strategies.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<SplitNav
				leftTitle={'Bespoke Development'}
				leftUrl={'/services/bespoke-development'}
				rightTitle={'eCommerce SEO'}
				rightUrl={'/services/seo-services'}
			/>
		</Layout>
	);
}
