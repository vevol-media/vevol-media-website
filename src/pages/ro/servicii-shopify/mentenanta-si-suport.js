import Layout from '../../../components/layout/layout';
import React, { useRef } from 'react';
import { Container } from 'bloomer';
import { Helmet } from 'react-helmet';
import featuresIndex from '../../../enums/features-index';
import FeaturesIndex from '../../../components/features-index/features-index';
import HeadingBlock from '../../../components/heading-block/heading-block';
import MainForm from '../../../components/forms/main-form';
import ServicePlans from '../../../components/service-plans/service-plans';
import SideDrawer from '../../../components/side-drawer/side-drawer';
import SlimHero from '../../../components/slim-hero/slim-hero';
import VevolSection from '../../../components/general-components/vm-section';

export default function Page() {
	const featuresIndexRef = useRef();
	const scrollToFeatures = () => {
		featuresIndexRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		});
	};

	return (
		<Layout>
			<Helmet>
				<title>Mentenanță și Suport - Vevol Media</title>
				<meta
					name="description"
					content="Reduceți costurile de mentenanță sau dezvoltare prin plata unei taxe lunare, trimestriale sau anuale. Alegeți unul dintre pachetele noastre de inovație și construim viitorul împreună."
				/>
			</Helmet>
			<SlimHero
				heading="Mentenanță și Suport"
				subheading="Reduceți costurile de mentenanță sau dezvoltare prin plata unei taxe lunare, trimestriale sau anuale."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Obțineți Servicii Expert Regulare'}
						highlightedWord={'Expert'}
						className="mb-4em"
						subtitle={
							'Permiteți afacerii dumneavoastră să crească mai rapid și mai mare cu pachetele noastre de servicii îmbunătățite.'
						}
					/>
					<ServicePlans scrollToFeatures={scrollToFeatures} />
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<HeadingBlock
						title={'Index Funcționalități'}
						highlightedWord={'Funcționalități'}
						className="mb-4em"
						subtitle={'Află mai multe despre fiecare funcționalitate inclusă în pachetele noastre'}
					/>
					<FeaturesIndex featuresIndexRef={featuresIndexRef} featuresIndex={featuresIndex.ro} />
				</Container>
			</VevolSection>
			<SideDrawer>
				<MainForm standalone />
			</SideDrawer>
		</Layout>
	);
}
