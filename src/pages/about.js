import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import TeamMembers from '../components/team-section/team-members';
import HeadingBlock from '../components/heading-block/heading-block';
import { Helmet } from 'react-helmet';
import ImageWithText from '../components/general-components/image-text-simple';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import { Fade } from 'react-reveal';
import VevolSection from '../components/general-components/vm-section';

export const data = graphql`
	query {
		location: allFile(filter: { name: { eq: "vevol-media-locations" } }) {
			nodes {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, width: 800, quality: 100)
				}
			}
		}
		brasov: allFile(filter: { name: { eq: "vevol-team-brasov" } }) {
			nodes {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, width: 800, quality: 100)
				}
			}
		}
	}
`;

export default function PageAbout({ data }) {
	const { brasov, location } = data;
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
			<VevolSection whiteBackground>
				<Container>
					<ImageWithText
						image={
							<GatsbyImage
								image={locationImage}
								alt={'Margee Case Study - Results &amp; Impact'}
								layout="fullWidth"
							/>
						}
						title={'Based in Europe'}
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
			<VevolSection>
				<Container>
					<HeadingBlock
						title={'A team of superstars'}
						highlightedWord={'team'}
						subtitle={'No project is too big or too complex for us. Our mindset: everything is possible!'}
					/>
					<Fade bottom>
						<p className="py-6">
							There are many variations of passages of Lorem Ipsum available, but the majority have
							suffered alteration in some form, by injected humour, or randomised words which don't look
							even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
							sure there isn't anything embarrassing hidden in the middle of text.
						</p>
					</Fade>
					<TeamMembers />
				</Container>
			</VevolSection>
			<VevolSection whiteBackground>
				<Container>
					<ImageWithText
						image={<GatsbyImage image={brasovImage} alt={'Margee Case Study - Results &amp; Impact'} />}
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
		</Layout>
	);
}
