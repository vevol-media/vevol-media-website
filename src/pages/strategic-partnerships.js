import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import VevolSection from '../components/general-components/vm-section';
import BottomCTA from '../components/bottom-cta/bottom-cta';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import ImageWithText from '../components/general-components/image-text-simple';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

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
			<Helmet>
				<title>Succesful Partnerships Opportunities - Vevol Media</title>
				<meta
					name="description"
					content="Grow your partners network with eCommerce experts and developers. Let's build success stories together. Get in touch today!"
				/>
			</Helmet>
			<SlimHero
				heading="Strategic Partnerships"
				subheading="Opportunities for similar thinking business to link up with Vevol Media and offer better, more customer-centric services packages."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageOne} alt={'Opportunities for strategic partnerships'} />}
						title={'Always looking to connect'}
						textContent={[
							<p className="mt-5">
								Here at Vevol Media, we are willing to do whatever it takes to deliver the best possible
								services for our customers.
							</p>,
							<p className="mt-5">
								Our Strategic Partnerships Program has this ideal in mind, as we are open to
								collaboration with other service providers if it is in the best interest of your
								project.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Let's Work Together"
				text="Reach out to us and let's talk about getting all customers the best services they deserve."
				url="/contact"
				ctaText={'Get in touch'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						image={<GatsbyImage image={imageTwo} alt={'Strategic partnerships at Vevol Media'} />}
						title={'Partner up with us'}
						textContent={[
							<p className="mt-5">
								Our Strategic Partnerships Program has this ideal in mind, as we are open to
								collaboration with other service providers if it is in the best interest of your
								project.
							</p>,
							<p className="mt-5">
								Our priority is helping our clients achieve their goals. We believe in the power of
								many. If your company is better suited for our clients's requirements, we will happily
								reccommend you.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
		</Layout>
	);
}
