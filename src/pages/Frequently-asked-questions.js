import Layout from '../components/layout/layout';
import FaqQuestions from '../components/faq/faq-questions/faq-questions';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import MainForm from '../components/forms/main-form';

export default function FaqPage() {
	return (
		<Layout>
			<SlimHero
				heading="Frequently Asked Questions"
				subheading="We want to be as transparent as possible so here you will find a list of questions you might have before you decide to work with us."
			/>
			<FaqQuestions />
			<MainForm
				title={"Let's Talk About Your Business"}
				subtitle={
					'Get in touch with us if you want to get a quote for your project or if you simply want to say hello! We are friendly!'
				}
			/>
		</Layout>
	);
}
