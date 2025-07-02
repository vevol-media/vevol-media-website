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
				<title>Vevol Media - Despre noi</title>
				<meta
					name="description"
					content="Vevol Media este o companie de dezvoltare web și e-commerce care oferă servicii de dezvoltare web, design, SEO și CRO pentru clienți din România și din întreaga lume."
				/>
			</Helmet>
			<SlimHero
				heading="Despre Vevol Media"
				subheading="Suntem o echipă de profesioniști în domeniul dezvoltării web și e-commerce, dedicați să oferim servicii de calitate și să ne asigurăm că clienții noștri au succes."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'O Echipă de Superstar-uri'}
						highlightedWord={'Echipă'}
						subtitle={
							'Niciun proiect nu este prea mare sau complex pentru noi aici la Vevol Media. Noi credem că orice este posibil!'
						}
					/>
					<Fade bottom>
						<p className="py-6">
							Echipa noastră este mereu gata să dea 100% pentru proiectul tău. O facem cu orgoliul și
							valoarea succesului dumneavoastră la fel de mult ca și valoarea propriei noastre. Fie că
							este vorba despre dezvoltare, design, strategii sau afaceri în general, toată lumea este
							investită în toate proiectele pe care le luăm. Deci, hai să lucrăm împreună și să probăm că
							nu sunt doar cuvinte.
						</p>
					</Fade>
					<TeamMembers teamMembers={allContentfulTeamMembers.nodes} />
				</Container>
			</VevolSection>
			<VevolSection>
				<Container>
					<ImageWithText
						image={<GatsbyImage image={brasovImage} alt={'Vevol Media team'} />}
						title={'Un Fundal Mic'}
						textContent={[
							<p className="mt-5">
								Vevol Media a fost înființată în 2018 și inițial a oferit servicii de configurare a
								magazinelor Shopify. Pe măsură ce am crescut, serviciile s-au extins la dezvoltarea de
								teme personalizate, SEO, CRO și design bespoke.
							</p>,
							<p className="mt-5">
								Avem o abordare de muncă la distanță; prin urmare, oferim serviciile noastre
								internațional. Echipa noastră se întâmpină în mod regulat în persoană pentru a lucra și
								avea rău împreună. Noi împărtășim obiective comune și ne străduim să le realizăm ca
								grup.
							</p>,
							<p className="mt-5">
								Noi putem de asemenea facilita întâlniri cu clienții noștri în persoană cu co-fondatori
								noștri sau manageri în Irlanda, Regatul Unit sau România. Veți găsi și pe noi la
								conferințe sau meet-ups relevante ca Shopify Unite, eCommerce Expo, GPEC și multe
								altele.
							</p>,
							<Link to="/contact" className="vm-button vm-button--white mt-5">
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
						title={'Bazat în Europa'}
						alignRight
						textContent={[
							<p className="mt-5">
								Vevol Media este o companie irlandeză și completă la distanță, cu membrii noștri care
								lucră independent de locațiile lor proprii. Astfel, puteți întâlni mereu pe noi în
								persoană în Irlanda, Regatul Unit sau România.
							</p>,
							<p className="mt-5">
								Misiunea noastră este să ajutăm afacerile să crească prin utilizarea abilităților și
								expertizei noastre în design web și dezvoltare, motor de căutare și optimizare a ratei
								de conversie.
							</p>,
							<p className="mt-5">
								E-commerce și Shopify sunt la coadă serviciilor noastre, iar echipa noastră are extensă
								cunoștință despre cum afacerile dumneavoastră pot
							</p>,
							<Link to="/contact" className="vm-button vm-button--black mt-5">
								Contactează-ne
							</Link>,
						]}
					/>
				</Container>
			</VevolSection>
		</Layout>
	);
}
