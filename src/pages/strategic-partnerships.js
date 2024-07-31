import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container, Title } from 'bloomer';
import VevolSection from '../components/general-components/vm-section';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import ImageWithText from '../components/general-components/image-text-simple';
import { Link, graphql } from 'gatsby';
import PartnersSection from '../components/partners-section/partners-section';

export const data = graphql`
	query {
		imageOneQuery: file(name: { eq: "oneonethree" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		partnersQuery: allFile(filter: { relativeDirectory: { eq: "partners-network" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: DOMINANT_COLOR, height: 60, quality: 100)
				}
			}
		}
		allContentfulPartners(sort: { fields: name, order: ASC }) {
			edges {
				node {
				name
				logo {
					gatsbyImageData(layout: CONSTRAINED)
				}
				intro {
					raw
				}
				tags {
					tags
				}
				website
				featured
				}
			}
		}		
	}
`;

export default function StrategicPartnershipsPage({ data }) {
	const { imageOneQuery, partnersQuery, allContentfulPartners } = data;
	const imageOne = getImage(imageOneQuery);
	const partnersLogos = partnersQuery.nodes;
	const featuredPartners = allContentfulPartners.edges.filter(({ node }) => node.featured);
	const allPartners = allContentfulPartners.edges.sort((a, b) => a.node.name.localeCompare(b.node.name, undefined, { sensitivity: 'base' }));


	return (
		<Layout>
			<SlimHero
				heading="Strategic Partnerships"
				subheading="We offer opportunities for like-minded businesses to link up with Vevol Media to provide better, more customer-centric service packages."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageOne} alt={'Opportunities for strategic partnerships'} />}
						title={'Always Looking To Bring More Value'}
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
							<p className="mt-5">
								Our priority is helping our clients achieve their goals. We believe in the power of
								many. If your company is better suited for our client's requirements, we will happily
								recommend you!
							</p>,
							<Link to="#trusted-partners" className="vm-button vm-button--black mt-5">
								See our partners
							</Link>,
						]}
					/>
				</Container>
			</VevolSection>
			{featuredPartners.length > 0 && (
				<VevolSection backgroundColour={'grey'}>
					<Container>
						<Title tag="h3" isSize={3} hasTextAlign="centered">
							This month's featured partner
						</Title>
						<PartnersSection logos={partnersLogos} partners={featuredPartners} isFeatured />
					</Container>
				</VevolSection>
			)}
			<VevolSection backgroundColour={'white'}>
				<Container>
					<Title tag="h3" isSize={3}>
						All our partners
					</Title>
					<PartnersSection logos={partnersLogos} partners={allPartners} />
				</Container>
			</VevolSection>
		</Layout>
	);
}
