import React from 'react';
import Layout from '../components/layout/layout';
import SlimHero from '../components/slim-hero/slim-hero';
import VevolSection from '../components/general-components/vm-section';
import { Container } from 'bloomer';
import SidebarInfoText from '../components/general-components/sidebar-info-text';

export default function CoreValues() {
	return (
		<Layout>
			<SlimHero
				heading="Our Core Values"
				subheading="The principles that guide our team and shape our company culture"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Ownership',
								text: 'Be accountable for your actions, always ask questions and plan for the next move, accept constructive feedback and criticism',
							},
							{
								title: 'Growth',
								text: 'Have an open mindset, you either evolve or lose. There is no stagnation, be curious',
							},
							{
								title: 'Openness',
								text: 'Embrace challenge, step out of your comfort zone, see problems as opportunities',
							},
							{
								title: 'Efficiency',
								text: "Don't do a manual job when you have technology at hand to automate things, work smart and not hard",
							},
						]}
						mainContent={[
							{
								title: 'Ownership',
								text: 'We believe that everyone should take ownership of their actions as a captain does with his ship and crew. A smooth sea never made a good sailor. Braveness is for the winners!',
							},
							{
								title: 'Growth',
								text: 'Our belief is that growth is the core value of an open mindset. In order to grow you should always be curious and here, at Vevol Media we are all curious because we take everything to the next level.',
							},
							{
								title: 'Openness',
								text: 'New ideas are opportunities for us because we believe creativity is coming up with new ideas and innovation is implementing those ideas and our team does both with an open mind.',
							},
							{
								title: 'Efficiency',
								text: 'By leveraging the right tools and resources, you can streamline workflows and free up time to focus on more important tasks, ultimately leading to better results and greater success.',
							},
						]}
					/>
				</Container>
			</VevolSection>
		</Layout>
	);
}
