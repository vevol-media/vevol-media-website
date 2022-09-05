import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import VevolSection from '../components/general-components/vm-section';
import ImageWithText from '../components/general-components/image-text-simple';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

export const data = graphql`
	query {
		danNistorQuery: file(name: { eq: "dan-nistor-phone" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 })
			}
		}
	}
`;

export default function ContactPage({ data }) {
	const { danNistorQuery } = data;
	const danNistorImage = getImage(danNistorQuery);

	return (
		<Layout>
			<SlimHero
				heading="Get in touch"
				subheading="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
			/>
			<VevolSection whiteBackground>
				<Container>
					<ImageWithText
						greenLine
						alignRight
						image={
							<GatsbyImage
								image={danNistorImage}
								alt={'Margee Case Study - Results &amp; Impact'}
								layout="fullWidth"
							/>
						}
						title={"Let's connect"}
						textContent={[
							<p className="mt-6">
								<strong>Person of Contact: </strong>
								<span>Dan Nistor</span>
							</p>,
							<p className="mt-3">
								<strong>Phone Number: </strong>
								<a href="tel:+353892052402">+353 89 205 2402</a>
							</p>,
							<p className="mt-3">
								<strong>Email Address: </strong>
								<a href="mailto:hello@vevolmedia.com">hello@vevolmedia.com</a>
							</p>,
							<p className="mt-6">
								<strong>Vevol Media Limited </strong>is a Republic of Ireland registered company.
							</p>,
							<p className="mt-2">Registration No: 705441</p>,
							<p className="mt-2">VAT No: IE3919679TH</p>,
							<p className="mt-2">
								Registered Office: Ground Floor, 71 Lower Baggot Street, Dublin, D02 P593, Ireland.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
		</Layout>
	);
}
