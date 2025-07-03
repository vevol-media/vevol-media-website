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
				<title>Mentenanță Shopify România - Suport Tehnic și Servicii Administrare</title>
				<meta
					name="description"
					content="Servicii de mentenanță și suport pentru Shopify în România. Planuri flexibile, suport tehnic prioritar și dezvoltare continuă pentru magazinul online."
				/>
			</Helmet>
			<SlimHero
				heading="Mentenanță și Suport Shopify"
				subheading="Servicii Profesionale pentru Funcționarea Optimă a Magazinului"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'De Ce Este Esențială Mentenanța Regulată'}
						highlightedWord={'Esențială'}
						className="mb-4em"
						subtitle={'Investiție în stabilitate, securitate și performanță'}
					/>
					<p className="py-6">
						Mentenanța regulată a magazinului Shopify este crucială pentru asigurarea funcționării optime,
						securității datelor și experiența utilizatorilor. Serviciile noastre de mentenanță previn
						problemele înainte să afecteze afacerea și asigură că magazinul rămâne actualizat cu cele mai
						recente funcționalități și standarde de securitate.
					</p>
					<ServicePlans scrollToFeatures={scrollToFeatures} />
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<HeadingBlock
						title={'Procesul de Mentenanță'}
						highlightedWord={'Procesul'}
						className="mb-4em"
						subtitle={'De la startup la enterprise - soluții personalizate'}
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
