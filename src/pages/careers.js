import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import VevolSection from '../components/general-components/vm-section';
import ImageWithText from '../components/general-components/image-text-simple';
import { graphql, Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';
import MediumCard from '../components/general-components/medium-card';
import { Title } from 'bloomer/lib/elements/Title';

export const data = graphql`
	query {
		contactImageQuery: file(name: { eq: "team-vevol-image-1" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		jobPosts: allContentfulJobPost {
			edges {
				node {
					slug
					title
					keyFeatures
					briefIntro {
						briefIntro
					}
				}
			}
		}
	}
`;

export default function CareersPage({ data }) {
	const { contactImageQuery, jobPosts } = data;
	const contactImageData = getImage(contactImageQuery);

	return (
		<Layout>
			<Helmet>
				<title>Door is open! See what roles we are hiring for now at Vevol Media</title>
				<meta
					name="description"
					content="We are always looking for talented people to join our team. Check out our open positions and apply today!"
				/>
			</Helmet>
			<SlimHero
				heading="Join the gang!"
				subheading="We are always looking for talented people to join our team. Check out our open positions and apply today!"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						className="mb-4em"
						greenLine
						alignRight
						image={<GatsbyImage image={contactImageData} alt={'Vevol Media Team'} />}
						title={"Let's grow together!"}
						textContent={[
							<p className="mt-6">
								If you found yourself here, it means you are interested in joining our team. We are
								always on the lookout for the next superstar so apply for any of our open positions or
								send us your CV and cover letter to{' '}
								<a href="mailto:careers@vevolmedia.com">careers@vevolmedia.com</a>
							</p>,
						]}
					/>
					<Title tag="h3" isSize={3}>
						Open Roles
					</Title>
					<div className="careers__job-list">
						{jobPosts.edges.map((role, index) => (
							<MediumCard
								key={index}
								title={role.node.title}
								subtitle={role.node.briefIntro.briefIntro}
								featuresTitle={'Key Features'}
								listOfFeatures={role.node.keyFeatures}
								cta={
									<Link to={`/careers/${role.node.slug}`}>
										<span className="vm-button vm-button--black">Apply now</span>
									</Link>
								}
							/>
						))}
					</div>
				</Container>
			</VevolSection>
		</Layout>
	);
}
