import React from 'react';
import Layout from '../../components/layout/layout';
import SlimHero from '../../components/slim-hero/slim-hero';
import { Container } from 'bloomer';

export default function PageBrandingCreative() {
	return (
		<Layout>
			<SlimHero
				heading="Branding & Creative"
				subheading="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
			/>
			<Container></Container>
		</Layout>
	);
}
