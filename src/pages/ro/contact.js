import Layout from '../../components/layout/layout';
import React from 'react';
import SlimHero from '../../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import VevolSection from '../../components/general-components/vm-section';
import ImageWithText from '../../components/general-components/image-text-simple';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';

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
			<Helmet>
				<title>Vevol Media - Contactează-ne</title>
				<meta
					name="description"
					content="Contactează-ne dacă dorești să obții un deviz pentru proiectul tău sau dacă doar vrei să zici 'salut'! Ne-ar plăcea să auzim de la tine!"
				/>
			</Helmet>
			<SlimHero
				heading="Vorbește cu noi!"
				subheading="Spune-ne cum putem ajuta și vom reveni la tine în cel mai scurt timp posibil."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						className="mb-4em"
						greenLine
						alignRight
						image={<GatsbyImage image={contactImageData} alt={'Vevol Media Team'} />}
						title={'Vorbește cu noi'}
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
								<strong>Vevol Media Limited </strong>este o companie înființată în Republica Irlanda.
							</p>,
							<p className="mt-2">Registration No: 705441</p>,
							<p className="mt-2">VAT No: IE3919679TH</p>,
							<p className="mt-5">
								<strong>Birou Corporativ:</strong> Kildare Town, Co. Kildare, Irlanda.
							</p>,
							<p className="mt-2">
								<strong>Birou Înregistrat:</strong> Ground Floor, 71 Lower Baggot Street, Dublin, D02
								P593, Irlanda.
							</p>,
						]}
					/>
					<p>
						Aici la Vevol Media, credem că comunicarea este esențială. Dacă ai orice întrebări, comentarii
						sau nelămuriri, nu ezita să ne contactezi, iar echipa noastră prietenoasă vă va reveni în cel
						mai scurt timp posibil.
					</p>
				</Container>
			</VevolSection>
		</Layout>
	);
}
