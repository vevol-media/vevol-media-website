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
				<title>Contact Vevol Media România - Parteneri Shopify Certificați</title>
				<meta
					name="description"
					content="Contactează echipa Vevol Media pentru servicii Shopify în România. Consultație gratuită pentru proiectul tău eCommerce cu parteneri certificați."
				/>
			</Helmet>
			<SlimHero
				heading="Contactează Echipa Vevol Media"
				subheading="Consultație Gratuită pentru Proiectul Tău Shopify"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						className="mb-4em"
						greenLine
						alignRight
						image={<GatsbyImage image={contactImageData} alt={'Vevol Media Team'} />}
						title={'Să Discutăm Despre Proiectul Tău'}
						textContent={[
							<p className="mt-6">Echipa noastră este gata să te ajute</p>,
							<p className="mt-5">
								Suntem aici pentru a răspunde la toate întrebările tale despre serviciile Shopify și
								pentru a discuta cum putem contribui la succesul afacerii tale online. Indiferent dacă
								ai nevoie de o consultație rapidă sau de o analiză detaliată a nevoilor, echipa noastră
								de experți este pregătită să te ajute.
							</p>,
							<p className="mt-6">
								<strong>Dan Nistor - Co-founder și CEO</strong>
							</p>,
							<p className="mt-5">
								<strong>Telefon: </strong>
								<a href="tel:+353892052402">+353 89 205 2402</a>
							</p>,
							<p className="mt-5">
								<strong>Email: </strong>
								<a href="mailto:hello@vevolmedia.com">hello@vevolmedia.com</a>
							</p>,
							<p className="mt-5">
								<strong>Specializare: </strong>Consultanță strategică și soluții enterprise
							</p>,
							<p className="mt-6">
								<strong>Contact România:</strong>
							</p>,
							<p className="mt-2">Disponibilitate: Întâlniri în persoană în România</p>,
							<p className="mt-2">Acoperire: București, Cluj-Napoca, Iași, Timișoara</p>,
							<p className="mt-2">Servicii: Consultații locale și suport în limba română</p>,
						]}
					/>
					<p>
						<strong>Vevol Media Limited</strong> - Companie înregistrată în Republica Irlanda
					</p>
					<p className="mt-2">Număr înregistrare: 705441</p>
					<p className="mt-2">Cod TVA: IE3919679TH</p>
					<p className="mt-5">
						<strong>Birou Corporativ:</strong> Kildare Town, Co. Kildare, Irlanda
					</p>
					<p className="mt-2">
						<strong>Birou Înregistrat:</strong> Ground Floor, 71 Lower Baggot Street, Dublin, D02 P593,
						Irlanda
					</p>
				</Container>
			</VevolSection>
		</Layout>
	);
}
