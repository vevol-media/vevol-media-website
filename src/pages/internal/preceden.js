import React from 'react';
import Layout from '../../components/layout/layout';
import SlimHero from '../../components/slim-hero/slim-hero';
import VevolSection from '../../components/general-components/vm-section';
import { Helmet } from 'react-helmet';

export default function PrecedenPage() {
	return (
		<Layout>
			<Helmet>
				<title>Vevol Media Internal</title>
				<meta name="robots" content="noindex,nofollow" />
				<meta name="description" content="Preceden timeline for Vevol Media internal use only." />
			</Helmet>
			<SlimHero heading="Preceden Timeline" />
			<VevolSection backgroundColour={'white'}>
				<iframe
					src="https://www.preceden.com/timelines/913913/embed/f654f40cff4332285ee82b24f69a8ed3"
					width="100%"
					height="1172"
					frameborder="0"
					title="Preceden Timeline"
				></iframe>
			</VevolSection>
		</Layout>
	);
}
