import Layout from '../../components/layout/layout';
import React from 'react';
import SlimHero from '../../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import TeamMembers from '../../components/team-section/team-members';
import HeadingBlock from '../../components/heading-block/heading-block';
import { Helmet } from 'react-helmet';
import ImageWithText from '../../components/general-components/image-text-simple';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { graphql, Link } from 'gatsby';
import { Fade } from 'react-reveal';
import VevolSection from '../../components/general-components/vm-section';

export const data = graphql`
	query {
		locationImageQuery: file(name: { eq: "locations-24" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, width: 800, quality: 100)
			}
		}
		brasovImageQuery: file(name: { eq: "vevol-media-team-v2" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, width: 800, quality: 100)
			}
		}
		allContentfulTeamMembers(sort: { fields: name, order: ASC }) {
			nodes {
				name
				role
				image {
					gatsbyImageData(layout: CONSTRAINED, width: 600, height: 600)
				}
			}
		}
	}
`;

export default function PageAbout({ data }) {
	const { locationImageQuery, brasovImageQuery, allContentfulTeamMembers } = data;
	const locationImage = getImage(locationImageQuery);
	const brasovImage = getImage(brasovImageQuery);

	return (
		<Layout>
			<Helmet>
				<title>Partener Certificat Shopify România - Echipa Vevol Media</title>
				<meta
					name="description"
					content="Descoperă echipa de experți Shopify din România cu peste 5 ani experiență în dezvoltare eCommerce, parteneri oficiali Shopify pentru soluții enterprise."
				/>
			</Helmet>
			<SlimHero
				heading="Despre Vevol Media"
				subheading="Parteneri Certificați Shopify cu Experiență Românească"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Experți Shopify în România'}
						highlightedWord={'Experți'}
						subtitle={'Transformăm viziunile în magazine online de succes'}
					/>
					<Fade bottom>
						<p className="py-6">
							Suntem o echipă de profesioniști în dezvoltarea eCommerce și parteneri oficiali Shopify,
							specializați în soluții enterprise pentru piața românească și internațională. Cu peste 5 ani
							de experiență, am ajutat zeci de companii să își transforme viziunile în magazine online
							performante.
						</p>
					</Fade>
					<TeamMembers teamMembers={allContentfulTeamMembers.nodes} />
				</Container>
			</VevolSection>
			<VevolSection>
				<Container>
					<ImageWithText
						image={<GatsbyImage image={brasovImage} alt={'Vevol Media team'} />}
						title={'O Echipă de Specialiști Shopify'}
						textContent={[
							<p className="mt-5">Experiență combinată pentru rezultate extraordinare</p>,
							<p className="mt-5">
								Echipa noastră reunește specialiști în dezvoltare Shopify, consultanți eCommerce,
								experți SEO și designeri UX/UI. Fiecare membru aduce experiență valoroasă pentru a
								asigura succesul proiectelor noastre. Suntem mândri să lucrăm cu parteneri din Statele
								Unite, Canada, România, Irlanda și Marea Britanie.
							</p>,
							<Link to="/ro/contact" className="vm-button vm-button--white mt-5">
								Contactează-ne
							</Link>,
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						image={<GatsbyImage image={locationImage} alt={'Vevol Media locations'} />}
						title={'Background și Experiență'}
						alignRight
						textContent={[
							<p className="mt-5">De la startup la partener Shopify de încredere</p>,
							<p className="mt-5">
								Vevol Media a fost înființată în 2018 și a evoluat rapid de la servicii de configurare
								Shopify la dezvoltarea de soluții enterprise complete. Serviciile noastre s-au extins
								pentru a include dezvoltarea de teme personalizate, optimizare SEO, CRO și consultanță
								strategică pentru afaceri de toate dimensiunile.
							</p>,
							<p className="mt-5">
								Deși avem o abordare de muncă la distanță, facilitând servicii internaționale, echipa
								noastră se întâlnește regulat pentru a colabora direct pe proiecte. Oferim consultanță
								față în față cu co-fondatorii noștri în România, Irlanda și Marea Britanie, participând
								activ la conferințe precum Shopify Unite, eCommerce Expo și GPEC.
							</p>,
							<Link to="/ro/contact" className="vm-button vm-button--black mt-5">
								Contactează-ne
							</Link>,
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'} borderTop>
				<Container>
					<HeadingBlock
						title={'Misiunea Noastră'}
						highlightedWord={'Misiunea'}
						subtitle={
							'Creșterea afacerilor prin strategii complete și soluții eficiente pentru piața românească și internațională'
						}
					/>
					<Fade bottom>
						<p className="py-6">
							Misiunea noastră este să ajutăm companiile româneşti și internaționale să crească prin
							utilizarea experienței noastre în design web, dezvoltare Shopify, optimizare SEO și
							strategii de conversie. eCommerce și Shopify sunt fundamentul serviciilor noastre, iar
							echipa noastră posedă cunoștințe extinse despre modul în care afacerile pot prospera în
							mediul digital.
						</p>
					</Fade>
				</Container>
			</VevolSection>
		</Layout>
	);
}
