import Layout from '../components/layout/layout';
import FaqQuestions from '../components/faq/faq-questions/faq-questions';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import VevolSection from '../components/general-components/vm-section';

export default function FaqPage() {
	return (
		<Layout>
			<SlimHero
				heading="Frequently Asked Questions"
				subheading="We want to be as transparent as possible so here you will find a list of questions you might have before you decide to work with us."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<FaqQuestions />
				</Container>
			</VevolSection>
		</Layout>
	);
}
