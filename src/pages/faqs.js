import Layout from '../components/layout/layout';
import FaqQuestions from '../components/faq/faq-questions/faq-questions';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import VevolSection from '../components/general-components/vm-section';
import { Helmet } from 'react-helmet';
import generalQuestions from '../enums/questions';

export default function FaqPage() {
	const questionsStructuredData = JSON.stringify(
		generalQuestions.map((question) => ({
			'@type': 'Question',
			name: question.title,
			acceptedAnswer: {
				'@type': 'Answer',
				text: question.text,
			},
		}))
	);

	return (
		<Layout handle="faqs">
			<Helmet>
				<script type="application/ld+json">
					{`
						{
							"@context": "https://schema.org",
							"@type": "FAQPage",
							"mainEntity": ${questionsStructuredData}
						}
					`}
				</script>
			</Helmet>
			<SlimHero
				heading="Frequently Asked Questions"
				subheading="We want to be as transparent as possible, so here is a list of questions you might have before you decide to work with us."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<FaqQuestions />
				</Container>
			</VevolSection>
		</Layout>
	);
}
