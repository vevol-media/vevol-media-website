import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';

export default function Page() {
	return (
		<Layout hasMainForm={false} handle="nicely-done">
			<SlimHero heading="Have a lovely day!" subheading="We will get back to you shortly." />
		</Layout>
	);
}
