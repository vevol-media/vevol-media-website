import React from 'react';
import Layout from '../components/layout/layout';
import TeamInfo from '../components/team-section/team-info';
import TeamMembers from '../components/team-section/team-members';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';

export default function Team({ data }) {
	return (
		<Layout>
			<SlimHero heading="Our team" subheading="A wide range of talent ." />

			<div className="vm-section vm-bg--white">
				<Container>
					<TeamInfo />
					<TeamMembers />
				</Container>
			</div>
		</Layout>
	);
}
