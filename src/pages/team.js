import * as React from 'react';
import Layout from '../components/layout/layout';
import TeamInfo from '../components/team-section/team-info';
import TeamMembers from '../components/team-section/team-members';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import { graphql } from 'gatsby';

const Team = ({ data }) => {
	return (
		<Layout>
			<SlimHero
				heading="Our team"
				subheading="A wide range of talent ."
			/>

			<div className="vm-section vm-section--white">
				<Container >
					<TeamInfo />
					<TeamMembers data={data} />
				</Container>
			</div>
		</Layout>
	);
};
export default Team;

export const data = graphql`
	query MembersData {
		allFile(filter: { relativeDirectory: { eq: "team" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: TRACED_SVG)
				}
			}
		}
	}
`;
