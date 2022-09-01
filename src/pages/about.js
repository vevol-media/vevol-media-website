import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import TeamMembers from '../components/team-section/team-members';
import HeadingBlock from '../components/heading-block/heading-block';
import { Helmet } from 'react-helmet';
import ImageWithText from '../components/general-components/image-text-simple';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import MainForm from '../components/forms/main-form';

export default function PageAbout() {
	const imageData = useStaticQuery(
		graphql`
			query {
				location: allFile(filter: { name: { eq: "vevol-media-locations" } }) {
					nodes {
						childImageSharp {
							gatsbyImageData(placeholder: BLURRED, width: 800)
						}
					}
				}
				brasov: allFile(filter: { name: { eq: "vevol-team-brasov" } }) {
					nodes {
						childImageSharp {
							gatsbyImageData(placeholder: BLURRED, width: 800)
						}
					}
				}
			}
		`
	);

	const { brasov, location } = imageData;
	const locationImage = getImage(location.nodes[0].childImageSharp.gatsbyImageData);
	const brasovImage = getImage(brasov.nodes[0].childImageSharp.gatsbyImageData);

	return (
		<Layout>
			<Helmet>
				<title>About Vevol Media</title>
			</Helmet>
			<SlimHero
				heading="About Vevol Media"
				subheading="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
			/>
			<div className="vm-section vm-bg--white">
				<Container>
					<ImageWithText
						image={<GatsbyImage image={locationImage} alt={'Margee Case Study - Results &amp; Impact'} />}
						title={'Based in Europe'}
						textContent={[
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
						]}
					/>
				</Container>
			</div>
			<div className="vm-section">
				<Container>
					<HeadingBlock
						title={'A team of superstars'}
						highlightedWord={'team'}
						subtitle={'No project is too big or too complex for us. Our mindset: everything is possible!'}
					/>
					<p className="py-6">
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered
						alteration in some form, by injected humour, or randomised words which don't look even slightly
						believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
						anything embarrassing hidden in the middle of text.
					</p>
					<TeamMembers />
				</Container>
			</div>
			<div className="vm-section vm-bg--white">
				<Container>
					<ImageWithText
						image={<GatsbyImage image={brasovImage} alt={'Margee Case Study - Results &amp; Impact'} />}
						title={'A Little Background'}
						textContent={[
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
						]}
					/>
				</Container>
			</div>
			<MainForm
				title={"Let's Talk About Your Business"}
				subtitle={
					'Get in touch with us if you want to get a quote for your project or if you simply want to say hello! We are friendly!'
				}
			/>
		</Layout>
	);
}
