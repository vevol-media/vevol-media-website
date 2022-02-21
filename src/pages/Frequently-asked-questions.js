import React from 'react';
import Layout from '../components/layout/layout';
import FaqQuestions from '../components/faq/faq-questions/faq-questions';
import { Container } from 'bloomer';
import SlimHero from '../components/slim-hero/slim-hero';

export default function FaqPage() {
	return (
		<Layout>
			<SlimHero
				heading="Frequently Asked Questions"
				subheading="We want to be as transparent as possible so here you will find a list of questions you might have before you decide to work with us."
			/>
			<section className="faq">
				<Container>
					<div className="wrapper">
						<FaqQuestions />
					</div>
				</Container>
			</section>
		</Layout>
	);
}
