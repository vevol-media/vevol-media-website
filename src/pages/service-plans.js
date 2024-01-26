import Layout from '../components/layout/layout';
import React, { useRef } from 'react';
import { Container } from 'bloomer';
import { Helmet } from 'react-helmet';
import featuresIndex from '../enums/features-index';
import FeaturesIndex from '../components/features-index/features-index';
import HeadingBlock from '../components/heading-block/heading-block';
import MainForm from '../components/forms/main-form';
import ServicePlans from '../components/service-plans/service-plans';
import SideDrawer from '../components/side-drawer/side-drawer';
import SlimHero from '../components/slim-hero/slim-hero';
import VevolSection from '../components/general-components/vm-section';

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
				<title>Service Plans - Vevol Media</title>
				<meta
					name="description"
					content="Reduce your service costs with our monthly, quaterly or yearly service plans. Choose one of our innovation packages and let's build your future together."
				/>
			</Helmet>
			<SlimHero
				heading="Service Plans"
				subheading="Cut down on your maintenance or development costs by paying a montly, quaterly or yearly fee."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Get Expert Services Regularly'}
						highlightedWord={'Expert'}
						className="mb-4em"
						subtitle={
							'Enable your business to grow faster and bigger with our feature packed service plans.'
						}
					/>
					<ServicePlans scrollToFeatures={scrollToFeatures} />
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<HeadingBlock
						title={'Features Index'}
						highlightedWord={'Features'}
						className="mb-4em"
						subtitle={'Learn more about each feature included in our plans'}
					/>
					<FeaturesIndex featuresIndexRef={featuresIndexRef} featuresIndex={featuresIndex} />
				</Container>
			</VevolSection>
			<SideDrawer>
				<MainForm standalone />
			</SideDrawer>
		</Layout>
	);
}
