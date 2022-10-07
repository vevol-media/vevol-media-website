import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Helmet } from 'react-helmet';

export default function Page() {
	return (
		<Layout hasMainForm={false}>
			<Helmet>
				<title>Thanks for reaching out to Vevol Media</title>
				<meta
					name="description"
					content="You've contacted Vevol Media. We will get back to you as soon as possible and get your query sorted."
				/>
				<meta name="robots" content="noindex,nofollow" />
			</Helmet>
			<SlimHero heading="Have a lovely day!" subheading="We will get back to you shortly." />
		</Layout>
	);
}
