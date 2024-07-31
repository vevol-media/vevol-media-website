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
		contactImageQuery: file(name: { eq: "team-vevol-image-1" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
	}
`;

export default function ContactPage({ data }) {
	const { contactImageQuery } = data;
	const contactImageData = getImage(contactImageQuery);

	return (
		<Layout>
			<SlimHero
				heading="Talk To Us!"
				subheading="Let us know how we can help and we'll get back to you within 24h."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						className="mb-4em"
						greenLine
						alignRight
						image={<GatsbyImage image={contactImageData} alt={'Vevol Media Team'} />}
						title={"Let's connect"}
						textContent={[
							<p className="mt-6">
								<strong>Co-founder: </strong>
								<span>Dan Nistor</span>
							</p>,
							<p className="mt-5">
								<strong>Phone Number: </strong>
								<a href="tel:+353892052402">+353 89 205 2402</a>
							</p>,
							<p className="mt-5">
								<strong>Email Address: </strong>
								<a href="mailto:hello@vevolmedia.com">hello@vevolmedia.com</a>
							</p>,
							<p className="mt-6">
								<strong>Vevol Media Limited </strong>is a Republic of Ireland registered company.
							</p>,
							<p className="mt-2">Registration No: 705441</p>,
							<p className="mt-2">VAT No: IE3919679TH</p>,
							<p className="mt-5">
								<strong>Corporate Office:</strong> Kildare Town, Co. Kildare, Ireland.
							</p>,
							<p className="mt-2">
								<strong>Registered Office:</strong> Ground Floor, 71 Lower Baggot Street, Dublin, D02
								P593, Ireland.
							</p>,
						]}
					/>
					<p>
						Here at Vevol Media, we believe communication is key. If you have any queries, comments or
						concerns, please do not hesitate to reach out to us, and our friendly team will get back to you
						as soon as possible.
					</p>
				</Container>
			</VevolSection>
		</Layout>
	);
}
