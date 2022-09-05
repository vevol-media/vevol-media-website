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
import videoOne from '../../images/videos/web-development-services-video.mp4';
import BottomCTA from '../../components/bottom-cta/bottom-cta';
import SidebarInfoText from '../../components/general-components/sidebar-info-text';
import SplitNav from '../../components/general-components/split-nav';

export const data = graphql`
	query {
		imageOneQuery: allFile(filter: { name: { eq: "web-development-services" } }) {
			nodes {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, width: 1000)
				}
			}
		}
		bottomBannerImageQuery: file(name: { eq: "bottom-banner" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 })
			}
		}
	}
`;

export default function PageWebDevelopment({ data }) {
	const { imageOneQuery, bottomBannerImageQuery } = data;
	const imageOneData = getImage(imageOneQuery.nodes[0].childImageSharp.gatsbyImageData);
	const bottomBannerImage = getImage(bottomBannerImageQuery);

	return (
		<Layout>
			<SlimHero
				heading="Web Development Services"
				subheading="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
			/>
			<SidewayText lineOne={`web`} lineTwo={'development'} lineOneRepeat={30} />
			<VevolSection whiteBackground>
				<Container>
					<HeadingBlock
						title={'Introduction title into this service'}
						highlightedWord={'service'}
						subtitle={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
						className="mb-4em"
					/>
					<ImageWithText
						image={<video src={videoOne} muted autoPlay loop></video>}
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
						greenLine
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Let's Work Together"
				text="Book a free consultation with one of out team members now"
				url="/"
				gradientColour="black"
			/>
			<VevolSection whiteBackground>
				<Container>
					<SidebarInfoText
						className={'mb-4em'}
						sidebarContent={[
							{
								title: 'Services',
								text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
							},
							{
								title: 'Services',
								text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
							},
						]}
						mainContent={[
							{
								title: 'Describe the process',
								text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
							},
							{
								text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
							},
							{
								title: 'Describe the process',
								text: 'Contrary to popular belief, Lorem Ipsum is not simply random. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
							},
						]}
					/>
					<ImageWithText
						alignRight
						image={
							<GatsbyImage
								image={imageOneData}
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
			<SplitNav
				leftTitle={'Shopify Migration'}
				leftUrl={'/services/shopify-migration'}
				rightTitle={'SEO Services'}
				rightUrl={'/services/seo-services'}
			/>
		</Layout>
	);
}
