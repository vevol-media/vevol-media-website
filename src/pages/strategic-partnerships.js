import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import VevolSection from '../components/general-components/vm-section';
import BottomCTA from '../components/bottom-cta/bottom-cta';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import ImageWithText from '../components/general-components/image-text-simple';
import { graphql } from 'gatsby';

export const data = graphql`
	query {
		imageOneQuery: file(name: { eq: "opportunity" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		imageTwoQuery: file(name: { eq: "partnership" }) {
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

export default function StrategicPartnershipsPage({ data }) {
	const { imageOneQuery, imageTwoQuery, bottomBannerImageQuery } = data;
	const imageOne = getImage(imageOneQuery);
	const imageTwo = getImage(imageTwoQuery);
	const bottomBannerImage = getImage(bottomBannerImageQuery);

	return (
		<Layout>
			<SlimHero
				heading="Strategic Partnerships"
				subheading="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
			/>
			<VevolSection whiteBackground>
				<Container>
					<ImageWithText
						alignRight
						image={
							<GatsbyImage
								image={imageOne}
								alt={'Margee Case Study - Results &amp; Impact'}
								layout="fullWidth"
							/>
						}
						title={'A Little Background'}
						textContent={[
							<p className="mt-3">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry's standard dummy text ever since the 1500s
							</p>,
							<p className="mt-3">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry's standard dummy text ever since the 1500s
							</p>,
							<p className="mt-3">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry's standard dummy text ever since the 1500s
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Let's Work Together"
				text="Book a free consultation with one of out team members now"
				url="/"
				ctaText={'Get in touch'}
				gradientColour="black"
			/>
			<VevolSection whiteBackground>
				<Container>
					<ImageWithText
						image={
							<GatsbyImage
								image={imageTwo}
								alt={'Margee Case Study - Results &amp; Impact'}
								layout="fullWidth"
							/>
						}
						title={'A Little Background'}
						textContent={[
							<p className="mt-3">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry's standard dummy text ever since the 1500s
							</p>,
							<p className="mt-3">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry's standard dummy text ever since the 1500s
							</p>,
							<p className="mt-3">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry's standard dummy text ever since the 1500s
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
		</Layout>
	);
}
